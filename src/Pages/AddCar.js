import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button/Button';

const AddCar = ({ navigation }) => {
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
    navigation.navigate('RandevuScreen');
  };

  const gotToWelcomeSign = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Hoşgeldiniz...</Text>
        <Text style={styles.subTitle}>Sn; M. Esad Durukan</Text>
        <Text style={styles.date}>04.02.2024</Text>
        <Input
          label="Araç Marka / Model"
          placeHolder="Araç Marka / Model..."
          onChangeText={setUserName}
        />
        <Input
          label="Araç Motor Bilgisi"
          placeHolder="Araç Motorunu Giriniz..."
          onChangeText={setUserSurname}
        />
        <Input
          label="Araç Km Bilgisi"
          placeHolder="Araç Km Giriniz..."
          onChangeText={setUserMail}
        />
        <Input
          label="Önceki Bakım Geçmişi"
          placeHolder="Önceki bakım geçmişi..."
          onChangeText={setUserMail}
        />
        <Input
          label="İstenilen ve Önerilen Bakım"
          placeHolder="İstenilen ve Önerilen Bakım..."
          onChangeText={setUserMail}
        />
        <Button text="Onayla" onPress={handleSubmit} />
        <Button text="Ana Sayfaya Geri Dön" onPress={gotToWelcomeSign} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default AddCar;
