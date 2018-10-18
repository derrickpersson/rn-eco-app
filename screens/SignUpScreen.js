import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';


export default class OnboardingScreen extends React.Component {
  static navigationOptions = {
    title: "Please Sign Up",
  };

  constructor(props){
      super(props);
      this.state = {
          text: "",
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <Text>Name</Text>
        <TextInput
            style={{height: 40}}
            placeholder="John 'Greenthumb' Smith"
            onChangeText={ (text) => this.setState({text})}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
