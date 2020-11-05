import React from 'react'
import { Button } from 'reactstrap'

export const EditMessages = (props) => {
  return (
    <>
      <div>
        <Button onClick={() => props.delete()}>
            Delete
        </Button>
      </div>
    </>
  )
}

export default EditMessages