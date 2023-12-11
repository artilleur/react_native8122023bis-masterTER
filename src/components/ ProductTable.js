// /src/components/ProductTable.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { produitFixture } from '../fixtures/produitFixture';

const ProductTable = () => {
  return (
    <View style={styles.container}>
      {produitFixture.map((produit, index) => (
        <View key={index} style={styles.row}>
          <Image source={produit.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              <Text style={styles.highlight}>NOM:</Text>{'\n'}
              {`${produit.nom}\n`}
              <Text style={styles.highlight}>Prix:</Text>{`\n ${produit.prix}\n`}
              <Text style={styles.highlight}>Description:</Text>{`\n${produit.description}`}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  // ... Styles
});

export default ProductTable;
