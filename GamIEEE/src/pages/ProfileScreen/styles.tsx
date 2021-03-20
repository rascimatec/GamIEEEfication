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
    scrollContent: {
        flexDirection: 'column'
    },
    h1: {
        fontSize: 28,
        fontFamily: 'sans-serif-light',
        color: '#FFF',
        backgroundColor: "#191D32",
        width: '100%',
        textAlign: 'center'
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
    h2: {
        fontFamily: 'sans-serif-light',
        fontSize: 24,
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
    },
    profilePic: {
        resizeMode: 'contain',
        width: 100,
        height: 100
    },
    profilePicContainer: { 

    },
    profileHeader: {
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
        minWidth: "100%",
        backgroundColor: "#465881",
        alignItems: "center",
        justifyContent: 'space-between',
        borderRadius: 3,
        padding: 5,
        marginBottom: 5,
        maxWidth: '100%'
    },
    profileInfoBox: {
        flexDirection: 'row', 
        justifyContent: 'flex-start'
    },
    profileInfo: {
        alignItems: 'flex-start',
        marginLeft: 10
    },
    descriptionBox: {
        minWidth: '100%',
        minHeight: 150,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
        backgroundColor: "#465881",
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        marginTop: 5,
        borderRadius: 3,
        marginBottom: 5,
    },
    descriptionBoxInput: {
        color: "#f8f8ff",
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 15
    },
    badgeBox: {
        flex: 1,
        flexDirection: 'column',
        flexGrow: 1,
        minWidth: '100%',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
        backgroundColor: "#465881",
        alignItems: "center",
        justifyContent: 'space-around',
        marginTop: 5,
        borderRadius: 3,
        padding: 5,
        marginBottom: 50
        
    },
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    badgeItem:
    {
        width: "33.333%",
        height: "50%",
        flexDirection: "column",
        alignItems: 'center'
    },
    badgeImage: {
            width: 80,
            height: 80,
            borderRadius: 75 / 2,
            overflow: "hidden",
            borderWidth: 2,
            borderColor: '#000'
    },
    badgeTitle: {
        color: '#fff',
        fontSize: 18
    },
    tagBox: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between'
    },
    tag1: {
       flex: 1,
       backgroundColor: '#750099',
       alignItems: 'center',
       justifyContent: 'center',
       width: '100%',
       borderStyle: 'solid',
       borderWidth: 1,
       borderColor: '#000',
       marginRight: 2.5
    },
    tag2: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center', 
        justifyContent: 'space-evenly',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        marginLeft: 2.5,
        flexDirection: 'row',
        padding: 5
     },
     tagTitle: {
        color: '#FFF',
        fontSize: 18
     },
     tagTitleMember: {
        color: '#ffffff',
        fontFamily: 'sans-serif-condensed',
        fontSize: 18
     }
});



export default styles;