import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Amazon clone",
  description: "this is test project by lxllx",
  icons: "favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
