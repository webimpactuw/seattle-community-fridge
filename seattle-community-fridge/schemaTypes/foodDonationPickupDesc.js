import { defineField, defineType } from 'sanity';

export const foodDonationPickupDesc = defineType({
  name: 'foodDonationPickupDesc',
  title: 'Get Involved Food Donation Pickup Description',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    }),
  ],
});
