import React from "react"
import {Card} from "semantic-ui-react"

const Item = (props) => {
  const item = {id: props.id, name: props.name, image: props.image, description: props.description, likes:props.likes}

  return(
    <>
    <Card align='center'>
      <Card.Header>{props.name}</Card.Header>
      <Card.Content>{props.image}</Card.Content>
      <Card.Content>{props.description}</Card.Content>
      <Card.Meta>{props.likes}</Card.Meta>
    </Card>
    </>

  )
}

export default Item