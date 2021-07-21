import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AlbumCategory from '../components/AlbumCategory'

const albumCategory = {
  id: '1',
  title: 'Happy Vibes',
  albums: [{
    id: '1',
    imageUri: '',
    artistsHeadline: 'Taylor Swift, Kygo, Avicii'
  }, 
{
  id: '2',
  imageUri: '',
  artistsHeadline: 'Post Malone, Drake, Eminem'
},
{
  id: '3',
  imageUri: '',
  artistsHeadline: 'Journey, Escape, Avicii'
},
{
  id: '4',
  imageUri: '',
  artistsHeadline: 'Bob Marley, Cardi B, Stas Mihailov'
}

  ]
}


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AlbumCategory title={albumCategory.title} albums={albumCategory.albums} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
