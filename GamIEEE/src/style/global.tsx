import { StyleSheet } from "react-native";


const styles = StyleSheet.create( {
    body: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: 'center',
        backgroundColor:"#f8f8ff",
        padding: 5
    },
    content: {
        marginTop: 50,
        justifyContent: "center",
        elevation: -1
    },
    container: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
        minWidth: "100%",
        backgroundColor: "#465881",
        alignItems: "center",
        marginTop: 5,
        borderRadius: 3,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 15,
        maxHeight: 150
    },
    firstContainer: {
        width: "100%",
        backgroundColor: "#465881",
        marginTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        alignSelf: 'center'
    },
    middleContainer: {
        flex: 2,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
        minWidth: "100%",
        backgroundColor: "#465881",
        alignItems: "center",
        marginTop: 5,
        borderRadius: 3,
        paddingBottom: 15
    },
    lastContainer: {
        flex: 1,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
        minWidth: "100%",
        backgroundColor: "#465881",
        alignItems: "center",
        marginTop: 5,
        borderRadius: 3,
        paddingBottom: 15,
        marginBottom: 50  
    },
    scrollContent: {
        flexDirection: 'column'
    },
    h1Inline: {
        fontFamily: 'sans-serif-light',
        fontSize: 28,
        color: "#f8f8ff",
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 5,
        backgroundColor: "#191D32"
    },
    h1: {
        fontSize: 28,
        fontFamily: 'sans-serif-light',
        color: '#FFF',
        backgroundColor: "#191D32",
        width: '100%',
        textAlign: 'center',
    },
    h1r: {
        fontFamily: 'sans-serif-light',
        fontSize: 36,
        color: "#f8f8ff",
        textAlign: 'center',
        backgroundColor: "#465881"
    },
    h2: {
        fontFamily: 'sans-serif-light',
        fontSize: 18,
        color: "#f8f8ff",
        textAlign: "center"
    },
    infoTXT: {
        fontFamily: 'sans-serif-light',
        fontSize: 18,
        color: "#f8f8ff"
    },
    button: {
        borderRadius: 12,
        backgroundColor: "#fb5b5b",
        color: "#f8f8ff",
        padding: 5
    },
    topNav:{
        flexDirection: "row",
        justifyContent: "space-between",
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
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomNav:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        position: 'absolute', 
        bottom: 0, 
        flex: 1, 
        alignSelf: 'stretch', 
        right: 0, 
        left: 0,
        height: 50,
        backgroundColor: "#f8f8ff",
        borderTopColor: '#838383',
        borderTopWidth: 0.5
    },
    topTabProfileContent: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    topTabCoinContent: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: 18
    },
    profileSubTabContent:{
        marginLeft: 8
    },
    coinSubTabContent:{
        marginLeft: 8,
        flexDirection: "row"
    },
    bottomTabContainer: {
        width: "33.333%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 0
    }
});




export default styles;