export default function Price({ oldPrice, newPrice }) {
  const discount = Math.round((1 - newPrice / oldPrice) * 100)
  const formatPrice = (amount) => `₹${amount.toLocaleString("en-IN")}`

  return (
    <div className="Price">
      <div className="price-line">
        <data className="newPrice" value={newPrice}>{formatPrice(newPrice)}</data>
        <del className="oldPrice">{formatPrice(oldPrice)}</del>
      </div>
      <span className="discount-badge">{discount}% off</span>
    </div>
  )
}
