import React from 'react';
import {
    AsyncStorage,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';

export default class OnboardingScreen extends React.Component {
  static navigationOptions = {
    title: "Please Sign Up",
  };

  constructor(props){
      super(props);
      this.state = {
          name: "",
          email: "",
          password: ""
      }
      this.handleOnPress = this.handleOnPress.bind(this);
      this.focusNextField = this.focusNextField.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.inputs = {};
  }

  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding">
        <TextInput style={styles.input}
            placeholder={"Name"}
            placeholderTextColor={'#fff'}
            blurOnSubmit={ false }
            returnKeyType={ "next" }
            onSubmitEditing={ () => {
                this.focusNextField("email");
            }}
            onChangeText={(name) => this.setState({name})}
            ref={ input => {
                this.inputs['name'] = input;
            }}>
        </TextInput>
        <TextInput style={styles.input}
            placeholder={"Email"}
            placeholderTextColor={'#fff'}
            blurOnSubmit={ false }
            returnKeyType={ "next" }
            onSubmitEditing={ () => {
                this.focusNextField("password");
            }}
            ref={ input => {
                this.inputs['email'] = input;
            }}
            onChangeText={(email) => this.setState({email})}>
        </TextInput>
        <TextInput style={styles.input}
            placeholder={"Password"}
            placeholderTextColor={'#fff'}
            blurOnSubmit={ true }
            returnKeyType={ "done" }
            ref={ input => {
                this.inputs['password'] = input;
            }}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}>
        </TextInput>
        <TouchableOpacity onPress={this.handleSubmit} style={styles.helpLink}>
              <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.logInLinkContainer}>
            <Text>
                Already have an account?

                <Text
                    onPress={this.handleOnPress} style={styles.logIn}
                > Log In
                </Text>
            </Text>
        </View>
        <View style={{ height: 60 }}/>
        
      </KeyboardAvoidingView>
    );
  }

  handleOnPress(){
    this.props.navigation.navigate('LogIn');
  }

  focusNextField(id) {
      this.inputs[id].focus();
  }

  handleSubmit = async () => {
    const response = await this.postSubmit();
    try {
        await AsyncStorage.setItem('userToken', 
        // response.token
        '123'
        );
    } catch (error) {
        console.log("Error Saving Data: ", error);
    }

    this.props.navigation.navigate('App');
  }

  postSubmit = async () => {
    const submitData = {
        ...this.state,
        password_confirmation: this.state.password
    };
    const stringifiedData = JSON.stringify(submitData);
    fetch('http://192.168.1.103:3000/api/v1/users', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: stringifiedData
    })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.log(error);
        });
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
