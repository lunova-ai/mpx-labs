import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MPXConsole from "../components/MPXConsole";

export const metadata = {
  title: "MPX Labs",
  description: "AI-driven systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-mpx-black text-mpx-white">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
        <MPXConsole />
      </body>
    </html>
  );
}
