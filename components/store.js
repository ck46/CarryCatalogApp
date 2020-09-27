import * as React from 'react';
import { Component } from 'react';
import { Button, FlatList, View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
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
	height: '80%',
    },
});

export default class Store extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    images: [
		"https://source.unsplash.com/1024x768/?nature",
		"https://source.unsplash.com/1024x768/?water",
		"https://source.unsplash.com/1024x768/?girl",
		"https://source.unsplash.com/1024x768/?tree"
	    ],
	    data: [
		{
		    id: 1,
		    image: "https://carrycatalog.s3.amazonaws.com/catalogs/5f4cd68e6ff3a6677ce65c9e.jpg",
		    title: "First Item",
		},
		{
		    id: 2,
		    image: "https://carrycatalog.s3.amazonaws.com/catalogs/5f4cd68e6ff3a6677ce65c9e.jpg",
		    title: "Second Item",
		},
		{
		    id: 3,
		    image: "https://carrycatalog.s3.amazonaws.com/catalogs/5f4cd68e6ff3a6677ce65c9e.jpg",
		    title: "Third Item",
		},
		{
		    id: 4,
		    image: "https://carrycatalog.s3.amazonaws.com/catalogs/5f4cd68e6ff3a6677ce65c9e.jpg",
		    title: "First Item",
		},
		{
		    id: 5,
		    image: "https://carrycatalog.s3.amazonaws.com/catalogs/5f4cd68e6ff3a6677ce65c9e.jpg",
		    title: "Second Item",
		},
		{
		    id: 6,
		    image: "https://carrycatalog.s3.amazonaws.com/catalogs/5f4cd68e6ff3a6677ce65c9e.jpg",
		    title: "Third Item",
		},
	    ]
	};
    }
    _renderItem = ({ item }) => {
	return (
	    <TouchableOpacity onPress={() => this.props.navigation.navigate('Catalog', { name: item.title }) }>
		<View style={{width: 150, height: 200, margin: 10, borderColor: 'gray', borderWidth: 1}}>
		    <Image
			style={styles.tinyLogo}
			source={{uri: item.image}}
		    />
		    <Text>{ item.title }</Text>
		    <Text>Valid until</Text>
		</View>
	    </TouchableOpacity>
	);
    }
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
		    centerComponent={{ text: 'Store Details', style: { color: '#fff' } }}
		    containerStyle={{
			backgroundColor: '#60b633',
			justifyContent: 'space-around',
		    }}
		/>
		<ScrollView>
		    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
			<Text>{JSON.stringify(this.props.route.params)}</Text>
			<Text>{JSON.stringify(this.props.route.params.storeId)}</Text>
			<SliderBox
			autoplay={false}
			images={this.state.images}
			onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
			currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
			/>			
		    </View>
		    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
			<FlatList
			columnWrapperStyle={{ flexWrap: 'wrap', flex: 1, justifyContent: 'space-around', margin: 10 }}
			data={this.state.data}
			renderItem={this._renderItem}
			keyExtrator={(item)  => item.id}
			numColumns={2}
			/>
		    </View>
		</ScrollView>
	    </View>
	);
    }
}
