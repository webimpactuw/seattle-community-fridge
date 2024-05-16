import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '8h94if9z', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // the name of your dataset
  useCdn: true, // `false` if you want to ensure fresh data
});
