import * as React from 'react';
import { Component } from 'react';
import { ActivityIndicator, Button, View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
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
    logo: {
	height: 50,
	width: 200,
    },
});

export default class Catalog extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    isLoading: true,
	    images: [],
	};
    }

    _fetchCatalog = (id) => {
	fetch('https://carrycatalog.com/api/get/catalog?id='+id)
	    .then((response) => response.json())
	    .then((json) => {
		this.setState({images: json.Result.Images});
	    })
	    .catch((error) => console.error(error))
	    .finally(() => this.setState({isLoading: false}));
    }

    componentDidMount() {
	this._fetchCatalog(JSON.stringify(this.props.route.params.id));
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
		centerComponent={<Image
				     style={styles.logo}
				     source={require('./images/carrycatalog.png')}
		/>}
		containerStyle={{
		    backgroundColor: '#60b633',
		    justifyContent: 'space-around',
		}}
		/>
		<Text style={{fontSize: 24, textAlign: 'center', fontWeight: 'bold'}}>{this.props.route.params.name}</Text>
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		    {this.state.isLoading ? <ActivityIndicator/> : (
			<SliderBox
			autoplay={false}
			images={this.state.images}
			onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
			currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
			sliderBoxHeight={470}
			/>
		    )}
		</View>
	    </View>
	);
    }
}
