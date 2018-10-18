import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import MySwiper from '../components/Swiper';


export default class OnboardingScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        this.handleOnPress = this.handleOnPress.bind(this);
    }

    render() {
        return (
        <View style={styles.container}>
            <MySwiper
                showsButton={false}
                loop={false}
                handleOnPress={this.handleOnPress}
            />
        </View>
        );
    }

    handleOnPress = () => {
        this.props.navigation.navigate('SignUp');
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
