import React from 'react'
import { Text } from 'react-native'

export const Arrays = () => {

    const carros = ['Fusca', 'Celta', 'Palio', 'Gol', 'Ka']

    const carro = { marca: 'VW', modelo: 'Fusca', ano: 1978, cor: 'Preto', foto:''}

    return (
        <>
            {carros.map(item => (
                <Text>{item}</Text>

            ))}
        </>
    )
}

export default Arrays 
