import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

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
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" 
              secureTextEntry={true}/>
            </Item>
          </Form>
        </Content>

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
