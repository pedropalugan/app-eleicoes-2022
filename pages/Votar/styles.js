import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    txt:{
        fontSize: 25,
    },
    img:{
        width: 150,
        height: 150,
        borderRadius:10,
    },
    presidentContent:{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '15%',
    },
    txtImg:{
        fontWeight: 700,
        marginTop: 10,
    },
    btn:{
        backgroundColor: '#ffdf00',
        width: '50%',
        textAlign: 'center',
        paddingBottom: '5%',
        paddingTop: '5%',
        paddingLeft: '10%',
        paddingRight: '10%',
        borderRadius: 10,
        marginTop: 45,
    },
    btnTxt:{
        color:"#002776",
        fontWeight: 700,
        fontSize: 18, 
    },
    btnContainer:{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
})

export default styles;