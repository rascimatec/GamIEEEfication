import { StyleSheet } from "react-native";


const styles = StyleSheet.create( {
    body: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: 'center',
        backgroundColor:"#f8f8ff"
    },
    content: {
        marginTop: 50,
        justifyContent: "center",
        elevation: -1,
        padding: 5
    },
    scrollContent: {
        flexDirection: 'column',
        minWidth: '100%',
        marginBottom: 5
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
    h1t: {
        fontSize: 28,
        fontFamily: 'sans-serif-light',
        color: '#FFF',
        textAlign: 'left',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5
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
        color: "#f8f8ff",
        marginLeft: 5
    },
    completeTaskButton: {
        borderRadius: 5,
        backgroundColor: "#09580d",
        marginRight: 15,
        padding: 2,
        alignItems: 'center',
        justifyContent:'center'
    },
    completeTaskButtonClick: {
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    task: {
        width: '100%',
        height: 100,
        backgroundColor: '#465881',
        padding: 5
    },
    taskBody: {
        margin: 5,
        flexDirection: 'column'
    },
    taskHeader: {
        flexDirection: 'row',
        color: '#FFF',
        backgroundColor: "#191D32",
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});




export default styles;