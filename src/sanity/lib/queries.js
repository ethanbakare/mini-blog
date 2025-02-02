// Query to get all essays for the homepage
export const homePageQuery = `*[_type == "post"] | order(publishedAt desc) {
    title,
    description,
    "slug": slug.current,
    publishedAt
  }`
  
  // Query to get a single essay by slug
  export const getEssayBySlug = `*[_type == "post" && slug.current == $slug][0] {
    title,
    description,
    content,
    publishedAt,
    "prevEssay": prevEssay->{
      "slug": slug.current,
      title
    },
    "nextEssay": nextEssay->{
      "slug": slug.current,
      title
    }
  }`