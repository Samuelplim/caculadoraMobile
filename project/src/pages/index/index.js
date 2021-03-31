
import React, { useState } from 'react';
import {
    View, Text, TouchableHighlight
} from 'react-native';

import style from './styles';


const Index: () => React$Node = () => {
    const [calc, setCalc] = useState([""]);
    const op = ['+', '-', 'x', '%', '÷'];
    const [posCalc, setPosCalc] = useState(0);
    console.log(calc);
    function TouchableCal() {
        //possivel solução também seria ao infez de fazer dois split [123,456] & [+],
        // criar uma lista global ex:[123,+,456]

        return calc.map((cals, index) => (
            <TouchableHighlight style={style.butTouch} key={index.toString()} onPress={() => calView()} >
                <View style={style.butView} >
                    <Text style={style.buttext} >{cals}</Text>
                </View>
            </TouchableHighlight>
        ));
    }
    function calView() {
        return null;
    }
    function arrayAddState(state, setState, valueAdd) {

        const str = state;
        str.push(valueAdd);
        str.push("");
        setState(str);
    }
    function isFindOp(arr1, arr2) {

        for (var i = 0; i < arr1.length; i++) {

            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    return true;
                }
            }
        }
        return false;

    }
    function arrayAddStateEnds(state, setState, valueAdd) {

        const str = state;
        str.pop();
        str.push(valueAdd);
        setCalc(str);
    }
    function padrao(props) {
        console.log(calc);
        if (props.match(/\d+/g)) {
            arrayAddStateEnds(calc, setCalc, calc[calc.length - 1] + props);
            // let aux = calc;
            // let valr = aux.pop();
            // console.log(calc);
            // aux.push(valr + props);
            // setCalc(aux);
            //setCalc((calc + props)); manipulação de string


        } else if (calc !== "") {
            setPosCalc(posCalc + 1);

            if (props === "AC") {

            } else if (props === "clean") {
                setCalc("");
            } else if (props === "=") {

            } else if (props === "+/-") {

            } else if (props === ".") {
                if (!calc.includes('.')) { setCalc("."); }

            } else if (!isFindOp(calc.slice(-2), op)) {
                // (!calc.includes(props, (calc.length - 1))) && (!calc.includes(props, (calc.length - 2)))

                arrayAddState(calc, setCalc, props);
            }
        }



    };

    function TouchableCustom(props) {

        return (<TouchableHighlight style={style.buttonContainer} underlayColor="#333" onPress={() => padrao(props.name)}>
            <View style={style.button}>
                <Text style={style.text} >{props.name}</Text>
            </View>
        </TouchableHighlight>);
    };


    return (
        <View style={style.winView}>

            <View style={style.resultView}>
                <TouchableCal />
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
};
export default Index;