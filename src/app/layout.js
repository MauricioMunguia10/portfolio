import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio ",
  description: "Portfolio Mauricio MG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.layout}>{children}</div>
      </body>
    </html>
  );
}
