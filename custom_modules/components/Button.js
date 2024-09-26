import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Button = props => {
    const title = props.title;
    return (
      <TouchableOpacity onPress={props.function}>
        <View style={InputButtons.textInputButton}>
          <Text style={InputButtons.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  export default Button;

  const InputButtons = StyleSheet.create({
    textInputButton: {
      height: 48,
      width:"90%",
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 4,
      marginBottom: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight:"500"
    },
  });