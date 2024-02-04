import {Alert, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button/Button';

const SingUp = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  const handleSubmit = () => {
 
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
    };
    navigation.navigate('AddCarScreen');
  };

  const gotToWelcomeSing = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
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
      <Button text="Giriş Yap" onPress={handleSubmit} />
    
      <Button text="Ana Sayfaya Geri Dön" onPress={gotToWelcomeSing} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
  },
});

export default SingUp;
