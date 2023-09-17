import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetForm = () => {
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fill out the form</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          color="#4CAF50"
          onPress={() => setDisplay(true)}
        />
        <Button title="Clear" color="#FF5722" onPress={resetForm} />
      </View>
      {display ? (
        <View>
          <Text style={styles.printForm}>
            Hello {name ? `Mr./Mrs. ${name}` : 'User'}! 🎉 Congratulations on
            successfully completing the form. We have recorded your email as{' '}
            {email} and password as {password}.
          </Text>
        </View>
      ) : null}
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
