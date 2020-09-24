import * as React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
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
			<Text>CarryCatalog Settings</Text>
		    </View>
		</ScrollView>
	    </View>
	);
    }
}
