import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles'


export default function Home({ navigation }){
    return(
        <View>
            <View style={styles.mainContent}>
            <Image source={require('../../assets/download.png')} style={styles.img}/>
                <Text style={styles.txt}>Eleições 2022</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Votar')}><Text style={styles.btnTxt}>Votar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Resultado')}><Text style={styles.btnTxt}>Resultado</Text></TouchableOpacity>
            </View>
        </View>
        
    );
}