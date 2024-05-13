export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
    },
    {
      name: 'deployed',
      title: 'Deployed',
      type: 'boolean',
    }
  ]
};
