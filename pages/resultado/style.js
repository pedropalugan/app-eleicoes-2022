import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    txt:{
        fontWeight: 500,
    },
    img:{
        height: 175,
        width: 175,
        borderRadius: 15,
    },  
    imgContainer:{
        flex: 1,
        flexDirection: 'row',
       justifyContent: 'space-between',
       marginLeft: '5%',
       marginRight: '5%',
       marginTop: '18vh',
    },
    numberOfVotes:{
        fontWeight: 700,
        fontSize: 35,
        textAlign: 'center',
    },
    btn:{
        backgroundColor: '#ffdf00',
        borderRadius: 10,
        width: '75%',
        textAlign: 'center',
        height: 50,
        marginTop: '10%',
    },
    btnTxt:{
        color: '#002776',
        fontWeight: 700,
        fontSize: 25,
        marginTop: 7,
    },
    mainContent:{
        alignItems: 'center',
    },
    headerContainer:{
        width: '100vw',
    }
})

export default styles;