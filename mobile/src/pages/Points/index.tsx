import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg';

import styles from './styles';
import api from '../../services/api';

interface Items {
  id: number;
  title: string;
  image: string;
}

const Points: React.FC = () => {
  const [items, setItems] = useState<Items[]>([]);
  const [selectedItems, setSelectedItem] = useState<number[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    });
  });

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDatail() {
    navigation.navigate('Datail')
  }

  function handleSelecteItem(id: number) {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if(alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItem(filteredItems);
    } else {
      setSelectedItem([ ...selectedItems, id ]);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#37CB79" />
        </TouchableOpacity>

        <Text style={styles.title}>Bem vindo(a).</Text>
        <Text style={styles.description}>
          Encontre no mapa um ponto de coleta.
        </Text>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -13.0381525,
              longitude: -46.7714961,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014
            }}
          >
            <Marker
              style={styles.mapMarker}
              onPress={handleNavigateToDatail}
              coordinate={{
                latitude: -13.0381525,
                longitude: -46.7714961,
              }}
            >
              <View style={styles.mapMarkerContainer}>
                <Image style={styles.mapMarkerImage} source={{ uri: '' }} />
                <Text style={styles.mapMarkerTitle}>Mercado</Text>
              </View>
            </Marker>
          </MapView>
        </View>
      </View>

      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {items.map(item => (
            <TouchableOpacity
              key={String(item.id)}
              style={[
                styles.item,
                selectedItems.includes(item.id) ? styles.selectedItem : {}
              ]}
              onPress={() => handleSelecteItem(item.id)}
              activeOpacity={0.6}
            >
              <SvgUri width={42} height={42} uri={item.image} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

export default Points;
