import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; //npm install --save firebase
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {
      loggedIn: null
    };

    componentWillMount() {//Method will be called automatically
        firebase.initializeApp({//After Authentication set up to email/password. Config taken from "Web setup" snippet.
            apiKey: "AIzaSyDNuTiID7ugCn6z40pCHWjDcZ8Cv_T6FMM",
            authDomain: "auth-e9f3e.firebaseapp.com",
            databaseURL: "https://auth-e9f3e.firebaseio.com",
            projectId: "auth-e9f3e",
            storageBucket: "auth-e9f3e.appspot.com",
            messagingSenderId: "1010497778405"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true});
            } else {
                this.setState({ loggedIn: false});

            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                        );
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                    {this.renderContent()}
            </View>
        )
    }
}

export default App;