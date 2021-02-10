
import React, { useState } from 'react';
import {
    View, StyleSheet, Text, TouchableHighlight, Alert
} from 'react-native';



const Index: () => React$Node = () => {
    const [calc, setCalc] = useState(0);

    function padrao(props) {

        if (props === "AC") {

        } else if (props === "+/-") {

        } else if (props === "%") {

        } else if (props === "÷") {

        } else if (props === "x") {

        } else if (props === "-") {

        } else if (props === "+") {

        } else if (props === "=") {

        } else if (props === ".") {
            setCalc(calc + ".");
        } else if (props === "clean") {
            setCalc("");
        } else {
            setCalc(calc + props);
        }

    };

    function TouchableCustom(props) {

        return (

            <TouchableHighlight style={style.buttonContainer} underlayColor="#333" onPress={() => padrao(props.name)}>
                <View style={style.button}>
                    <Text style={style.text} >{props.name}</Text>
                </View>
            </TouchableHighlight>

        );
    };
    return (
        <View style={style.winView}>

            <View style={style.resultView}>
                <Text style={style.resultText}>{calc}</Text>
            </View>

            <View style={style.boxButton}>

                <View style={style.rowButton}>

                    <TouchableCustom name="AC" />

                    <TouchableCustom name="+/-" />

                    <TouchableCustom name="%" />

                    <TouchableCustom name="÷" />

                </View>
                <View style={style.rowButton}>

                    <TouchableCustom name="1" />

                    <TouchableCustom name="2" />

                    <TouchableCustom name="3" />

                    <TouchableCustom name="x" />
                </View>

                <View style={style.rowButton}>
                    <TouchableCustom name="4" />

                    <TouchableCustom name="5" />

                    <TouchableCustom name="6" />

                    <TouchableCustom name="-" />
                </View>

                <View style={style.rowButton}>
                    <TouchableCustom name="7" />

                    <TouchableCustom name="8" />

                    <TouchableCustom name="9" />

                    <TouchableCustom name="+" />
                </View>

                <View style={style.rowButton}>
                    <TouchableCustom name="clean" />

                    <TouchableCustom name="0" />

                    <TouchableCustom name="." />

                    <TouchableCustom name="=" />
                </View>
            </View>

        </View>
    );
};
const style = StyleSheet.create({

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
        backgroundColor: '#888'
    },
    resultText: {
        color: '#fff',
        fontSize: 24,
        height: ("40%"),
        width: ("100%")
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
    }
});
export default Index;