import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import { styles } from './styles';

const CategoryGrid = ({ item, onSelected }) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
         <View style={styles.container}>
            <TouchableComponent 
                style={{ ...styles.touchable, ...{backgroundColor: item.color}}}
                onPress={() => onSelected(item)}    
            >
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableComponent>
         </View>
    )
}

export default CategoryGrid;