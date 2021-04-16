import { StyleSheet } from "react-native";


const styles = StyleSheet.create( {
    body: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'space-evenly',
        backgroundColor:"#18183d",
        height:'100%'
    },
    logo: {
        flex: 1,
        width: "100%",
        height: 2,
        resizeMode: 'contain',
        marginTop: 15
    },
    h1: {
        fontSize: 48,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 15
    },
    content: {
        justifyContent: "center",
        elevation: -1,
        padding: 20,
        width: '100%'

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
    button: {
        borderRadius: 50,
        padding: 10,
        textAlign:'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonOpacity: {
        borderRadius: 50,
        backgroundColor: "#fb5b5b",
        width: '100%',
        height: 35,
        justifyContent: 'center',
        textAlign:'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonTXT: {
        color: '#FFF',
        fontFamily: '',
        fontSize: 18
    },
    emailInput: {
        backgroundColor:'#FFF',
        width: '100%',
        textAlign: 'left',
        marginVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 15
    },
    forgotTXT: {
        color: '#FFF',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderTopWidth: 2,
        borderColor: '#FFF',
        width: '100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    footerTXT: {
        color: '#FFF',
        marginRight: 5
    },
    footerLink:{
        color: '#FFF',
        marginRight: 5,
        textDecorationLine: 'underline'
    }
 } )

 export default styles;