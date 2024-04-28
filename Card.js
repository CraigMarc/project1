import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,

} from 'react-native';

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

var styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    paddingTop: 4,
    paddingLeft: 4,
    height: 222,
    width: 330,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 20,
    alignContent: 'center',
    paddingBottom: 120,
  },

  image: {
    height: 212,
    width: 320,
    padding: 5,
  },
});


const Card = (props) => {

  const {
    handleTouch,
    clickedOn,
    loose,
    data,
    offline,

  } = props;




  let picArray = []

  if (offline == true) {
    picArray = [mountain1, mountain2, mountain3, mountain4, mountain5, mountain6, mountain7, mountain8, mountain9, mountain10, mountain11, mountain12, mountain13]
  }

  for (let i = 0; i <= 12; i++) {
    picArray.push(data.hits[i].webformatURL)
  }


  //disable click
  let disable = false
  if (clickedOn.length == 12 || loose == "true") {
    disable = true
  }

  //create random array

  function shuffle() {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    let currentIndex = array.length, randomIndex;


    while (currentIndex > 0) {


      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array
  }

  let randomArray = shuffle()

  if (offline == false) {
    return (
      <>
        <View style={styles.cardContainer}>
          {randomArray.map((index) => {

            return (
              <View style={styles.card} key={index}>
                <TouchableOpacity key={index} disabled={disable} onPress={() => handleTouch(index)} >
                  <Image
                    id={index}
                    key={index}
                    style={styles.image}
                    source={{
                      uri: picArray[index]
                    }}
                  />
                </TouchableOpacity>
              </View>
            )
          })}


        </View>

      </>
    )
  }

  if (offline == true) {
    return (
      <>
        <View style={styles.cardContainer}>
          {randomArray.map((index) => {

            return (
              <View style={styles.card} key={index}>
                <TouchableOpacity key={index} disabled={disable} onPress={() => handleTouch(index)} >
                  <Image
                    id={index}
                    key={index}
                    style={styles.image}
                    source={
                      picArray[index]
                    }
                  />
                </TouchableOpacity>
              </View>
            )
          })}


        </View>

      </>
    )
  }



}

export default Card;