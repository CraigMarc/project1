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
    Pressable,
    Image,
} from 'react-native';

import { useState } from 'react'

import pic from './images/mountain2.jpg';

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
        fontSize: 20,

    },

    input: {
        backgroundColor: '#CDCDCD',
        borderRadius: 15,
        width: '90%',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 30,
        paddingLeft: 5,
        fontSize: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#24A0ed',

    },
    text: {
        fontSize: 20,
        color: 'white',
    },

    startContainer: {
        paddingBottom: 40,

    },
    card: {

        height: 222,
        width: 330,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 70,

    },
    image: {
        height: 212,
        width: 320,
        padding: 5,
        alignSelf: 'center',
        marginTop: 4,
        alignItems: 'center',

    },
});

function FindPics(props) {

    const {
        handlePicSubmit,
        data,
        error,
        playOffline,

    } = props;

    const [search, setSearch] = useState()


    const renderError = () => {
        if (error == "true") {
            return (
                <Text>Pictures did not load try something else or play offline</Text>
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

                    <View style={styles.startContainer}>
                        <Pressable
                            onPress={() => handlePicSubmit(search)}
                            style={styles.button}
                        >
                            <Text style={styles.text}>Search For Pictures</Text>

                        </Pressable>
                    </View>
                    <View>
                        <Pressable
                            onPress={playOffline}
                            style={styles.button}
                        >
                            <Text style={styles.text}>Play Offline</Text>

                        </Pressable>
                    </View>

                    {renderError()}
                </View>
            </View>
            <View style={styles.card}>
                <Image

                    style={styles.image}
                    source={
                        pic
                    }
                />

            </View>
        </View>
    )



}


export default FindPics;