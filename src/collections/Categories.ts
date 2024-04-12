import type { CollectionConfig } from 'payload/types'

import { SaveAndCloseButton } from '@/components/SaveAndCloseButton'
const Categories: CollectionConfig = {
  slug: 'categories',
  hooks: {
    afterChange: [
      async ({ context, collection, doc, req, operation, previousDoc }) => {
        console.log('CREATE')
      },
    ],
  },

  admin: {
    group: 'Parametres',
    useAsTitle: 'Categories',
    components: {
      edit: {
        SaveButton: SaveAndCloseButton,
      },
    },
  },
  labels: { singular: 'Catégorie', plural: 'Catégories' },
  timestamps: false,
  fields: [
    {
      name: 'Categories', // Correspond au champ 'useAsTitle' dans la configuration admin
      type: 'text',
      label: 'Nom de catégorie',
    },
  ],
}

export default Categories
