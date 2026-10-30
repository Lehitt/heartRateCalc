import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TurboModuleRegistry, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState("")
  const ageAsNumber: number = !isNaN(Number(age)) == true ? Number(age) : 0
  const lower = ageAsNumber === 0 ? 0 : (220-ageAsNumber) * 0.65
  const upper = ageAsNumber === 0 ? 0 : (220-ageAsNumber) * 0.85
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart rate limits calculator</Text>
      <StatusBar style="auto" />

      <Text style={styles.second}>Enter your age:</Text>
      <TextInput style={styles.age}
      placeholder='0'
      keyboardType='number-pad'
      value={age}
      onChangeText={setAge}
      
      />
      <Text style={styles.lower}>Lower limit: {lower.toFixed(2)} bpm</Text>
      <Text style={styles.upper}>Upper limit: {upper.toFixed(2)} bpm</Text>
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
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  second: {
    fontSize: 20
  },
  age: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 10,
    width: 100,
  },
  lower: {
    fontWeight: 'bold',
    fontSize: 15
  },
  upper: { 
    fontWeight: 'bold',
    fontSize: 15
  }
});
