import {Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

import React from "react";


export default function TabLayout(){
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#a6d1f3',
                headerStyle: {
                    backgroundColor: '#383d44',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#383d44'
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Fish',
                    tabBarIcon: ({ color, focused }): any => (
                        <Ionicons
                            name={focused ? 'fish-sharp' : 'fish-outline'}
                            size={40}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'User',
                    tabBarIcon: ({ color, focused }): any => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={36}
                            color={color}
                        />
                    ),
                }}
            />s
        </Tabs>
    )
}
