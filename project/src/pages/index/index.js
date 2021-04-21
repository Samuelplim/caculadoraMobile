
import React, { useState, useEffect } from 'react';
import {
    View, Text, TouchableHighlight, Switch
} from 'react-native';

import style from './styles';

export default function Index() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [calc, setCalc] = useState([""]);
    const [result, setresult] = useState(0);
    const op = ['+', '-', 'x', '%', '÷'];
    useEffect(() => {

        estimate();
    }, [calc]);//useEffect recebe dois parametros o segundo fica sendo observado [calc] e quando ele muda dispara o primeiro parametro.

    console.log(calc);
    console.log(result);

    function TouchableCal() {
        // criar uma lista global ex:[123,+,456]
        return calc.map((cals, index) => (
            <TouchableHighlight style={style.butTouch} key={index.toString()} onPress={() => calView()} >
                <View style={style.butView} >
                    <Text style={style.buttext} >{cals}</Text>
                </View>
            </TouchableHighlight>
        ));
    };
    function TouchableCustom(props) {

        return (<TouchableHighlight style={style.buttonContainer} underlayColor="#333" onPress={() => padrao(props.name)}>
            <View style={style.button}>
                <Text style={style.text} >{props.name}</Text>
            </View>
        </TouchableHighlight>);
    };
    function calView() {
        return null;
    };
    function estimate() {
        if (calc.length / 3 && calc[calc.length - 1].length > 0) {
            let i = 0;
            let resultvar = parseFloat(calc[i]);

            while (i < calc.length) {
                console.log('estimate ' + resultvar);
                if (calc[i + 1] === '+') {
                    resultvar += parseFloat(calc[i + 2]);
                    i++;
                } else if (calc[i + 1] === '-') {
                    resultvar -= parseFloat(calc[i + 2]);
                    i++;
                } else if (calc[i + 1] === 'X') {
                    resultvar *= parseFloat(calc[i + 2]);
                    i++;
                } else if (calc[i + 1] === '÷') {
                    resultvar = resultvar / parseFloat(calc[i + 2]);
                    i++;
                }

                i++;
            }
            setresult(resultvar);

        }
    };
    function padrao(props) {
        let arraycopy = calc.slice();
        if (props.match(/\d+/g)) {
            arraycopy.pop();
            arraycopy.push(calc[calc.length - 1] + props);
            setCalc(arraycopy);
        } else if (calc !== "") {

            if (props === "AC") {

            } else if (props === "clean") {
                setCalc([""]);
            } else if (props === "=") {

            } else if (props === "+/-") {

            } else if (props === ".") {
                if (!calc.includes('.')) { setCalc("."); }

            } else if (!isFindOp(calc[calc.length - 1], op) && calc[calc.length - 1].length > 0) {
                arrayAddState(calc, setCalc, props);

            }
        }

        //estime();

    };
    function arrayAddState(state, setState, valueAdd) {
        let arraycopy = state.slice();
        arraycopy.push(valueAdd);
        arraycopy.push("");
        setState(arraycopy);
    };
    function isFindOp(arr1, arr2) {

        for (var i = 0; i < arr1.length; i++) {

            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    return true;
                }
            }
        }
        return false;

    };
    return (
        <View style={style.winView}>
            <View style={style.switchView}>
                <Switch
                    trackColor={{ false: '#fff', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor='#3e3e3e'
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View >
            <View style={style.resultcontainer}>

                <View style={style.resultsty}>
                    <TouchableCal />
                </View>
            </View>
            <View style={style.resultsty}>
                <Text style={style.resultText}>{result}</Text>
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

                    <TouchableCustom name="=" style={style.equals} />
                </View>
            </View>

        </View>
    );
}