import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { allCocktails } from '../data/cocktailData';


const truncateText = (text, limit) => {
  if (text.length > limit) {
    return text.substring(0, limit) + '...';
  }
  return text;
};

const SpiritSection = ({ title, spirit, navigation }) => {
  const cocktails = allCocktails.filter(cocktail => cocktail.spirit === spirit);

  if (cocktails.length === 0) {
    return (
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
        <Text style={styles.noCocktailsText}>No cocktails available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity 
          style={styles.seeAllButton} 
          onPress={() => navigation.navigate('CocktailsList', { spirit })}
        >
          <Text style={styles.seeAllText}>SEE ALL &gt;</Text>
        </TouchableOpacity>
      </View>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {cocktails.map((cocktail) => (
          <TouchableOpacity 
            key={cocktail.id} 
            style={styles.cocktailCard}
            onPress={() => navigation.navigate('CocktailDetail', { cocktail })}
          >
            <Image 
              source={cocktail.image}
              style={styles.cardImage}
            />
            <Text style={styles.cocktailName}>{cocktail.name}</Text>
            <Text style={styles.cocktailDescription}>
              {truncateText(cocktail.description, 100)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Zest Header */}
      <View style={styles.headerContainer}>
        <Image 
          source={require('../assets/images/zest-header.png')} 
          style={styles.headerImage}
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.headerText}>Zest</Text>
        </View>
      </View>

      {/* Spirit Sections */}
      <SpiritSection title="Aperitif Cocktails" spirit="aperitif" navigation={navigation} />
      <SpiritSection title="Gin Cocktails" spirit="gin" navigation={navigation} />
      <SpiritSection title="Rum Cocktails" spirit="rum" navigation={navigation} />
      <SpiritSection title="Vodka Cocktails" spirit="vodka" navigation={navigation} />
      <SpiritSection title="Tequila Cocktails" spirit="tequila" navigation={navigation} />
      <SpiritSection title="Whiskey Cocktails" spirit="whiskey" navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: 300,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  headerText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#666',
    fontSize: 16,
  },
  noCocktailsText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginVertical: 16,
  },
  scrollContainer: {
    paddingRight: 16,
  },
  cocktailCard: {
    width: 180,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 8, // Added padding for text
  },
  cardImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cocktailName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cocktailDescription: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
    textAlign: 'left',
  },
});

export default HomeScreen;