import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface CardPlacesProps extends TouchableOpacityProps {
  places: string;
}

export function CardPlaces({places, ...rest}: CardPlacesProps) {
  return (
    <TouchableOpacity style={style.buttonPlaces} {...rest}>
      <Text style={style.textPlaces}>{places}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  buttonPlaces: {
    backgroundColor: '#1F1E25',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  textPlaces: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
