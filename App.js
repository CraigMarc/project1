
//import React from 'react';
import { useState, useEffect } from 'react'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Component from './Component.js'
import Card from './Card.js'

const App = () => {

 //states
  const [clickedOn, setClickedOn] = useState([])
  const [loose, setLoose] = useState()
  const [bestGame, setBestGame] = useState(0)
  const [data, setData] = useState({ hits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] })
  const [error, setError] = useState()
  const [findPicsState, setFindPicsState] = useState(true)
  const [searchResult, setSearchResult] = useState("mountains")
  const [loading, setLoading] = useState()

// fetch api data
const fetchInfo = async (pics) => {
    setLoading(true)
    if (pics == undefined) {
      pics = "mountains"
    }
    try {
      //return fetch(picUrl)
      const res = await fetch("https://pixabay.com/api/?key=40272701-d1f0bb34d10cfd0d1c847f1fd&q=" + pics + "&image_type=photo")

      const picData = await res.json();
      let picArr = picData.hits
      if (picArr.length > 12) {
        setData(picData)
        setError()
        setLoading(false)
      }

      else {
        setError("true")

      }

    }

    catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
      //add error message to dom
      setError("true")
      //setFindPicsState(true)
    }

  }

//console.log(data)

  useEffect(() => {
    fetchInfo();
  }, [])

  // event handler

    const handleClick = (e) => {
      let card = e.currentTarget.id
      console.log(card)
      console.log('hello')
      /*
      if (clickedOn.indexOf(card) != -1 && clickedOn.length > 0) {
        setLoose("true")
      }


      if (clickedOn.indexOf(card) == -1 || clickedOn.length == 0) {
        setClickedOn((clickedOn) => ([...clickedOn, card]));
      }
*/
    }


  return (
    <View>
    <Component />
    <ScrollView>
   <Card
             handleClick={handleClick}
             clickedOn={clickedOn}
             loose={loose}
             data={data}
           />
   </ScrollView>
    </View>


  );
};





export default App;
