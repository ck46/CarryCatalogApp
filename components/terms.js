import * as React from 'react';
import { Component } from 'react';
import { View, Image, StyleSheet, Text, ScrollView, } from 'react-native';
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
	flexDirection: 'row',
	marginTop: 10,
	padding: 5,
	backgroundColor: 'white'
    },
    logo: {
	height: 50,
	width: 200,
    },
});

export default class TermsScreen extends Component {
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
				Welcome to our website. Www. Carrycatalog.com. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our policy govern carrycatalog relationship with you in relation to this website.
				for terms and conditions check https://carrycatalog.com/terms
			    </Text>
			</View>
		    </View>
		</ScrollView>
	    </View>
	);
    }
}
