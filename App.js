
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
/*
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/
import Component from './Component.js'
import Card from './Card.js'
import Header from './Header'
import NewGame from './NewGame'
import FindPics from './FindPics'

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



  useEffect(() => {
    fetchInfo();
  }, [])

  // event handlers

    const handleTouch = (index) => {
      let card = index

      if (clickedOn.indexOf(card) != -1 && clickedOn.length > 0) {
        setLoose("true")
      }


      if (clickedOn.indexOf(card) == -1 || clickedOn.length == 0) {
        setClickedOn((clickedOn) => ([...clickedOn, card]));
      }
    }
     const handleStart = () => {

        if (clickedOn.length > bestGame) {
          setBestGame(clickedOn.length)
        }
        setClickedOn([])
        setLoose()
        setFindPicsState(true)

      }
      //handle pic search

      const handlePicSubmit = (event) => {
        event.preventDefault();
        const dataSubmit = Object.fromEntries(new FormData(event.target).entries());
        setFindPicsState(false)

        setSearchResult(dataSubmit.pictures)
        fetchInfo(dataSubmit.pictures)

        clearAllInputs()
      }

      function clearAllInputs() {
        let allInputs = document.querySelectorAll('input');

        allInputs.forEach(singleInput => singleInput.value = '');

      }

      if (loading == true) {

        <Loading/>
      }


 if (findPicsState == false && error != "true") {
  return (
    <View>
    <Header
              clickedOn={clickedOn}
              loose={loose}
              bestGame={bestGame}
              searchResult={searchResult}
            />
<NewGame
          clickedOn={clickedOn}
          loose={loose}
          handleStart={handleStart}
        />
    <ScrollView>
   <Card
             handleTouch={handleTouch}
             clickedOn={clickedOn}
             loose={loose}
             data={data}
           />
   </ScrollView>
    </View>


  );
};


return (
    <>
      <FindPics
        handlePicSubmit={handlePicSubmit}
        data={data}
        error={error}
      />

    </>
  )

}




export default App;
