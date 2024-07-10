import { StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    width: Dimensions.get('window').width / 2,
    justifyContent: 'space-between',
    marginBottom : 5,
    
    },
    inner_container: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 10,
    flex:1
    },
    image: {
        height: Dimensions.get("window").height / 4,
        borderRadius: 15,
        resizeMode: "contain"
    
    }, 
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 5,
        marginBottom: 3,
    },
    price: {
        color: "gray",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 3,
        margin: 5
    },
    inStock: {
        fontWeight: "bold",
        textAlign: "left",
        color: "red",
        margin: 5
    },
})