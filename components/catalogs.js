import * as React from 'react';
import { Component } from 'react';
import { Button, FlatList, Alert, View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

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

export default class CatalogsScreen extends Component {
    constructor(props) {
	super(props);
	this.state = {
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
    render(){
	return (
	    <View style={styles.container}>
		<Header
		centerComponent={{ text: 'CATALOGS', style: { color: '#fff' } }}
		containerStyle={{
		    backgroundColor: '#60b633',
		    justifyContent: 'space-around',
		}}
		/>
		<ScrollView>
		    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
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

