import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export default function Icon(props) {
  const BrandedIcon = getType(props.type);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <BrandedIcon {...props} />;
}

function getType(type) {
  switch (type) {
    case 'feather':
      return FeatherIcon;
    case 'font-awesome':
      return FontAwesomeIcon;
    case 'antdesign':
      return AntDesignIcon;
    default:
      return MaterialIcons;
  }
}
