import {Image} from "react-native";

const UserImage = (props) => {
    const {radius, path} = props;
    return (
        <Image
            style={{
                width: radius,
                height: radius,
                borderRadius: 75,
            }}
            source={path}
            resizeMode={"cover"}/>
    )
}

export default UserImage;
