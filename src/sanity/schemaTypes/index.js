import blockContentType from './blockContentType'
import authorType from './authorType'
import postType from './postType'
import categoryType from './categoryType'

export const schemaTypes = [
  postType,
  authorType,
  categoryType,
  blockContentType,
]

// Add this named export
export const schema = {
  types: schemaTypes,
}