import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  ToastAndroid
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config'
import * as firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      story : '',
      title : '',
      author : ''
    }
  }

  submitStory=()=>{
   db.collection('story').add({
     'title' : this.state.title,
     'author' : this.state.author,
     'story' : this.state.story
   })

   submitAlert = "Story has been submitted"
   ToastAndroid.show(submitAlert, ToastAndroid.SHORT)

   this.setState({
    story : '',
    title : '',
    author : '',
   })
  
  }
  render(){
   return(
     <KeyboardAvoidingView style = {{flex:1}} behavior = 'padding' enabled>
     <View>
     <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'Bedtime Stories',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

         <TextInput
          placeholder = 'Title'
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ title: text });
          }}
          value={this.state.title}
        />

        <TextInput
          placeholder = 'Author'
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ author: text });
          }}
          value={this.state.author}
        />

        <TextInput
          placeholder = 'Story'
          style={styles.storyBox}
          onChangeText={(text) => {
            this.setState({ story: text });
          }}
          value={this.state.story}
        />

        <TouchableOpacity style = {styles.submitButton} onPress = {()=>{this.submitStory() }}>
         <Text style = {styles.buttonText}> Submit </Text>
        </TouchableOpacity>

        </View>
     </KeyboardAvoidingView>
   )
  }
}

const styles = StyleSheet.create({
  inputBox : {
     marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    
  },

  storyBox : {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    height: 100,
    textAlign: 'center',
    borderWidth: 4,
    
  },

    submitButton: {
    width: '40%',
    height: 50,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor : 'purple',
    justifyContent : 'center',
    marginTop : 30,
  },

   buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})