import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Event Name',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Event Image',
    }),
    defineField({
      name: 'websiteURL',
      type: 'url',
      title: 'Website URL',
    }),
    defineField({
      name: 'details',
      type: 'array',
      title: 'Event Details',
      of: [{ type: 'block' }],
    }),
  ],
});
