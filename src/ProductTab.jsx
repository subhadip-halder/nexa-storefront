import Product from "./Product.jsx"

const products = [
  {
    title: "Logitech MX Master",
    oldPrice: 12495,
    newPrice: 8999,
    description: ["8,000 DPI sensor", "5 programmable buttons"],
    visual: "mouse",
    label: "DESK FAVORITE",
  },
  {
    title: "Apple Pencil (2nd Gen)",
    oldPrice: 11900,
    newPrice: 9199,
    description: ["Intuitive touch surface", "Designed for iPad Pro"],
    visual: "pencil",
    label: "CREATIVE PICK",
  },
  {
    title: "Zebronics Zeb-Transformer",
    oldPrice: 1599,
    newPrice: 899,
    description: ["Built for everyday use", "Comfortable, precise control"],
    visual: "keyboard",
    label: "GREAT VALUE",
  },
  {
    title: "Petronics Toad 23",
    oldPrice: 599,
    newPrice: 278,
    description: ["Wireless freedom", "Optical tracking"],
    visual: "compactmouse",
    label: "UNDER ₹300",
  },
]

function ProductTab() {
  return (
    <div className="product-grid">
      {products.map((product) => <Product key={product.title} product={product} />)}
    </div>
  )
}

export default ProductTab
