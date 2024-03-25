import React from 'react';
import {
  ScrollView,
  Pressable,
  View,
  Text,
  StyleSheet,
} from 'react-native';


const ToDoList = ({ tasks }) => {
    return (
        <ScrollView style={styles.container}>
          {tasks.map((task, index) => (
            <Text key={index} style={styles.task}>
              {task}
            </Text>
          ))}
        </ScrollView>
      );
    };


const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#b7d7e8',
    },
    taskText: {
        fontSize: 16,
    },
});

export default ToDoList;

