import Product from "@/Components/Product/Product";

const Posts = async () => {
  // fethc the data
  const res = await fetch("https://dummyjson.com/products",{
    cache:"force-cache"
  });
  const { products } = await res.json();

  return (
    <div className="p-10">
      <h3 className="text-3xl   text-black capitalize font-semibold md:text-4xl">
        the total products: {products?.length}
      </h3>
      <div className="inner-container">
        <div className="products grid grid-cols-4 ">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
