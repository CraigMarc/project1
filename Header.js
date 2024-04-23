import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


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
                 <Text>You Win</Text>
             )
         }

         if (loose == "true") {
             return (
                 <Text>You Lose</Text>
             )
         }

     };
     let upperCase = ''
     let search = searchResult
     if (search != undefined)  {
     upperCase = search.charAt(0).toUpperCase() + search.slice(1);
}


     return (

         <View>
             <View>
                 <Text>{upperCase} Memory Game</Text>
                 <Text>Get points for clicking on an image but don't click on the same image more then once.</Text>

             </View>


             <View>
                 <View>
                     <Text>Number of Clicks: {clickedOn.length}</Text>
                     <Text>Best Game: {bestGame}</Text>
                 </View>
                 <View>
                    {renderMessage()}
                 </View>
             </View>
         </View>



     )

};

export default Header;