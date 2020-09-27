import * as React from 'react';
import { Component } from 'react';
import { Button, FlatList, Alert, View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SliderBox } from "react-native-image-slider-box";

// Local components
import Catalog from './components/catalog';
import CatalogsScreen from './components/catalogs';
import Store from './components/store';
import StoresScreen from './components/stores';
import HomeScreen from './components/home';
import SettingsScreen from './components/settings';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (
	<Stack.Navigator
	    screenOptions={{
		headerShown: false
	    }}
	    initialRouteName="Main">
            <Stack.Screen name="Main" component={HomeScreen} />
	    <Stack.Screen name="Catalog" component={Catalog} />
	    <Stack.Screen name="Store" component={Store} />
	</Stack.Navigator>
    );
}

function Catalogs() {
    return (
	<Stack.Navigator
	    screenOptions={{
		headerShown: false
	    }}
	    initialRouteName="AllCatalogs">
            <Stack.Screen name="AllCatalogs" component={CatalogsScreen} />
            <Stack.Screen name="Catalog" component={Catalog} />
	</Stack.Navigator>
    );
}

function Stores() {
    return (
	<Stack.Navigator
	    screenOptions={{
		headerShown: false
	    }}
	    initialRouteName="AllStores">
            <Stack.Screen name="AllStores" component={StoresScreen} />
            <Stack.Screen name="Store" component={Store} />
	    <Stack.Screen name="Catalog" component={Catalog} />
	</Stack.Navigator>
    );
}

export default function App() {
    return (
	<NavigationContainer>
	    <Tab.Navigator
		screenOptions={({ route }) => ({
		    tabBarIcon: ({ focused, color, size }) => {
			if (route.name === 'Home') {
			    return (
				<Ionicons
				    name={
				    focused
				    ? 'ios-home'
				    : 'ios-home'
				    }
				    size={size}
				    color={color}
				/>
			    );
			} else if (route.name === 'Catalogs') {
			    return (
				<Ionicons
				    name={focused ? 'ios-book' : 'ios-book'}
				    size={size}
				    color={color}
				/>
			    );
			} else if (route.name === 'Stores') {
			    return (
				<Ionicons
				    name={focused ? 'md-business' : 'md-business'}
				    size={size}
				    color={color}
				/>
			    );
			} else if (route.name === 'Settings') {
			    return (
				<Ionicons
				    name={focused ? 'ios-list-box' : 'ios-list'}
				    size={size}
				    color={color}
				/>
			    );
			}
		    },
		})}
		tabBarOptions={{
		    activeTintColor: '#60b633',
		    inactiveTintColor: 'gray',
		}}
	    >
		<Tab.Screen name="Home" component={Home} />
		<Tab.Screen name="Catalogs" component={Catalogs} />
		<Tab.Screen name="Stores" component={Stores} />
		<Tab.Screen name="Settings" component={SettingsScreen} />
	    </Tab.Navigator>
	</NavigationContainer>
    );
}
