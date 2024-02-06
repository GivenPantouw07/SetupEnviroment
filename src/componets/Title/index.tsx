/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = ({texts}) => {
  return (
    <View>
      <Text style={style.title}>{texts}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Title;
