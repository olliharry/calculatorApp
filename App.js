import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [calcValue, setCalcValue] = useState("");

  function onNumPress(number) {
    if (calcValue.concat(number).length < 29) {
      setCalcValue(calcValue.concat(number));
    } else {
      alert("Max Length Expression Reached.");
    }
  }
  function onClearPress() {
    setCalcValue("");
  }
  function onDeletePress() {
    setCalcValue(calcValue.slice(0, calcValue.length - 1));
  }
  function onEqualsPress() {
    var result;
    try {
      result = String(eval(calcValue));
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert("Incorrect Syntax.");
        setCalcValue("");
        return;
      }
    }
    setCalcValue(result);
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>{calcValue}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("7")}
        >
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("8")}
        >
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("9")}
        >
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("/")}
        >
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("4")}
        >
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("5")}
        >
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("6")}
        >
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("*")}
        >
          <Text style={styles.text}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("1")}
        >
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("2")}
        >
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("3")}
        >
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("-")}
        >
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("0")}
        >
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress(".")}
        >
          <Text style={styles.text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => {
            onEqualsPress();
          }}
        >
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("+")}
        >
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress("(")}
        >
          <Text style={styles.text}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberButton}
          onPress={() => onNumPress(")")}
        >
          <Text style={styles.text}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => {
            onClearPress();
          }}
        >
          <Text style={styles.text}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => {
            onDeletePress();
          }}
        >
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1137",
    alignItems: "center",
    justifyContent: "center",
  },
  numberButton: {
    width: "20%",
    height: 75,
    backgroundColor: "#e52165",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  text: {
    fontSize: 50,
    color: "#fff",
    fontStyle: "italic",
    fontWeight: "700",
  },
  clearButton: {
    height: 75,
    width: "40%",
    backgroundColor: "#e52165",
    borderRadius: 25,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
