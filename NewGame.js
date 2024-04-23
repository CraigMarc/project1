import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';




function NewGame(props) {

    const {
        clickedOn,
        loose,
        handleStart,

    } = props;


   if (clickedOn.length == 12 || loose == "true") {

        return (
            <View >
                <Button title="Play Another Round" onPress={handleStart} />
            </View>


        )
        }




}

export default NewGame;