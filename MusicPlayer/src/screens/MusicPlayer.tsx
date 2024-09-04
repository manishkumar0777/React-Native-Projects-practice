import React, { useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native'
import { playListData } from '../constants'
import SongInfo from '../components/SongInfo'
import SongSlider from '../components/SongSlider'
import ControlCenter from '../components/ControlCenter'
import TrackPlayer,{ Track, Event, useTrackPlayerEvents } from 'react-native-track-player'





const {width} = Dimensions.get('window')

const MusicPlayer = () => {

    const [track, setTrack] = useState< Track | null >();

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
        switch (event.type) {
            case Event.PlaybackTrackChanged:
                const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
                setTrack(playingTrack)
                break;
        
            default:
                break;
        }
    })

    const renderArtwork = () => {
        return (
            <View style={styles.listArtWrapper}>
                <View style ={styles.albumContainer}>
                    {track?.artwork && (
                        <Image
                        style ={styles.albumArtImage}
                        source ={{ uri:track?.artwork?.toString() }}
                        />
                    )}
                </View>

            </View>
        )
    }

  return (
    <View style={styles.container}>
        <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtwork}
        keyExtractor={song => song.id.toString()}
        />

        <SongInfo track={track}></SongInfo>
        <SongSlider />
        <ControlCenter></ControlCenter>

    </View>
  )
}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#001d23',
    },
    listArtWrapper : {
        width : width,
        justifyContent : 'center',
        alignItems: 'center',
    },

    albumContainer : {
        width : 300,
        height : 300,
    },

    albumArtImage : {
        height : '100%',
        borderRadius : 4,
    },
})

export default MusicPlayer