import * as React from 'react';
import { Component } from 'react';
import { Button, View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";

const styles = StyleSheet.create({
    container: {
	flex: 1,
    },
    text: {
	fontSize: 42,
    },
    tinyLogo: {
	width: '100%',
	height: 450,
    },
});

export default class Catalog extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    images: [
		"https://source.unsplash.com/1024x768/?nature",
		"https://source.unsplash.com/1024x768/?water",
		"https://source.unsplash.com/1024x768/?girl",
		"https://source.unsplash.com/1024x768/?tree",
		"https://carrycatalog.s3.amazonaws.com/catalogs/5f4cd68e6ff3a6677ce65c9e.jpg"
	    ]
	};
    }
    render(){
	return (
	    <View style={styles.container}>
		<Header
		leftComponent={<Icon
				   name='chevron-left'
				   type='font-awesome'
				   size='24' color='#fff'
				   onPress={() => this.props.navigation.goBack()}
		/>}
		centerComponent={{ text: 'Catalog Details', style: { color: '#fff' } }}
		containerStyle={{
		    backgroundColor: '#60b633',
		    justifyContent: 'space-around',
		}}
		/>
		<ScrollView>
		    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<SliderBox
			    autoplay={false}
			    images={this.state.images}
			    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
			    currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
			/>
		    </View>
		</ScrollView>
	    </View>
	);
    }
}
