import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

export default class LogInScreen extends React.Component {
  static navigationOptions = {
    title: "Please Log In",
  };

  constructor(props){
      super(props);
      this.state = {
          email: "",
          password: ""
      }
      this.handleOnPress = this.handleOnPress.bind(this);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput style={styles.input}
            placeholder={"Email"}
            placeholderTextColor={'#fff'}
            onChangeText={(email) => this.setState({email})}>
        </TextInput>
        <TextInput style={styles.input}
            placeholder={"Password"}
            placeholderTextColor={'#fff'}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}>
        </TextInput>
        <View style={styles.logInLinkContainer}>
            <Text>
                New to Eco App?
                <Text
                    onPress={this.handleOnPress} style={styles.logIn}
                > Sign Up Here
                    {/* <Text style={styles.linkText}>Log In</Text> */}
                </Text>
            </Text>
        </View>
        
      </ScrollView>
    );
  }

  handleOnPress(){
    this.props.navigation.navigate('SignUp');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',      
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DCE6C5',
  },
  input: {
      height: 80,
      width: 120,
      padding: 5,
      borderRadius: 5,
      backgroundColor: '#C5D0AC',
      borderColor: '#979797',
  },
  logInLinkContainer: {
    flexWrap: 'nowrap',
  },
});
