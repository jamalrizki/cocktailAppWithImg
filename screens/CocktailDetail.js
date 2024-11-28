import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { ingredients } from '../data/cocktailData';

const CocktailDetail = ({ route }) => {
 const { cocktail } = route.params;
 const cocktailIngredients = ingredients.find(i => i.cocktailId === cocktail.id);

 return (
   <ScrollView style={styles.container}>
     <Image source={cocktail.image} style={styles.image} />
     
     <View style={styles.content}>
       <Text style={styles.title}>{cocktail.name}</Text>
       <Text style={styles.description}>{cocktail.description}</Text>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Ingredients</Text>
         <Text style={styles.ingredients}>{cocktailIngredients?.description}</Text>
       </View>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Instructions</Text>
         <Text style={styles.instructions}>{cocktailIngredients?.name}</Text>
       </View>
     </View>
   </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
 },
 image: {
   width: '100%',
   height: 300,
   resizeMode: 'cover',
 },
 content: {
   padding: 16,
 },
 title: {
   fontSize: 28,
   fontWeight: 'bold',
   marginBottom: 8,
 },
 description: {
   fontSize: 16,
   color: '#666',
   marginBottom: 24,
   lineHeight: 24,
 },
 section: {
   marginBottom: 24,
 },
 sectionTitle: {
   fontSize: 20,
   fontWeight: '600',
   marginBottom: 12,
 },
 ingredients: {
   fontSize: 16,
   lineHeight: 24,
 },
 instructions: {
   fontSize: 16,
   lineHeight: 24,
 },
});

export default CocktailDetail;