import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; //npm install --save firebase
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {//Method will be called automatically
        firebase.initializeApp({//After Authentication set up to email/password. Config taken from "Web setup" snippet.
            apiKey: "AIzaSyDNuTiID7ugCn6z40pCHWjDcZ8Cv_T6FMM",
            authDomain: "auth-e9f3e.firebaseapp.com",
            databaseURL: "https://auth-e9f3e.firebaseio.com",
            projectId: "auth-e9f3e",
            storageBucket: "auth-e9f3e.appspot.com",
            messagingSenderId: "1010497778405"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>

                <LoginForm/>
            </View>
        )
    }
}

export default App;