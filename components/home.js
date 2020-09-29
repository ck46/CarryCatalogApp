import * as React from 'react';
import { Component } from 'react';
import { ActivityIndicator, Button, FlatList,  View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
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
	height: '70%',
    },
});

export default class HomeScreen extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    catalogsLoading: true,
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
    _fetchCatalogs = () => {
	fetch('https://cors-anywhere.herokuapp.com/'+'https://carrycatalog.com/api/get/catalogs')
	    .then((response) => response.json())
	    .then((json) => {
		this.setState({catalogs: json})
		console.log(json)
	    })
	    .catch((error) => console.error(error))
	    .finally(() => this.setState({catalogsLoading: false}));
    }

    componentDidMount() {
	this._fetchCatalogs();
    }
    
    render() {
	return (
	    <View style={styles.container}>
		<Header
		    centerComponent={{ text: 'CarryCatalog', style: { color: '#fff' } }}
		    containerStyle={{
			backgroundColor: '#60b633',
			justifyContent: 'space-around',
		    }}
		/>
		<ScrollView>
		    <View style={{ flex: 1, padding: 10 }}>
			{this.state.catalogsLoading ? <ActivityIndicator/> : (
			    <FlatList
			    columnWrapperStyle={{ flexWrap: 'wrap', flex: 1, justifyContent: 'space-around', margin: 10 }}
			    data={this.state.catalogs}
			    renderItem={this._renderItem}
			    keyExtractor={(item) => item.ID}
			    numColumns={2}
			    />
			)}
		    </View>
		</ScrollView>
	    </View>
	);
    }
}

