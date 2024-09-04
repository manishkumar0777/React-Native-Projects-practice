import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TrackPlayer, { PlaybackState, State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ControlCenter = () => {
    const playBackState = usePlaybackState();

    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const togglePlayback = async () => {
        const currentTrack = await TrackPlayer.getCurrentTrack();

        const state = await TrackPlayer.getState();

        if (currentTrack !== null) {
            if (state=== State.Paused || state=== State.Ready) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>
            <Pressable onPress={() => togglePlayback(playBackState)}>
                <Icon
                    style={styles.icon}
                    name={playBackState === State.Playing ? "pause" : "play-arrow"}
                    size={75}
                />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
});

export default ControlCenter;
