/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>0</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>CE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>1/x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>x^2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>√</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.equalButton]}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  display: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  equalButton: {
    backgroundColor: 'rgba(145, 161, 149, 0.473)',
  },
});