import * as React from 'react';
import { Component } from 'react';
import { ActivityIndicator, Button, FlatList, View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
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
    logo: {
	height: 50,
	width: 200,
    },
});

export default class Store extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    isLoading: true,
	    imageUrl: "",
	    catalogs: [],
	};
    }
    _renderItem = ({ item }) => {
	return (
	    <TouchableOpacity onPress={() => this.props.navigation.navigate('Catalog', { id: item.ID, name: item.Title }) }>
		<View style={{width: 150, minHeight: 200, margin: 10, borderColor: 'gray', borderWidth: 1}}>
		    <Image
		    style={styles.tinyLogo}
		    source={{uri: item.PromoImage}}
		    />
		    <Text style={{fontSize:11}}>{ item.Title }</Text>
		    <Text style={{fontSize:11}}>Valid until: {item.Date}</Text>
		</View>
	    </TouchableOpacity>
	);
    }

    _fetchStore = (id) => {
	fetch('https://cors-anywhere.herokuapp.com/'+'https://carrycatalog.com/api/get/store?id='+id)
	    .then((response) => response.json())
	    .then((json) => {
		this.setState({imageUrl: json.Image});
		this.setState({catalogs: json.Catalogs});
	    })
	    .catch((error) => console.error(error))
	    .finally(() => this.setState({isLoading: false}));
    }

    componentDidMount() {
	this._fetchStore(JSON.stringify(this.props.route.params.storeId));
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
		    <View>
			<Text style={{fontSize: 18, textAlign: 'center'}}>{this.props.route.params.name}</Text>
			<Image
			style={{marginTop: 10, height: 300, width: '100%'}}
			source={{uri: this.state.imageUrl}}
			/>			
		    </View>
		    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Store Catalogs:</Text>
			{this.state.isLoading ? <ActivityIndicator/> : (
			    <FlatList
			    columnWrapperStyle={{ flexWrap: 'wrap', flex: 1, justifyContent: 'space-around', margin: 10 }}
			    data={this.state.catalogs}
			    renderItem={this._renderItem}
			    keyExtrator={(item)  => item.ID}
			    numColumns={2}
			    />
			)}
		    </View>
		</ScrollView>
	    </View>
	);
    }
}
