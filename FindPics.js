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



function FindPics(props) {

    const {
        handlePicSubmit,
        data,
        error,

    } = props;


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
                    <form onSubmit={handlePicSubmit}>

                            {' '}
                            <TextInput
                                id="pictures"
                                type="text"
                                name="pictures"
                                placeholder="search for pictures"
                                required

                            />

                        <View>
                            <Button title="Search For Pictures" onPress={handlePicSubmit} />
                        </View>
                    </form>
                    {renderError()}
                </View>
            </View>
        </View>
    )

}

export default FindPics;;