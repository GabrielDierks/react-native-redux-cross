import React from 'react';
import { StyleSheet, View , ImageBackground} from 'react-native';
import { Container, Content , Text} from "native-base";


import AuthButton from './AuthButton';
import styles from "./styles";

const StartScreen = () => (

    <Container>
    <View style={styles.container} >
        <Content>
                <View style={styles.bg}>
                <AuthButton
                />
                </View>
        </Content>
    </View>
    </Container>
);

StartScreen.navigationOptions = {
    header: null
};

export default StartScreen;
