export default (() => new Array(20).fill(1).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.trunc(Math.random() * 100 + 1) * (i + 1),
    inCart: false,
    isWishlist: false
})))()