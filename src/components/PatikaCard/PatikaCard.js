import React from "react";
import { SafeAreaView,Text ,Image ,View } from "react-native";
import styles from './PatikaCard.style';



const PatikaCard =({patika}) => {
             function isStock() {
              if (!patika.inStock) 

            
              return <Text style = {styles.inStock}>STOKTA YOK</Text>
            }
            
        
            return(
                <SafeAreaView style = {styles.container}>
                  <View style = {styles.inner_container}>
                    <Image style = {styles.image}
                    source={{uri: patika.imgURL}}
                    />
                    <Text style = {styles.title}>{patika.title}</Text>
                    <Text style = {styles.price}>{patika.price}</Text>
                    <Text>{isStock()}</Text>
                 </View>
                </SafeAreaView>
            );
          }
    


export default PatikaCard;