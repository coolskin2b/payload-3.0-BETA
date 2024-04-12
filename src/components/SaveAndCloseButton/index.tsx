import * as React from 'react'
import { CustomSaveButton } from 'payload/types' // Assurez-vous que c'est le bon chemin d'importation
import { Button } from '@payloadcms/ui/elements/Button'
export const SaveAndCloseButton: CustomSaveButton = (props) => {
  return (
    <div className="user-btn">
      <Button buttonStyle="secondary">Cancel</Button>
    </div>
  )
}
