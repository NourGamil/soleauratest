import "./globals.css";
import { brand } from "../lib/site";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: `${brand.name}`,
  description: "A premium sneaker and footwear e-commerce experience rebuilt with Next.js, Tailwind, and GSAP.",
  icons: {
    icon: "icon.svg",
    shortcut: "icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          
        </CartProvider>
      </body>
    </html>
  );
}
