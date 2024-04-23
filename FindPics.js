import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';

import { useState } from 'react'

var styles = StyleSheet.create({
  title: {
   fontWeight: 'bold',
   fontSize: 35,
   textAlign: 'center',
   paddingBottom: 20,
   paddingTop: 10,

  },
  description: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },

  input: {
    backgroundColor: '#CDCDCD',
    borderRadius: 15,
    width: '90%',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 30,
    paddingLeft: 5,
  },
});


function FindPics(props) {

    const {
        handlePicSubmit,
        data,
        error,

    } = props;

    const [search, setSearch] = useState()


    const renderError = () => {
        if (error == "true") {
            return (
                <Text>Pictures did not load try something else</Text>
            )
        }

    }

    return (

        <View>
            <Text style={styles.title}>Memory Game</Text>
            <View>
                <View>

                    <Text style={styles.description}>Fill in the form with the type of pictures you want to display in the game.</Text>
                    <Text style={styles.description}>(example: mountains, cartoon characters, animals or anything really)</Text>



                            <TextInput
                                style={styles.input}
                                id="pictures"
                                type="text"
                                name="pictures"
                                placeholder="search for pictures"
                                onChangeText={(value) => setSearch(value)}
                                required

                            />

                        <View>
                            <Button title="Search For Pictures"
                            onPress={() => handlePicSubmit(search)}

                            />
                        </View>

                    {renderError()}
                </View>
            </View>
        </View>
    )


/*
return (
<View>
            <Text>Memory Game</Text>
            </View>
)*/

}


export default FindPics;