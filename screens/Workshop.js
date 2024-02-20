import React, { useState } from 'react';
import { View, Alert, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import Dialog from "react-native-dialog";

export default function Workshop() {
  const [image, setImage] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [inputUrl, setInputUrl] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const handleOk = () => {
    setImage(inputUrl);
    setDialogVisible(false);
  };

  const handleButtonPress = () => {
    Alert.alert(
      "Upload Image",
      "Please select an option",
      [
        { text: "Upload image from galleries", onPress: () => pickImage() },
        { text: "Take picture", onPress: () => takePicture() },
        { text: "Enter URL for image", onPress: () => showDialog() }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Button style={styles.button} onPress={handleButtonPress}>Select Image</Button>
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Enter URL for image</Dialog.Title>
        <Dialog.Input onChangeText={(url) => setInputUrl(url)} />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="OK" onPress={handleOk} />
      </Dialog.Container>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button: {
      marginBottom: 20,
    },
    image: {
      width: 380, 
      height: 270,
      borderRadius: 10, 
    },
  });