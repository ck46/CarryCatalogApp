import * as React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
	flex: 1,
    },
    text: {
	fontSize: 42,
    },
    tinyLogo: {
	width: '100%',
	height: '80%',
    },
    settings: {
	flex: 1,
	flexDirection: 'row',
	justifyContent: 'space-around',
	margin: 10,
	padding: 5,
	backgroundColor: 'white'
    },
});

export default class SettingsScreen extends Component {
    render() {
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
			<TouchableOpacity>
			    <View style={styles.settings}>
				<Text>Login</Text>
			    </View>
			</TouchableOpacity>
			<TouchableOpacity>
			    <View style={styles.settings}>
				<Text>Signup</Text>
			    </View>
			</TouchableOpacity>
			<TouchableOpacity>
			    <View style={styles.settings}>
				<Text>Help</Text>
			    </View>
			</TouchableOpacity>
			<TouchableOpacity>
			    <View style={styles.settings}>
				<Text>Tell a Friend</Text>
			    </View>
			</TouchableOpacity>
		    </View>
		</ScrollView>
	    </View>
	);
    }
}
