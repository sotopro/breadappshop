import React from 'react';
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartNavigator from './cart';
import OrderNavigator from './order';
import ShopNavigator from './shop';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants/themes';

const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <TabStack.Navigator
            initialRouteName='Shop'
            screenOptions={{
                headerShown: false,
            }}
        >
            <TabStack.Screen
                name='Shop'
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons name={focused ? 'home' : 'home-outline' } size={20}  />
                    )
                }}
            />
            <TabStack.Screen
                name='Cart'
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons name={focused ? 'cart' : 'cart-outline' } size={20}  />
                    )
                }}
            />
            <TabStack.Screen
                name='Order'
                component={OrderNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons name={focused ? 'list' : 'list-outline' } size={20}  />
                    )
                }}
            />
        </TabStack.Navigator>
    )
}

export default MainNavigator;