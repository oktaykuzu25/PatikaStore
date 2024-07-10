import React from "react";
import { FlatList, SafeAreaView ,StyleSheet,Text , TextInput} from "react-native";
import PatikaCard from "./components/PatikaCard/PatikaCard";
import patikaJson from "./Patika.json";




const App = () => {

    const renderItem = ({item}) => <PatikaCard  patika = {item} />

    return(

        <SafeAreaView style={styles.container}>
          <Text style={styles.fristTitle}> PATİKASTORE</Text>
            <TextInput style={styles.searcbar}  placeholder="Arama yapalım."
        clearButtonMode="always"/>
         <FlatList data={patikaJson} renderItem={renderItem} numColumns={2}/>
        </SafeAreaView>

    );
}




const styles =StyleSheet.create({
    container : {
        flex :1,
       backgroundColor : 'white',
    
    },
    fristTitle :{
        fontSize : 30,
        fontWeight : 'bold',
        marginBottom : 10,
        color: 'purple',

    },
searcbar :{
    backgroundColor: "#F0F0F0",
    margin: 10,
    marginTop: 3,
    borderRadius: 5,
    height: 30
}



});

export default App;