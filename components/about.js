import * as React from 'react';
import { Component } from 'react';
import { View, Image, StyleSheet, Text, ScrollView, Linking } from 'react-native';
import { Header, Icon } from 'react-native-elements';

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
	marginTop: 10,
	padding: 5,
	backgroundColor: 'white'
    },
    logo: {
	height: 50,
	width: 200,
    },
});

export default class AboutScreen extends Component {
    render() {
	return (
	    <View style={styles.container}>
		<Header
		leftComponent={<Icon
				   name='chevron-left'
				   type='font-awesome'
				   size='24' color='#fff'
				   onPress={() => this.props.navigation.goBack()}
		/>}
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
			<View style={styles.settings}>
			    <Text>
				We are a web service and application platform that accumulates all catalogs in Zambia and puts them under one platform. We provide an all in one digital marketing platform where buyers can consult the latest data from suppliers and search for specific product information such as	descriptions, prices and product images. A smart, flexible, convenient and easy to use platform for buyers and sellers. As Carrycatalog are dedicated to providing you with the best eco- friendly application for online catalog advertisement by digitizing the catalogs.
			    </Text>
			    <Text style={{color: 'blue'}}
				  onPress={() => Linking.openURL('https://carrycatalog.com/about')}>
				More about us
			    </Text>
			</View>
		    </View>
		</ScrollView>
	    </View>
	);
    }
}
