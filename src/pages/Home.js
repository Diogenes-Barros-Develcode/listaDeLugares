import React from 'react';
import {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {CardPlaces} from '../components/CardPlaces';

export function Home() {
  const [newPlace, setNewPlace] = useState('');
  const [myPlace, setMyPlace] = useState([]);

  function handleAddNewPlace() {
    setMyPlace(oldState => [...oldState, newPlace]);
  }

  return (
    <SafeAreaView style={style.viewStyle}>
      <Text style={style.title}>Welcome, Diógenes</Text>
      <TextInput
        style={style.styleInput}
        placeholder="Places to travel"
        placeholderTextColor="#555"
        onChangeText={setNewPlace}
      />

      <Button onPress={handleAddNewPlace} />

      <Text style={style.title}>My Places</Text>

      <FlatList
        data={myPlace}
        keyExtractor={item => item}
        renderItem={({item}) => <CardPlaces places={item} />}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    width: '100%',
    textAlign: 'center',
  },
  styleInput: {
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    fontSize: 20,
    padding: 15,
    borderRadius: 10,
  },
});
