import { defineField, defineType } from 'sanity';

export const foodDonationPickupDesc = defineType({
  name: 'foodDonationPickupDesc',
  title: 'Food Donation Pickup Description',
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
