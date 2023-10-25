import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet, Alert} from 'react-native';

const App = () => {
  const [kg, setKg] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [display, setDisplay] = useState(false);
  const [bmiResult, setBmiResult] = useState('');

  const resetForm = () => {
    setDisplay(false);
    setKg('');
    setFeet('');
    setInches('');
    setBmiResult('');
  };

  const checkStatus = () => {
    const weight = parseFloat(kg);
    const feetValue = parseFloat(feet);
    const inchesValue = parseFloat(inches);

    if (isNaN(weight) || isNaN(feetValue) || isNaN(inchesValue)) {
      Alert.alert('Error', 'Please enter valid numeric values.');
      return;
    }

    const heightInMeters = feetValue * 0.3048 + inchesValue * 0.0254;
    const bmi = weight / (heightInMeters * heightInMeters);
    var result = 'Your BMI is ' + bmi.toFixed(2) + '. ';
    if (bmi < 18.5) {
      result += '🥗 You are underweight. Consider consulting a doctor.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result += '🎉 You have a normal weight. Congratulations!';
    } else if (bmi >= 25 && bmi < 29.9) {
      result +=
        '🏋️ You are overweight. Consider making some lifestyle changes.';
    } else {
      result +=
        '🥦 You are obese. It is recommended to seek professional advice.';
    }
    setBmiResult(result);
    setDisplay(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Check Your BMI Status</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Weight"
        onChangeText={text => setKg(text)}
        value={kg}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Feet"
        onChangeText={text => setFeet(text)}
        value={feet}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Inches"
        onChangeText={text => setInches(text)}
        value={inches}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Check Status" color="#4CAF50" onPress={checkStatus} />
        <Button title="Clear" color="#FF5722" onPress={resetForm} />
      </View>
      {display && bmiResult && (
        <View>
          <Text style={styles.printForm}>{bmiResult}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  textInput: {
    fontSize: 18,
    color: '#2196F3',
    borderWidth: 2,
    borderColor: '#2196F3',
    margin: 10,
    width: 300,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  printForm: {
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
    color: '#4CAF50',
  },
});

export default App;
