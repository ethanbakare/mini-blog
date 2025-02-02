import {defineField, defineType} from 'sanity'

const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'prevEssay',
      title: 'Previous Essay',
      type: 'reference',
      to: [{type: 'post'}],
    }),
    defineField({
      name: 'nextEssay',
      title: 'Next Essay',
      type: 'reference',
      to: [{type: 'post'}],
    }),
  ],
})

export default postType