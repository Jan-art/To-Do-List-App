import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      
      {/*TITLE*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>

        <View style={styles.items}>
          {/*Item Container For Tasks*/}
          {
            taskItems.map((item, index) => {
              return ( 
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text = {item} />
                </TouchableOpacity> 
              )
              
            })
          }
          
          
        </View>

        
      </View>
      {/*Create New Task*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.writeTaskWrapper}
        >
         <TextInput style = {styles.input} placeholder = {'Write new Task'} value={task} onChangeText = {text => setTask(text)}/>

         <TouchableOpacity onPress={() => handleAddTask()}>
          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
         </TouchableOpacity>
        </KeyboardAvoidingView>

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
  writeTaskWrapper: {
   position: 'absolute',
   bottom: 55,
   marginLeft: 12,
   width: '100%',
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
  },

  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#242424',
    borderWidth: 2,
    width: 250,
    
  },

  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#242424',
    borderWidth: 2,
  },

  addText: {},

});
