import * as React from 'react';
import { Component } from 'react';
import { ActivityIndicator, Button, FlatList, View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
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

export default class StoresScreen extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    isLoading: true,
	    data: [],
	};
    }
    _renderItem = ({ item }) => {
	return (
	    <TouchableOpacity onPress={() => this.props.navigation.navigate('Store', {
		name: item.Name,
		storeId: item.ID,
	    }) }>
		<View style={{width: 150, height: 200, margin: 10, borderColor: 'gray', borderWidth: 1}}>
		    <Image
		    style={styles.tinyLogo}
		    source={{uri: item.Image}}
		    />
		    <Text style={{textAlign: 'center'}}>{ item.Name }</Text>
		</View>
	    </TouchableOpacity>
	);
    }

    _fetchStores = () => {
	fetch('https://cors-anywhere.herokuapp.com/'+'https://carrycatalog.com/api/get/stores')
	    .then((response) => response.json())
	    .then((json) => {
		this.setState({data: json})
		console.log(json)
	    })
	    .catch((error) => console.error(error))
	    .finally(() => this.setState({isLoading: false}));
    }

    componentDidMount() {
	this._fetchStores();
    }

    render() {
	return (
	    <View style={styles.container}>
		<Header
		    centerComponent={{ text: 'STORES', style: { color: '#fff' } }}
		    containerStyle={{
			backgroundColor: '#60b633',
			justifyContent: 'space-around',
		    }}
		/>
		<ScrollView>
		    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
			{this.state.isLoading ? <ActivityIndicator/> : (
			    <FlatList
			    columnWrapperStyle={{ flexWrap: 'wrap', flex: 1, justifyContent: 'space-around', margin: 10 }}
			    data={this.state.data}
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
