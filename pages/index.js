import { ProductList } from "../components/ProductList";
import { Search } from "../components/Search";
// TODO: Implement search component
// TODO: Implement product list component

function Home(props) {
  return (
    <section className="my-10">
      <Search />
      <ProductList
      products={props.productArray} 
      />
    </section>
  )
}

export async function getStaticProps() {
  // fetch data from an API
  const res = await fetch('https://dummyjson.com/products?limit=10')

  const products = await res.json();

  const productArray = products.products.map((product) => {
    return ({
        id: product.id.toString(),
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage.toString(),
        rating: product.rating.toString(),
        stock: product.stock.toString(),
        brand: product.brand,
        category: product.category,
        thumbnail: product.thumbnail,
        images: product.images,
      })
  })
  
  // con revalidate añadimos incremental static generation
  // así la información se actualizará cada X segundos después del deploy
  return {
    props: {
      productArray
    },
    revalidate: 10
  };
}

export default Home;