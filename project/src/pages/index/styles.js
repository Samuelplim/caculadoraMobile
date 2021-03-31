import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    buttonContainer: {

        width: 70,
        height: 70,
        backgroundColor: "#444",
        marginTop: 5,
        marginLeft: 5,
    },
    button: {
        borderRadius: 16,

        flex: 1,
        backgroundColor: '#222',
        justifyContent: "center",
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: '#fff'
    },


    resultView: {
        alignItems: 'center',
        backgroundColor: '#888',
        height: ("40%"),
        width: ("100%")
    },
    resultText: {
        color: '#fff',
        fontSize: 24,

    },
    winView: {
        height: ("100%"),
        width: ("100%")
    },
    rowButton: {
        margin: 0,
        padding: 0,
        flexDirection: 'row',

    },
    boxButton: {
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 5,
        backgroundColor: '#444',
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
    },
    buttext: {
        fontSize: 36,
    },

})