export default function cleaupMedia(mediaFiles) {
  if (!Array.isArray(mediaFiles) || mediaFiles.length === 0) return [];
  const newMedia = [];
  let folderName = '';

  for (let i = 0; i < mediaFiles.length; i++) {
    if (mediaFiles[i].title) {
      folderName = getFolder(mediaFiles[i].path);

      newMedia.push({
        id: mediaFiles[i].duration + i,
        duration: mediaFiles[i].duration,
        url: mediaFiles[i].path,
        title: mediaFiles[i].title || mediaFiles[i].fileName.replace(/.mp3|.aac|.wav|.flac/, ''),
        artwork: mediaFiles[i].cover || null,
        artist: mediaFiles[i].author === '<unknown>' ? 'unknown' : mediaFiles[i].author,
        album: mediaFiles[i].album === '<unknown>' ? 'unknown' : mediaFiles[i].album,
        index: i,
        folder: folderName,
      });
    }
  }

  return newMedia;
}

function getFolder(path) {
  const dirArr = path.split('/');
  return dirArr[dirArr.length - 2];
}
