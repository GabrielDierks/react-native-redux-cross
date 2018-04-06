import React from 'react';
import { StyleSheet, View , ImageBackground} from 'react-native';
import { Container, Content , Text} from "native-base";


import AuthButton from './AuthButton';
import styles from "./styles";
const background = require("../../../assets/shadow.png");



const StartScreen = () => (

    <Container>
    <View style={styles.container} >
        <Content>
            <ImageBackground source={background} style={styles.shadow}>
                <View style={styles.bg}>
                <AuthButton
                />
                </View>
            </ImageBackground>
        </Content>
    </View>
    </Container>
);

StartScreen.navigationOptions = {
    header: null
};

export default StartScreen;
