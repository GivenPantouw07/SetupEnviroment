/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({placeholder = 'Default Value'}) => {
    return (
        <TextInput placeholder = {placeholder}
          style={style.inputUsername}
        />
    );
};

const style = StyleSheet.create({
    inputUsername: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 10,
      },
});

export default Input;
