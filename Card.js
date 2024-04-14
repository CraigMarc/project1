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
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },

  image: {
    width: 200,
    height: 220
  },
});


const Card = (props) => {

    const {
        handleClick,
        clickedOn,
        loose,
        data,

    } = props;




    let picArray = []
   // console.log(data.hits[0].webformatURL)

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
                  <View>
                      {randomArray.map((index) => {

                          return (
                              <View>
                                <TouchableOpacity key={index} disabled={disable} id={index} onPress={handleClick}>

                                  <Image
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