import { View, StyleSheet, Image , Text} from 'react-native';


export default function Header(){
    return(
        <View style={styles.headerContainer}>
            <Image source={require('../assets/download.png')} style={styles.img}/>
            <Text style={styles.txtHeader}>Eleições 2022</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    img:{
        width: 100,
        height: 140,
        padding: 10,
        marginLeft: 10,
    },
    headerContainer:{
        backgroundColor: "#009c3b",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtHeader:{
        fontWeight: 700,
        color: "#FFF",
        fontSize: 22,
        marginTop: 50,
        marginRight: 10,
    },
})