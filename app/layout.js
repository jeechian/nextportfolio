
import Footer from "./components/Footer";
import "./globals.css";


export const metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
