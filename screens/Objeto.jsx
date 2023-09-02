import React from 'react'
import { ScrollView } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

export const Objeto = () => {

    const carros = [
        { marca: 'VW', modelo: 'Fusca', ano: 1978, cor: 'Preto', foto: 'https://th.bing.com/th/id/R.4a45f8157c7e8cb202a357d3db3649dd?rik=iVDQZdIpGErkXQ&pid=ImgRaw&r=0' },
        { marca: 'Mercedes', modelo: 'CLA180', ano: 2023, cor: 'Branco', foto: 'https://th.bing.com/th/id/OIP.bnXNV8NRHUrM31jCFrQaHwHaFj?pid=ImgDet&rs=1' },
        { marca: 'Jeep', modelo: 'Compass', ano: 2023, cor: 'Azul', foto: 'https://th.bing.com/th/id/R.7da6cb55f641c40585fd820559024482?rik=PivFcReYBe5O3Q&pid=ImgRaw&r=0' },
        { marca: 'Ferrari', modelo: '480 Itália', ano: 2023, cor: 'Vermelho', foto: 'https://th.bing.com/th/id/R.6d372c48bc5a87640b1973ca0c28bf8d?rik=Lh9QhxJFxV68eQ&pid=ImgRaw&r=0' },
        { marca: 'BMW', modelo: '320i', ano: 2023, cor: 'Branco', foto: 'https://th.bing.com/th/id/OIP.DeualVMZjwccwv8Q1IyfQgHaFj?pid=ImgDet&rs=1' },
    ]

    const LeftContent = props => <Avatar.Icon {...props} icon="car" />

    return (
        <ScrollView>
            <>
                {carros.map(item => (

                    <>

                        <Card style={{ margin: 10, marginBottom: 20 }}>
                            <Card.Cover source={{ uri: item.foto }} />
                            <Card.Title title={item.modelo} subtitle={item.marca} left={LeftContent} />
                            <Text style={{ margin: 10, marginBottom: 5 }} >{item.ano} - {item.cor} </Text>
                        </Card>

                    </>

                ))}
            </>
        </ScrollView>
    )
}

export default Objeto 
