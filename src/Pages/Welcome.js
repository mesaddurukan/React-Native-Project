import {View, Text, StyleSheet } from 'react-native';
import React from 'react';

import Button from '../components/Button';

const Welcome = ({navigation}) => {
  const goToMemberSign = () => {
    navigation.navigate('MemberSignScreen');
  };
  const goToSign = () => {
    navigation.navigate('SingUpScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pusat Oto Servis</Text>
      <Button
        style={styles.text}
        text="Giriş Yap"
        onPress={goToSign}
      />
      <Button
        style={styles.text}
        text="Üye Kaydi Oluştur"
        onPress={goToMemberSign}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3d7077',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
  },
  text: {
    borderRadius: 5,
    margin: 10,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default Welcome;
