import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('green'); // Default background color

  // Handler to change the background color
  const handlePress = (color) => {
    setBgColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.titleText}>Change Background Color</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={() => handlePress('green')}
      >
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => handlePress('blue')}
      >
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'brown' }]}
        onPress={() => handlePress('brown')}
      >
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'yellow' }]}
        onPress={() => handlePress('yellow')}
      >
        <Text style={[styles.buttonText, { color: 'black' }]}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => handlePress('red')}
      >
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'black' }]}
        onPress={() => handlePress('black')}
      >
        <Text style={[styles.buttonText, { color: 'white' }]}>BLACK</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    width: 200,
    padding: 15,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
