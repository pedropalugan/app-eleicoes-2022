import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    txt:{
        fontSize: 25,
        fontWeight: 600,
        color: '#FFF',
        textAlign: 'center',
        marginTop: '10%'
    },
    btnContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 400,
        marginTop: '10%',
    },
    btn:{
        backgroundColor: '#ffdf00',
        borderRadius: 10,
        width: '75%',
        textAlign: 'center',
        height: 50,
        marginTop: '10%',
    },
    mainContent:{
        backgroundColor: '#009c3b',
        height: '50vh',
        alignItems: 'center',
    },
    btnTxt:{
        color: '#002776',
        fontWeight: 700,
        fontSize: 25,
        marginTop: 7,
    },
    img:{
        height: 250,
        width: 175,
        marginTop: '5%',
    },
    warn:{
        fontWeight: 25,
    },
})

export default styles;