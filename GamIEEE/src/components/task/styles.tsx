import { StyleSheet } from "react-native";

const styles = StyleSheet.create( {

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
    height: 50,
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
},
infoTXT: {
    fontFamily: 'sans-serif-light',
    fontSize: 18,
    color: "#f8f8ff",
    marginLeft: 5
},  h1t: {
    fontSize: 28,
    fontFamily: 'sans-serif-light',
    color: '#FFF',
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5
}
})

export default styles;