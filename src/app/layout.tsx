import Header from "@/components/Header";
import "./globals.css";
import Provider from "@/components/Provider";

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
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
