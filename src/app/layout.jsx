import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "IMDb",
  description: "Create IMDb clone by next.js and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* header section */}
        <Header />

        {/* navigation section */}

        {/* search */}

        {children}
      </body>
    </html>
  );
}
