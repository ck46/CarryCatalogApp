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
	justifyContent: 'center',
	alignItems: 'center'
    },
    logo: {
	height: 50,
	width: 200,
    },
});

export default class HelpScreen extends Component {
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
			    <Text style={{color: 'blue'}}
				  onPress={() => Linking.openURL('https://carrycatalog.com/about')}>
				Contact us
			    </Text>
			</View>
		    </View>
		</ScrollView>
	    </View>
	);
    }
}
