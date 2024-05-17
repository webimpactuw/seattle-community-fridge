import { defineField, defineType } from 'sanity'

export const aboutUsPhotos = defineType({
  name: 'aboutPhoto',
  title: 'AboutPhoto',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'AboutPhoto',
    }),
    defineField({
      name: 'bottomTextbox',
      type: 'array',
      title: 'Event Details',
      of: [{ type: 'block' }],
    })
  ],
});
 