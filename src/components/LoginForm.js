import React, {Component} from 'react';
import { TextInput } from 'react-native';
import {Button, Card, CardSection} from './common';

//By default TextInputs doesn't have height and width like Image. To make it visible we should add styles.

class LoginForm extends Component {
    state = {text: ''};

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        style={{height: 20, width: 100}} />
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;