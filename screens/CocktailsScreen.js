import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { allCocktails } from '../data/cocktailData';

const CocktailsScreen = ({ navigation }) => {
 if (!allCocktails) return <View style={styles.container}><Text>Loading...</Text></View>;

 const renderItem = ({ item }) => (
   <TouchableOpacity 
     style={styles.card}
     onPress={() => navigation.navigate('CocktailDetail', { cocktail: item })}
   >
     <Image source={item.image} style={styles.image} />
     <View style={styles.content}>
       <Text style={styles.name}>{item.name}</Text>
       <Text style={styles.description} numberOfLines={2}>
         {item.description}
       </Text>
     </View>
   </TouchableOpacity>
 );

 return (
   <FlatList
     data={allCocktails}
     renderItem={renderItem}
     keyExtractor={item => item.id.toString()}
     contentContainerStyle={styles.list}
     ItemSeparatorComponent={() => <View style={styles.separator} />}
   />
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 },
 list: {
   padding: 16,
   backgroundColor: '#fff'
 },
 card: {
   flexDirection: 'row',
   backgroundColor: '#fff',
   borderRadius: 12,
   padding: 12
 },
 image: {
   width: 80,
   height: 80,
   borderRadius: 8,
 },
 content: {
   flex: 1,
   marginLeft: 12,
 },
 name: {
   fontSize: 18,
   fontWeight: '600',
   marginBottom: 4,
 },
 description: {
   fontSize: 14,
   color: '#666',
   lineHeight: 20,
 },
 separator: {
   height: 12
 }
});

export default CocktailsScreen;