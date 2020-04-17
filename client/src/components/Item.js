import React from "react"
import {Card, Image,} from "semantic-ui-react"

const Item = (props) => {
  // const tem = {id: props.id, name: props.name, image: props.image, description: props.description, likes:props.likes}

  return(
    <>
    <Card align='center'>
      <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Image size="small" src={props.image} />
      <Card.Content>{props.description}</Card.Content>
      <Card.Meta>{props.likes}</Card.Meta>
      </Card.Content>
      
    </Card>
    </>

  )
}

export default Item