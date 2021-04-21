import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    switchView: {
        backgroundColor: '#777',
        flex: 1,
        alignItems: 'center',
    },
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: '#fff'
    },
    resultsty: {
        flex: 1 / 6,
        flexDirection: 'row',
        backgroundColor: '#888'
    },
    resultcontainer: {
        flex: 1,
        flexDirection: 'column-reverse',
        backgroundColor: '#777'
    },
    butTouch: {
        height: 36,
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
        fontSize: 24,
    },

})