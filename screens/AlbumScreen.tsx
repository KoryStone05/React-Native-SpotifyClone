import React, {useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import {useRoute} from '@react-navigation/native';
import albumDetails from '../data/albumDetails';
import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';

const AlbumScreen = () => {

    useEffect(() => {
        console.log(route)
    }, [])

    const route = useRoute();

    return(
    <View>
        <FlatList 
            data={albumDetails.songs}
            renderItem={({ item }) => <SongListItem song={item} />}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
        />
    </View>
    )
}

export default AlbumScreen