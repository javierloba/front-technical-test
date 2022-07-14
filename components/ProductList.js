import Product from "./Product";

export function ProductList({products}) {
  return (
    <div className="container mx-auto  max-w-5xl">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-5">
        {products.map((product) => (
          <Product 
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
            stock={product.stock}
            brand={product.brand}
            category={product.description}
            thumbnail={product.thumbnail}
            images={product.images}
          />
        ))}
      </ul>
    </div>
    )
  }