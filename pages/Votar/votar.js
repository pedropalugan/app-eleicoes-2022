import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import { RadioButton } from 'react-native-paper';
import { useState } from 'react'
import Header from '../../componente/header'


export default function Votar({ navigation }){
    const [cand1, setCand1] = useState(0)
    const [cand2, setCand2] = useState(0)



    function getVotes(){
        console.log(cand1, cand2)
    }


    return(
        <View>
            <Header />
            <View style={styles.presidentContent}>
                <View>
                    <TouchableOpacity onPress={() => setCand1(cand1+1)}><Image source={require('../../assets/king.jpg')} style={styles.img}/></TouchableOpacity>
                    <Text style={styles.txtImg}>Imperador Reynald II</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => setCand2(cand2+1)}><Image source={require('../../assets/king.jpg')} style={styles.img}/></TouchableOpacity>
                    <Text style={styles.txtImg}>King Reynald IV</Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={getVotes} style={styles.btn}><Text style={styles.btnTxt}>Teste</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}><Text style={styles.btnTxt}>Home</Text></TouchableOpacity>
            </View>
        </View>
    );
}