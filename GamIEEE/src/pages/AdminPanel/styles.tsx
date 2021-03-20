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
        borderRadius: 30
    },
    scrollContent: {
        flexDirection: 'column',
        marginBottom: 50
    },
    h1: {
        fontSize: 28,
        fontFamily: 'sans-serif-light',
        color: '#FFF',
        backgroundColor: "#191D32",
        width: '100%',
        textAlign: 'center'
    },
    containerHeader: {
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
        backgroundColor: "#191D32",
        marginTop: 5,
        minWidth: '100%'
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
     inputName:
     {
        backgroundColor:'#FFF',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000',
        textAlign: 'left',
        marginVertical: 5,
        paddingHorizontal: 15
     },
     inputDate: {
        backgroundColor:'#FFF',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000',
        textAlign: 'left',
        paddingHorizontal: 15
     },
     datePicker: {
     },
     picker: {
         alignSelf:'center',
         justifyContent:'center',
         backgroundColor: "#FFF",
         width: '100%',
         
     },
     containerContent: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
        minWidth: "100%",
        backgroundColor: "#465881",
        alignItems: "center",
        justifyContent:'center',
        paddingVertical: 10,
        paddingHorizontal: 10
     },
     inputDescription: {
        backgroundColor:'#FFF',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000',
        textAlign: 'left',
        textAlignVertical: 'top',
        marginVertical: 5,
        paddingHorizontal: 10,
        height: 200
     },
     pickerView: {
         backgroundColor: '#FFF',
         borderStyle: 'solid',
         borderWidth: 2,
         borderColor: '#000',
         minWidth: '100%',
         color: '#000',
         marginTop: 5,
         paddingLeft: 5
     }
});

export default styles;