
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


import Card from './Card.js'
import Header from './Header'
import NewGame from './NewGame'
import FindPics from './FindPics'
import Loading from './Loading'

import mountain1 from './images/mountain1.jpg';
import mountain2 from './images/mountain2.jpg';
import mountain3 from './images/mountain3.jpg';
import mountain4 from './images/mountain4.jpg';
import mountain5 from './images/mountain5.jpg';
import mountain6 from './images/mountain6.jpg';
import mountain7 from './images/mountain7.jpg';
import mountain8 from './images/mountain8.jpg';
import mountain9 from './images/mountain9.jpg';
import mountain10 from './images/mountain10.jpg';
import mountain11 from './images/mountain11.jpg';
import mountain12 from './images/mountain12.jpg';
import mountain13 from './images/mountain13.jpg';

const App = () => {

  //states
  const [clickedOn, setClickedOn] = useState([])
  const [loose, setLoose] = useState()
  const [bestGame, setBestGame] = useState(0)
  const [data, setData] = useState({ hits: [mountain1, mountain2, mountain3, mountain4, mountain5, mountain6, mountain7, mountain8, mountain9, mountain10, mountain11, mountain12, mountain13] })
  const [error, setError] = useState()
  const [findPicsState, setFindPicsState] = useState(true)
  const [searchResult, setSearchResult] = useState("mountains")
  const [loading, setLoading] = useState()
  const [offline, setOffline] = useState(false)

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
    if (offline == false) {
      fetchInfo();
    }
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

  const handlePicSubmit = (search) => {

    setFindPicsState(false)
    setOffline(false)
    setSearchResult(search)
    fetchInfo(search)

  }

  const playOffline = () => {
    setData({ hits: [mountain1, mountain2, mountain3, mountain4, mountain5, mountain6, mountain7, mountain8, mountain9, mountain10, mountain11, mountain12, mountain13] })
    setFindPicsState(false)
    setOffline(true)

  }

  if (loading == true) {

    <Loading />
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
            offline={offline}
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
        playOffline={playOffline}
      />

    </>
  )

}




export default App;
