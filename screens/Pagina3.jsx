import React from 'react'

const Pagina3 = () => {
    const LeftContent = props => <Avatar.Icon  {...props} icon="account" />
    const LeftContent2 = props => <Avatar.Icon  {...props} icon="account-box" />
    const LeftContent3 = props => <Avatar.Icon  {...props} icon="badge-account-horizontal" />
    const LeftContent4 = props => <Avatar.Icon  {...props} icon="comment-account" />

    return (
        <>
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
