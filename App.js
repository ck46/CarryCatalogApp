import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView  } from 'react-native';
import { Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const styles = StyleSheet.create({
    container: {
	flex: 1,
	// marginTop: Constants.statusBarHeight,
    },
    text: {
	fontSize: 42,
    },
});

function HomeScreen() {
    return (
	<View style={styles.container}>
	    <Header
	    centerComponent={{ text: 'CarryCatalog', style: { color: '#fff' } }}
	    containerStyle={{
		backgroundColor: '#60b633',
		justifyContent: 'space-around',
	    }}
	    />
	    <ScrollView>
		<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		</View>
	    </ScrollView>
	</View>
    );
}

function CatalogsScreen() {
    return (
	<View style={styles.container}>
	    <Header
		centerComponent={{ text: 'CATALOGS', style: { color: '#fff' } }}
		containerStyle={{
		    backgroundColor: '#60b633',
		    justifyContent: 'space-around',
		}}
	    />
	    <ScrollView>
		<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		</View>
	    </ScrollView>
	</View>
    );
}

function StoresScreen() {
    return (
	<View style={styles.container}>
	    <Header
		centerComponent={{ text: 'STORES', style: { color: '#fff' } }}
		containerStyle={{
		    backgroundColor: '#60b633',
		    justifyContent: 'space-around',
		}}
	    />
	    <ScrollView>
		<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'powderblue', margin: 10}} />
		    <View style={{width: 150, height: 200, backgroundColor: 'skyblue', margin: 10}} />
		</View>
	    </ScrollView>
	</View>
    );
}

function SettingsScreen() {
    return (
	<View style={styles.container}>
	    <Header
	    centerComponent={{ text: 'SETTINGS', style: { color: '#fff' } }}
	    containerStyle={{
		backgroundColor: '#60b633',
		justifyContent: 'space-around',
	    }}
	    />
	    <ScrollView>
	    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text>CarryCatalog Settings</Text>
	    </View>
	    </ScrollView>
	</View>
    );
}

const Tab = createBottomTabNavigator();

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
		    activeTintColor: 'tomato',
		    inactiveTintColor: 'gray',
		}}
	    >
		<Tab.Screen name="Home" component={HomeScreen} />
		<Tab.Screen name="Catalogs" component={CatalogsScreen} />
		<Tab.Screen name="Stores" component={StoresScreen} />
		<Tab.Screen name="Settings" component={SettingsScreen} />
	    </Tab.Navigator>
	</NavigationContainer>
    );
}
