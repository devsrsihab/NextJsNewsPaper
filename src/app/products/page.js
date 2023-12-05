import Product from "@/Components/Product/Product";
import style from './Products.module.css'



const Posts = async () => {
  // fethc the data
  const res = await fetch("http://localhost:8000/products",{
    cache: "no-store"
  });
  const products  = await res.json();

  return (
    <div className="p-10">
      <h3 className={style.sectionTitle}>
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
