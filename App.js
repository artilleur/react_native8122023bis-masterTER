import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

const App = () => {
  const [liste, setListe] = useState([]);

  const loadData = () => {
    axios
      .get('http://10.0.2.2:8000/api/produits', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((reponse) => {
        console.log('Les données sont servies...');
        console.log(reponse.data);
        setListe(reponse.data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des données', error);
      });
  };

  useEffect(() => {
    console.log('Chargement du composant...');
    loadData();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(144,238,144)' }}>
        {/* Your other components */}
        <View style={{ borderBottomWidth: 10, marginVertical: 10 }} />
        {liste.map((produit, index) => (
          <View key={index} style={{ alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'red' }}>NOM:</Text>
              {'\n'} {produit.nom} {'\n'}
              <Text style={{ color: 'red' }}>PRIX:</Text>
              {'\n'} {produit.prix}€ {'\n'}
              <Text style={{ color: 'red' }}>DESCRIPTION:</Text>
              {'\n'} {produit.description} {'\n'}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;
