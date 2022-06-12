import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

export const iconAction = (iconName = '',
                     color = 'black',
                     size = 26,
                     isOutline = true) => {
    const focusIcon = isOutline ? '-outline' : '';
    return (<Icon name={iconName + focusIcon} size={size} color={color}/>);
}
