/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import TrackPlayer from 'react-native-track-player';
import { playbackService } from './musicPlayerServices';
import { playListData } from './src/constants';


AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);


