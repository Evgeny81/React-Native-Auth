import React, {Component} from 'react';
import { TextInput, View, Text } from 'react-native';
import {Button, Card, CardSection} from './common';

const Input = ({label}) => {
    return (
        <View>
            <Text>{label}</Text>
        </View>
    )
};

export {Input};
