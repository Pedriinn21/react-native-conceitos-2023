import React from 'react'
const Pagina1 = ({ navigation }) => {

    return (
        <>
            <Button title='Pagina2' onPress={() => nativation.navigate('pagina2')} />
            <Button title='Pagina2' onPress={() => nativation.navigate('pagina2')} />
            <Card titulo="Pedro" />
            <Card titulo="Henrique">
                <Text>React native</Text>
            </Card>

            <Card titulo="Principal" nome="Catapimbas">
                <Text>PA 1</Text>
                <Text>PA 2</Text>
                <Text>PA 3</Text>
                <Button title='Detalhes' />

            </Card>

        </>

    )
}