import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  
  return (
    <MainLayout>
    <View style={styles.container}>       
      <Text style={styles.title}>About Screen</Text>
      <Text style={styles.paragraph}>
          Hello, I'm Jaskirat Singh! Welcome to my github profile.</Text>  
          <View style={styles.buttonContainer}>
          <Button title='Go to Home Page'  onPress={() => navigation.navigate('Home') } color="white"/>
          </View>
      
    </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold', 
    color: 'black', 
    marginBottom: 16, 
    textAlign: 'center', 
  },

  paragraph: {
    fontSize: 16,
    marginBottom: 12,
  },
 
  buttonContainer: {
    marginHorizontal: 16, 
    marginTop: 24, 
    backgroundColor: "orange", 
    borderRadius: 6,
  },
});

export default HomeScreen;






/** export default function AboutScreen({route}) { const{name } = route.p} */