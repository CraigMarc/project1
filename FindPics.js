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
            <Text>Memory Game</Text>
            <View>
                <View>

                    <Text>Fill in the form with the type of pictures you want to display on the cards in the game</Text>
                    <Text>example: mountains, cartoon characters, animals or anything really</Text>



                            <TextInput
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