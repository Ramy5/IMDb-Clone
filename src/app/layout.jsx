import Header from "@/components/Header/Header";
import "./globals.css";
import Provider from "./provider";

export const metadata = {
  title: "IMDb",
  description: "Create IMDb clone by next.js and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* header section */}
          <Header />

          {/* navigation section */}

          {/* search */}

          {children}
        </Provider>
      </body>
    </html>
  );
}
