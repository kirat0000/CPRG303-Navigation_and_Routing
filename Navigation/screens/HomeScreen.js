import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react'; 
import MainLayout from '../layouts/MainLayout';
import ToDoList from "../Component/ToDoList";
import ToDoForm from "../Component/ToDoForm";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        
        <View style={styles.buttonContainer}>
          <Button 
            title='Go to About Page'
            onPress={() => navigation.navigate('About') }
            color="white"
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, 
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold', 
    color: 'black', 
    padding: 8,  
    textAlign: 'center',
  },
  buttonContainer: {
    marginHorizontal: 16, 
    marginTop: 24, 
    backgroundColor: "orange", 
    borderRadius: 6,
  },
});

export default HomeScreen;