export default function Product({ 
  title, 
  description, 
  price, 
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images
}) {
  return (
    <div className="flex justify-center p-6 text-6xl bg-gray-100 rounded-sm">
      <div className="flex flex-col justify-center align-center text-center">
        <img className="aspect-square object-contain mx-auto w-3/5" src={images[0]} alt={title} />
        <h1 className="text-xl uppercase">{title}</h1>
      </div>
    </div>
  )
}
