import React from 'react'

const Pagina2 = () => {
    const LeftContent = props => <ActivityIndicatorBase.Icon {...props} icon='folder' />
  return (
    <>
    <Card>
<Card.Title title="Card Title" sutitle="Card Subtitle" left={LeftContent} />
<Card.Content>
    <Text variant="titleLarge">Card title</Text>
    <Text variant="bodyMedium"></Text>
</Card.Content>
<Card.Cover source={{ uri '' }} />
<Card.Actions>
<Button>Cancel</Button>
<Button>Ok</Button>
</Card.Actions>


    </Card>
    
    </>
  )
}

export default Pagina2