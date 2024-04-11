import * as React from 'react'
import { CustomSaveButton } from 'payload/types' // Assurez-vous que c'est le bon chemin d'importation

export const SaveAndCloseButton: CustomSaveButton = (props) => {
    const { DefaultButton, save } = props;
    const history = useHistory();
    const cancel = (e)=>{
      e.preventDefault();
      history.push({pathname:"/editor/collections/users?limit=10"});    
    }
    const saveOn = React.useCallback(()=>{
      save();
      history.push({pathname:"/editor/collections/users"});
     
    },[save, history]);
   
      return (<div className='user-btn'>
        <Button buttonStyle='secondary' onClick={cancel}>Cancel</Button>
        <DefaultButton label={'Add the User'} save={saveOn}/>
        </div>)
    }