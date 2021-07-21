import React from 'react';
import {View, Image, Text} from 'react-native';
import styes from './styles';

export type AlbumProps = {
    id: string;
    imageUri: string;
    artistsHeadline: string;
}

const Album = (props: AlbumProps) => (
    <View style={styles.container}>
        <Image source={{uri: props.album.imageUri}} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
)

export default Album