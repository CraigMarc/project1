import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

var styles = StyleSheet.create({
  headerContainer: {
   paddingBottom: 10,
  },

  title: {
textAlign: 'center',
fontWeight: 'bold',
fontSize: 25,
    },
    description: {
    textAlign: 'center',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
           },
 clicks: {
   marginLeft: 25,
    fontSize: 15,
        },
   bestGame: {
      marginLeft: 25,
      fontSize: 15,
          },
    message: {
         textAlign: 'center',
         fontSize: 25,
         fontWeight: 'bold',
             },
});




const Header = (props) => {
  const {
         clickedOn,
         loose,
         bestGame,
         searchResult,

     } = props;

     const renderMessage = () => {
         if (clickedOn.length == 12) {
             return (
                 <Text style={styles.message}>You Win</Text>
             )
         }

         if (loose == "true") {
             return (
                 <Text style={styles.message}>You Lose</Text>
             )
         }

     };
     let upperCase = ''
     let search = searchResult
     if (search != undefined)  {
     upperCase = search.charAt(0).toUpperCase() + search.slice(1);
}


     return (

         <View style={styles.headerContainer}>
             <View style={styles.gameInfoContainerContainer}>
                 <Text style={styles.title}>{upperCase} Memory Game</Text>
                 <Text style={styles.description}>Get points for clicking on an image but don't click on the same image more then once.</Text>

             </View>


             <View>
                 <View>
                     <Text style={styles.clicks}>Number of Clicks: {clickedOn.length}</Text>
                     <Text style={styles.bestGame}>Best Game: {bestGame}</Text>
                 </View>
                 <View>
                    {renderMessage()}
                 </View>
             </View>
         </View>



     )

};

export default Header;