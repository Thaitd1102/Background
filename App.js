import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('green'); 
  const [textColor, setTextColor] = useState('white'); 

  
  const getTextColor = (bg) => {
    switch (bg) {
      case 'yellow':
        return 'black'; 
      case 'blue':
      case 'green':
      case 'red':
      case 'black':
        return 'white'; 
      case 'brown':
        return 'white'; 
      default:
        return 'white';
    }
  };

  const handlePress = (color) => {
    setBgColor(color);
    setTextColor(getTextColor(color));
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.titleText, { color: textColor }]}>Thay đổi màu theo cách của bạn</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={() => handlePress('green')}
      >
        <Text style={[styles.buttonText, { color: getTextColor('green') }]}>GREEN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => handlePress('blue')}
      >
        <Text style={[styles.buttonText, { color: getTextColor('blue') }]}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'brown' }]}
        onPress={() => handlePress('brown')}
      >
        <Text style={[styles.buttonText, { color: getTextColor('brown') }]}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'yellow' }]}
        onPress={() => handlePress('yellow')}
      >
        <Text style={[styles.buttonText, { color: getTextColor('yellow') }]}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => handlePress('red')}
      >
        <Text style={[styles.buttonText, { color: getTextColor('red') }]}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'black' }]}
        onPress={() => handlePress('black')}
      >
        <Text style={[styles.buttonText, { color: getTextColor('black') }]}>BLACK</Text>
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
    fontSize: 18,
  },
});
