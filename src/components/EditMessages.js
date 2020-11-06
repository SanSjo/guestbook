import React, {useState} from 'react'
import { Button, Input } from 'reactstrap'

export const EditMessages = (props) => {
    const [edit, setEdit] = useState('')
    
    // const handleEditButton = (newValue) => {
    //     fetch(`http://localhost:8080/messages/${props.id}`, {
    //       method: 'PUT',
    //       body: JSON.stringify({ message: newValue }),
    //       headers: { 'Content-Type': 'application/json' }
    //     })
    //       .then((res) => res.json())
    //       .then((data) => setEdit(data.message))
    //       .catch((err) => {
    //         console.log('Error:', err)
    //       })
    //   }

    const handleEdit = () => {
        props.editMessage(edit)
        setEdit('')
    }

   
  return (
    <>
      <div>
        <Input type="text" value={edit || ''} onChange={(event) => setEdit(event.target.value)} />
        <Button onClick={handleEdit}>
            Delete
        </Button>
      </div>
    </>
  )
}

export default EditMessages