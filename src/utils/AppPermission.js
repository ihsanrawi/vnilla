import { Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const PLATFORM_STORAGE_PERMISSIONS = {
  ios: PERMISSIONS.IOS.MEDIA_LIBRARY,
  android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
};

const PLATFORM_PHOTO_PERMISSIONS = Platform.select({
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
});

const REQUEST_PERMISSION_TYPE = {
  storage: PLATFORM_STORAGE_PERMISSIONS,
  photo: PLATFORM_PHOTO_PERMISSIONS,
};

const PERMISSION_TYPE = {
  storage: 'storage',
  photo: 'photo',
};

class AppPermission {
  checkPermission = async (type) => {
    const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];

    if (!permissions) {
      return true;
    }

    try {
      const result = await check(permissions);

      if (result === RESULTS.GRANTED) return true;
      return this.requestPermission(permissions);
    } catch (error) {
      return false;
    }
  };

  requestPermission = async (permissions) => {
    try {
      const result = await request(permissions);
      return result === RESULTS.GRANTED;
    } catch (error) {
      return false;
    }
  };
}

const Permission = new AppPermission();
export { Permission, PERMISSION_TYPE };
