import React from 'react'

import { View, Text, Button } from 'react-native'
import { styles } from './styles'

const Products = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Products Screen</Text>
            <Button title='Go to Home' onPress={() => {
                navigation.navigate('Home')
            }} />
        </View>
    )
}

export default Products