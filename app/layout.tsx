import type { Metadata } from "next";
import "./globals.css";
const origin = "https://smriti-midnight-studio.stutipandey2507.chatgpt.site";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: "Smriti Pandey — Software Developer",
  description:
    "Portfolio of Smriti Pandey, a Computer Engineering student building full-stack applications, backend systems, and digital products.",
  openGraph: {
    title: "Smriti Pandey — Software Developer",
    description:
      "Full-stack applications. Backend systems. Thoughtful digital products.",
    type: "website",
    url: origin,
    images: [
      {
        url: "/hero/poster.jpg",
        width: 848,
        height: 480,
        alt: "Smriti’s illustrated developer studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smriti Pandey — Software Developer",
    description: "Full-stack, systems, and digital products.",
    images: ["/hero/poster.jpg"],
  },
  alternates: { canonical: origin },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
