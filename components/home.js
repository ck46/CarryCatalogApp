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
	height: '80%',
    },
});

export default class HomeScreen extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    dummyData: [
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
	    ],
	    isLoading: true,
	    data: [],
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

    _fetchCatalogs = () => {
	fetch('https://reactnative.dev/movies.json')
	    .then((response) => response.json())
	    .then((json) => this.setState({data: json.movies}))
	    .catch((error) => console.error(error))
	    .finally(() => this.setState({isLoading: false}));
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
		    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>			
			<FlatList
			    columnWrapperStyle={{ flexWrap: 'wrap', flex: 1, justifyContent: 'space-around', margin: 10 }}
			    data={this.state.dummyData}
			    renderItem={this._renderItem}
			    keyExtrator={(item)  => item.id}
			    numColumns={2}
			/>
		    </View>
		    <View style={{ flex: 1, padding: 24 }}>
			{this.state.isLoading ? <ActivityIndicator/> : (
			    <FlatList
			    data={this.state.data}
			    keyExtractor={({ id }, index) => id}
			    renderItem={({ item }) => (
				<Text>{item.title}, {item.releaseYear}</Text>
			    )}
			    />
			)}
		    </View>
		</ScrollView>
	    </View>
	);
    }
}

