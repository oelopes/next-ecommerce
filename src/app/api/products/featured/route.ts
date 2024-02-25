import data from '../data.json'

export const getFeatured = async () => {
  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}
