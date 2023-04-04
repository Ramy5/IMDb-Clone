import "./globals.css";

export const metadata = {
  title: "IMDb Clone",
  description: "Create IMDb clone by next.js and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
