import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import ListaCandidate from '../Votar/listCandidate';
import Header from '../../componente/header'

let totalVotes;
let perCandidate0;
let perCandidate1;

export default function Resultado({ navigation }){
    totalVotes = ListaCandidate[0]['votes'] + ListaCandidate[1]['votes']
    perCandidate0 = (ListaCandidate[0]['votes']/totalVotes)*100
    perCandidate1 = (ListaCandidate[1]['votes']/totalVotes)*100
    return(
        <View style={styles.mainContent}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <View style={styles.imgContainer}>
                <View>
                    <Image source={require('../../assets/king.jpg')} style={styles.img}/>
                    <Text style={styles.txt}>{ListaCandidate[0]['name']}</Text>
                    <Text style={styles.numberOfVotes}>{perCandidate0.toFixed(2)}%</Text>
                </View>
                <View>
                    <Image source={require('../../assets/king.jpg')} style={styles.img}/>
                    <Text style={styles.txt}>{ListaCandidate[1]['name']}</Text>
                    <Text style={styles.numberOfVotes}>{perCandidate1.toFixed(2)}%</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnTxt}>Home</Text>
            </TouchableOpacity>
        </View>
    );
}