import { Alert, View, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button/Button';

const MemberSing = ({ navigation }) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  const handleSubmit = () => {
    if (!userName || !userSurname || !userAge || !userMail) {
      Alert.alert('Pusat Oto Servis', 'Bilgiler Boş Bırakılamaz');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
    };
    navigation.navigate('MemberResultScreen', { user });
  };

  const gotToWelcomeSing = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Input
          label="Araç Plaka"
          placeHolder="Plakayı Giriniz..."
          onChangeText={setUserName}
        />
        <Input
          label="Araç Marka Model"
          placeHolder="Modeli Giriniz..."
          onChangeText={setUserSurname}
        />
        <Input
          label="Kullanıcı Adı"
          placeHolder="Kullanıcı adını Giriniz..."
          onChangeText={setUserMail}
        />
        <Input
          label="Şifre"
          placeHolder="Şifreyi Giriniz..."
          onChangeText={setUserMail}
        />
        <Input
          label="Telefon"
          placeHolder="0(5## ### ## ##)"
          onChangeText={setUserMail}
        />
        <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        <Button text="Ana Sayfaya Geri Dön" onPress={gotToWelcomeSing} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    padding: 20,
  },
});

export default MemberSing;
