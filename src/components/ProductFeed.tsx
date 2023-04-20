import Product from "./Product";

function ProductFeed({ products }: any) {
  return (
    <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-40 mx-auto">
      {products.slice(0, 4).map((product: product) => {
        return <Product key={product.id} {...product} />;
      })}
      <img
        className="md:col-span-full mx-auto"
        src="https://links.papareact.com/dyz"
        alt="banner"
      />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product: product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      {products.slice(5, products.length).map((product: product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
}

export default ProductFeed;
