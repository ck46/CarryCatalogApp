import * as React from 'react';
import { Component } from 'react';
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
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
	width: '100%',
	height: 64,
	flexDirection: 'row',
	marginTop: 10,
	padding: 5,
	backgroundColor: 'white',
	justifyContent: 'space-around',
    },
    settingsText: {
	fontSize: 20,
    },
    logo: {
	height: 50,
	width: 200,
    },
});

export default class SettingsScreen extends Component {
    render() {
	return (
	    <View style={styles.container}>
		<Header
		    centerComponent={<Image
					 style={styles.logo}
					 source={require('./images/carrycatalog.png')}
		    />}
		    containerStyle={{
			backgroundColor: '#60b633',
			justifyContent: 'space-around',
		    }}
		/>
		<ScrollView>
		    <View style={{ flex: 1, margin: 20}}>
			<TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
			    <View style={styles.settings}>
				<Text style={styles.settingsText}>About</Text>
			    </View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => Linking.openURL('https://carrycatalog.com/faqs')}>
			    <View style={styles.settings}>
				<Text style={styles.settingsText}>FAQs</Text>
			    </View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => Linking.openURL('https://carrycatalog.com/terms')}>
			    <View style={styles.settings}>
				<Text style={styles.settingsText}>Terms</Text>
			    </View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => Linking.openURL('https://carrycatalog.com/terms')}>
			    <View style={styles.settings}>
				<Text style={styles.settingsText}>Privacy</Text>
			    </View>
			</TouchableOpacity>
		    </View>
		</ScrollView>
	    </View>
	);
    }
}
