import "./Product.css"
import Price from "./Price"

function Product({ product }) {
  const { title, oldPrice, newPrice, description, visual, label } = product

  return (
    <article className="Product">
      <div className={`product-visual visual-${visual}`} aria-hidden="true">
        <span className="product-label">{label}</span>
        <span className="product-art product-art-main" />
        <span className="product-art product-art-detail" />
        <span className="visual-caption">NEXA / OBJECTS FOR EVERYDAY</span>
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <ul className="product-features">
          {description.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Price oldPrice={oldPrice} newPrice={newPrice} />
      </div>
    </article>
  )
}

export default Product
