import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "absolute",
        top: 25,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: "contain",
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    }
})

export default styles;