import { StyleSheet } from "react-native";


const styles = StyleSheet.create( {
    body: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: 'center',
        backgroundColor:"#465881",
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
        padding: 10
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
        textAlign: "center",
        marginHorizontal: 5
    },
    infoTXT: {
        fontFamily: 'sans-serif-light',
        fontSize: 18,
        color: "#f8f8ff"
    },
    button: {
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: "#fb5b5b",
        color: "#f8f8ff",
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    helpBox: {
        flex: 1,
        width:'100%',
        height: '100%',
        backgroundColor: '#191D32',
        borderStyle: 'solid',
        borderColor: '#FFF',
        borderWidth: 2,
        marginBottom: 50
        
    },
    helpHeader: {
        minWidth: '100%',
        marginBottom: 5
    },
    helpInfo: {
        marginHorizontal: 8,
        padding: 15,
        borderStyle: 'solid',
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 5
    },
    helpInfoBottom: {
        marginHorizontal: 8,
        borderStyle: 'solid',
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 50
    }
});




export default styles;