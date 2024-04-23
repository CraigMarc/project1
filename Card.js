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

    } = props;




    let picArray = []


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


      return (
              <>
                  <View style={styles.cardContainer}>
                      {randomArray.map((index) => {

                          return (
                              <View style={styles.card}>
                                <TouchableOpacity key={index} disabled={disable} onPress={() => handleTouch(index)} >
                                  <Image
                                  id={index}
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

export default Card;