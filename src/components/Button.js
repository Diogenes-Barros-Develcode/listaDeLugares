import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Button({onPress}) {
  return (
    <TouchableOpacity
      style={style.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={style.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#AF3EFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
  },
});
