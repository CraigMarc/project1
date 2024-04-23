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

var styles = StyleSheet.create({
  startContainer: {

    paddingTop: 14,
    paddingBottom: 14,

  },

});



function NewGame(props) {

    const {
        clickedOn,
        loose,
        handleStart,

    } = props;


   if (clickedOn.length == 12 || loose == "true") {

        return (
            <View style={styles.startContainer} >
                <Button title="Play Another Round" onPress={handleStart} />
            </View>


        )
        }




}

export default NewGame;