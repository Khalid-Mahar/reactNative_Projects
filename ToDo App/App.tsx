import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState<
    Array<{id: number; text: string; completed: boolean}>
  >([]);
  const [text, setText] = useState('');
  const [currentDate, setCurrentDate] = useState(setDate());

  function setDate() {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  const addTask = () => {
    if (text.trim() !== '') {
      setTasks([...tasks, {id: tasks.length + 1, text, completed: false}]);
      setText('');
      setCurrentDate(setDate());
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainText}>To-Do</Text>
        <Text style={styles.date}>{currentDate}</Text>
      </View>
      <FlatList
        style={styles.taskList}
        data={tasks}
        renderItem={({item}) => (
          <View style={styles.task}>
            <View style={styles.taskContent}>
              <Text
                style={item.completed ? styles.completedTask : styles.taskText}>
                {item.text}
              </Text>
            </View>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={text => setText(text)}
          placeholder="Add a task..."
          placeholderTextColor="white"
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19196f',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  mainText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginRight: 10,
    color: 'white',
  },
  addButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  addButtonText: {
    color: '#19196f',
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskList: {
    marginTop: 10,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  taskContent: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
    color: '#19196f',
  },
  completedTask: {
    fontSize: 18,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    color: '#19196f',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
