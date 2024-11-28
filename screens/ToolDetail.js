import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { toolDetails } from '../data/cocktailData';

const ToolDetail = ({ route }) => {
  const { tool } = route.params;
  const toolDetail = toolDetails.find(t => t.id === tool.id);

  return (
    <ScrollView style={styles.container}>
      <Image source={tool.image} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{tool.name}</Text>
        <Text style={styles.description}>{toolDetail?.description || tool.description}</Text>
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
});

export default ToolDetail;