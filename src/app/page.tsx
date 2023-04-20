import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const products: product[] = await fetch("https://fakestoreapi.com/products")
    .then((products) => products.json())
    .catch((err) => console.log(err));
  return (
    <main className="max-w-screen-2xl mx-auto">
      {/* banner */}
      <Banner />

      {/* Product feed */}
      <ProductFeed products={products} />
    </main>
  );
}
