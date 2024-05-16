import { defineField, defineType } from 'sanity'

export const aboutUsTopPhoto = defineType({
  name: 'aboutUsTopPhoto',
  title: 'aboutUsTopPhoto',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'AboutPhoto',
    })
    // defineField({
    //   name: 'details',
    //   type: 'array',
    //   title: 'Event Details',
    //   of: [{ type: 'block' }],
    // })
  ],
});
 