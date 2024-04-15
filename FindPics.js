import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
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
                    <Text className="example">example: mountains, cartoon characters, animals or anything really</Text>
                    <form onSubmit={handlePicSubmit}>
                        <label>
                            {' '}
                            <TextInput
                                id="pictures"
                                type="text"
                                name="pictures"
                                placeholder="search for pictures"
                                required

                            />
                        </label>
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

export { FindPics };