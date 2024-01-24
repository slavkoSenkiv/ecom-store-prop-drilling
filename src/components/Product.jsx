export default function Product({image, title, price, description}){
  return (
    <div className="product">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <button>+ Add</button>
    </div>
  )
}