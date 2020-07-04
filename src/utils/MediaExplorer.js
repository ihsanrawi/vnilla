import {RNAndroidAudioStore} from 'react-native-get-music-files';
import RNFetchBlob from 'rn-fetch-blob';

const options = {
  title: true,
  artist: true,
  album: true,
  duration: true,
  cover: false,
  blured: false,
};

class MediaExplorer {
  getMedia = async () => {
    try {
      let permission = await Permission.checkPermission(
        PERMISSION_TYPE.storage,
      );
    } catch (error) {}
  };

  getMediaWithCovers = async () => {
    const coverFolder = RNFetchBlob.fs.dirs.DocumentDir + '/.AwsmeProject';
    let results = await RNAndroidAudioStore.getAll({
      ...options,
      cover: true,
      coverFolder,
    });
    results;
  };
}
