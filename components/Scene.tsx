"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
/** A single disposable scene lifecycle shared by the ambient and project views. */
export default function Scene({
  mode = "dust",
}: {
  mode?: "dust" | "package" | "circuit";
}) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }
    renderer.setPixelRatio(
      Math.min(devicePixelRatio, innerWidth < 768 ? 1 : 1.5),
    );
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.z = 7;
    const group = new THREE.Group();
    scene.add(group);
    let points: THREE.Points | undefined;
    let texture: THREE.CanvasTexture | undefined;
    if (mode === "dust") {
      const count = innerWidth < 768 ? 20 : 65;
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 14;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const c = document.createElement("canvas");
      c.width = c.height = 32;
      const ctx = c.getContext("2d")!;
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255,229,195,.8)");
      grad.addColorStop(1, "rgba(255,229,195,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
      texture = new THREE.CanvasTexture(c);
      points = new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          size: 0.065,
          map: texture,
          transparent: true,
          opacity: 0.45,
          depthWrite: false,
          color: 0xe9c49e,
        }),
      );
      group.add(points);
    } else {
      scene.add(new THREE.AmbientLight(0xffffff, 1.7));
      const key = new THREE.DirectionalLight(0xffc18c, 4);
      key.position.set(2, 4, 5);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0x88bec8, 2);
      fill.position.set(-4, 1, 2);
      scene.add(fill);
      const geo =
        mode === "package"
          ? new THREE.BoxGeometry(2, 2, 2)
          : new THREE.BoxGeometry(2.6, 3.4, 0.18);
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshStandardMaterial({
          color: mode === "package" ? 0x9c7052 : 0x283f39,
          roughness: 0.75,
          metalness: 0.18,
        }),
      );
      group.add(mesh);
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({
          color: 0xe9ba86,
          transparent: true,
          opacity: 0.35,
        }),
      );
      group.add(edges);
      if (mode === "package") {
        const band = new THREE.Mesh(
          new THREE.BoxGeometry(0.36, 2.02, 2.02),
          new THREE.MeshStandardMaterial({ color: 0xdec19b, roughness: 0.9 }),
        );
        group.add(band);
      } else {
        for (let i = 0; i < 12; i++) {
          const chip = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.35, 0.14),
            new THREE.MeshStandardMaterial({
              color: 0x111817,
              metalness: 0.4,
              roughness: 0.5,
            }),
          );
          chip.position.set(
            ((i % 3) - 1) * 0.66,
            Math.floor(i / 3) * 0.58 - 0.85,
            0.2,
          );
          group.add(chip);
        }
      }
      group.rotation.set(0.25, -0.5, 0);
    }
    let visible = false,
      frame = 0,
      t = 0;
    const pointer = { x: 0, y: 0 };
    const move = (e: PointerEvent) => {
      pointer.x = (e.clientX / innerWidth - 0.5) * 0.15;
      pointer.y = (e.clientY / innerHeight - 0.5) * 0.1;
    };
    const render = () => {
      frame = 0;
      if (!visible || document.hidden || reduced.matches) return;
      t += 0.006;
      group.rotation.y +=
        (pointer.x +
          (mode === "dust" ? Math.sin(t) * 0.015 : -0.5 + Math.sin(t) * 0.12) -
          group.rotation.y) *
        0.025;
      group.rotation.x +=
        ((mode === "dust" ? 0 : 0.25) + pointer.y - group.rotation.x) * 0.025;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    const start = () => {
      if (!frame) render();
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { rootMargin: "60px" },
    );
    io.observe(el);
    const resize = new ResizeObserver(() => {
      const { width, height } = el.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    });
    resize.observe(el);
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else start();
    };
    const motion = () => {
      if (reduced.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        renderer.clear();
      } else start();
    };
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("pointermove", move, { passive: true });
    reduced.addEventListener("change", motion);
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      resize.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("pointermove", move);
      reduced.removeEventListener("change", motion);
      scene.traverse((o) => {
        if (
          o instanceof THREE.Mesh ||
          o instanceof THREE.Points ||
          o instanceof THREE.LineSegments
        ) {
          o.geometry.dispose();
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          mats.forEach((m) => m.dispose());
        }
      });
      texture?.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [mode]);
  return (
    <div
      ref={host}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    />
  );
}
