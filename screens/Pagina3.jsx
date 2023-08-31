import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'

const Pagina3 = (navigation) => {
    const LeftContent = props => <Avatar.Icon {...props} icon="account" />
    const LeftContent2 = props => <Avatar.Icon {...props} icon="account-box" />
    const LeftContent3 = props => <Avatar.Icon {...props} icon="badge-account-horizontal" />
    const LeftContent4 = props => <Avatar.Icon {...props} icon="comment-account" />

    return (
        <>
        <Button title='Pagina 1' onPress={()=>navigation.navigate('Pagina1')} />
        <Button title='Pagina 2' onPress={()=>navigation.navigate('Pagina2')} />


            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            </Card>


            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent2} />
            </Card>



            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent3} />
            </Card>


            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent4} />
            </Card>
        </>
  )
}

export default Pagina3