import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Header } from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import db from '../config'

export default class ReadStoryScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      story : '',
      title : '',
      author : '',
      allStories : '',
      search : '',
    }
  }

  componentDidMount = async()=>{
    const quiery = await db.collection("story").get()
    quiery.docs.map((doc)=>{
      this.setState({
        allStories : [...this.state.allStories, doc.data()]
      })

    })
  }

  searchStories = async(txt)=>{
      const stories = await db.collection('story').where('title','==', txt).get();
      stories.docs.map((doc)=>{
        var story = doc.data();
        this.setState({
          title : story.title,
          story : story.story,
          author : story.author
        })
      })
    }

  render(){
   return(
     <View>
       <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'Bedtime Stories',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
         <View>
     <TextInput style = {styles.bar} placeholder = 'Enter Story Title'
       onChangeText = {(text)=>{
         this.setState({
          search : text
        })
        }}/> 
        <TouchableOpacity style = {styles.searchButton} onPress = {()=>{ 
              this.searchStories(this.state.search)
            }}>
              <Text>Search</Text>
        </TouchableOpacity>
        </View>
        <View>
          <Text>
            Title : {this.state.title}
          </Text>
           <Text>
            Story: {this.state.story}
          </Text>
          <Text>
            Author : {this.state.author}
          </Text>
        </View>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    marginTop : 20,
  },

  bar : {
    borderWidth : 2,
    height : 30,
    width : 300,
    paddingLeft : 10,
  },

  searchButton : {
    borderWidth : 1,
    height : 30,
    width : 50,
    alignItems :  'center',
    justifyContent : 'center',
   backgroundColor : 'green',
  },

  searchBar :{
    flexDirection : 'row',
    height : 40,
    width : 'auto',
    borderWidth : 0.5,
    alignItems : 'center',
    backgroundColor : 'grey',
   },

  
})