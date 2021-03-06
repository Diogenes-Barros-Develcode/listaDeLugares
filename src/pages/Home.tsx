import React from 'react';
import {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {CardPlaces} from '../components/CardPlaces';

interface PlacesData {
  id: string;
  name: string;
}

export function Home() {
  const [newPlace, setNewPlace] = useState('');
  const [myPlace, setMyPlace] = useState<PlacesData[]>([]);
  const [gretting, setGrettings] = useState('');

  function handleAddNewPlace() {
    const data = {
      id: String(new Date().getTime()),
      name: newPlace,
    };
    setMyPlace(oldState => [...oldState, data]);
  }

  function handleRemovePlace(id: string) {
    setMyPlace(oldState => oldState.filter(place => place.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGrettings('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGrettings('Good Afternoon');
    } else {
      setGrettings('Good Night');
    }
  }, []);

  return (
    <SafeAreaView style={style.viewStyle}>
      <Text style={style.title}>Welcome, Diógenes</Text>

      <Text style={style.greetings}>{gretting}</Text>

      <TextInput
        style={style.styleInput}
        placeholder="Places to travel"
        placeholderTextColor="#555"
        onChangeText={setNewPlace}
      />

      <Button onPress={handleAddNewPlace} title="Add" />

      <Text style={style.title}>My Places</Text>

      <FlatList
        data={myPlace}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CardPlaces
            places={item.name}
            onPress={() => handleRemovePlace(item.id)}
          />
        )}
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
  greetings: {
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
