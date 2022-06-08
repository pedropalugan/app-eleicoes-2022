import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import Header from '../../componente/header';
import ListaCandidate from './listCandidate';
import * as React from 'react';


export default function Votar({ navigation }){

    const [warning, setWarning] = useState('');
    const [checked, setChecked] = React.useState();



    function getVotes(x){
        if(x === 'first'){
            ListaCandidate[0]['votes'] = ListaCandidate[0]['votes']+1
            console.log(ListaCandidate[0]['votes'])
            navigation.navigate('Resultado')
        }
        else if(x === 'second'){
            ListaCandidate[1]['votes'] = ListaCandidate[1]['votes']+1
            console.log(ListaCandidate[1]['votes'])
            navigation.navigate('Resultado')
        }
        else{
            setWarning('Favor selecionar um candidato')
        }
    }


    return(
        <View>
            <Header />
            <Text style={styles.txt}>{warning}</Text>
            <View style={styles.presidentContent}>
                <View>
                    <Image source={require('../../assets/king.jpg')} style={styles.img}/>
                    <Text style={styles.txtImg}>Imperador Reynald II</Text>
                    <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                    />
                </View>
                <View>
                    <Image source={require('../../assets/king.jpg')} style={styles.img}/>
                    <Text style={styles.txtImg}>King Reynald IV</Text>
                    <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                    />
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => getVotes(checked)} style={styles.btn}><Text style={styles.btnTxt}>Votar</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}><Text style={styles.btnTxt}>Home</Text></TouchableOpacity>
            </View>
        </View>
    );
}