import "./globals.css";

export const metadata = {
  title: "E Commerce App",
  description: "E Commerce App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
