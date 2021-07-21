import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Album from '../components/Album'


const album = {
  album: {
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04',
    artistsHeadline: 'Taylor Swift, Cardi B, Avicii'
  }
  
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Album album={album} />
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
