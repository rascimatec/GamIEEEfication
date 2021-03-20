import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    topNav: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: 'absolute',
        top: 0,
        flex: 1,
        alignSelf: 'stretch',
        right: 0,
        left: 0,
        padding: 10,
        backgroundColor: "#f8f8ff",
        height: 50,
        borderBottomColor: '#636363',
        borderBottomWidth: 0.5
    },
    infoTopNav: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    topTabProfileContent: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    topTabCoinContent: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    },
    profileSubTabContent: {
        marginLeft: 8
    },
    coinSubTabContent: {
        flexDirection: "row",
        marginLeft: 15
    },
    signOutButton:{
        alignItems: 'flex-end',
        justifyContent: 'center',
        flex:1,
        marginRight: 5
    }
    
});

export default styles;