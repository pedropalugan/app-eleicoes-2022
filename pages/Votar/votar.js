import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'
import { RadioButton } from 'react-native-paper';
import { useState } from 'react'


export default function Votar({ navigation }){
    const [cand1, setCand1] = useState(0)
    const [cand2, setCand2] = useState(0)
    export default cand1



    function getVotes(){
        console.log(cand1, cand2)
    }


    return(
        <View>
            <Text style={styles.txt}>Olá</Text>
            <TouchableOpacity onPress={() => setCand1(cand1+1)}><Text>Candidato 1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setCand2(cand2+1)}><Text>Candidato 2</Text></TouchableOpacity>
            <TouchableOpacity onPress={getVotes}><Text>Teste</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text>Home</Text></TouchableOpacity>
        </View>
    );
}