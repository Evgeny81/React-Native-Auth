import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from './common';

//By default TextInputs doesn't have height and width like Image. To make it visible we should add styles.

class LoginForm extends Component {
    state = {email: '', password:''};

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
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