import { StyleSheet } from "react-native";

const styles = StyleSheet.create( {

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
