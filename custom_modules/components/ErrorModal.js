import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const ErrorModal = (props) => {
  return (
    <Modal
        visible={props.visibility}
        transparent={true}
        animationType="slide"
        onRequestClose={props.closeModal} 
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.errorText}>{props.error}</Text>
            <TouchableOpacity onPress={props.closeModal}>
              <Text>Close</Text>
            </TouchableOpacity>      
          </View>
        </View>
      </Modal>
  )
}

export default ErrorModal

const styles = StyleSheet.create({
    modalView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
    errorText: {
      marginBottom: 20,
      color: 'red',
      fontSize: 16,
    },
  });