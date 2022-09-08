import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/*TITLE*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>

        <View style={styles.items}>
          {/*Item Container For Tasks*/}
          <Task text= {'Task 1'}/>
          <Task text= {'Task 2'}/>
          <Task />
          <Task />
        </View>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  
    
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  items: {
    marginTop: 30,
    
  },
});
