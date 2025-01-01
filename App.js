import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';

// Paleta de colores pasteles
const pastelColors = [
  '#F8C8D5', // Rosa pastel
  '#B5E8D7', // Verde pastel
  '#D9D0FF', // Lavanda pastel
  '#FFDFD3', // Melocotón pastel
  '#FFB6B9', // Coral pastel
  '#B2E7D6', // Aqua pastel
  '#FFF9C4', // Amarillo pastel
  '#D1C4E9', // Lila pastel
  '#FFE0F7', // Rosa claro
  '#B2B6FF', // Azul claro pastel
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Paleta de Colores Pasteles</Text>
      <ScrollView contentContainerStyle={styles.colorList}>
        {pastelColors.map((color, index) => (
          <View
            key={index}
            style={[styles.colorBox, { backgroundColor: color }]}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  colorList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  colorBox: {
    width: '48%',
    height: 150,
    marginBottom: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
});
