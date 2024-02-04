import { Text, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button/Button';

const Randevu = ({ navigation }) => {
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
    navigation.navigate('InfoCarScreen', { user });
  };

  const gotToWelcomeSing = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Randevu Müsait Saatler</Text>
      <Text style={styles.date}>04.02.2024</Text>

      <Text style={styles.sectionTitle}>Öğleden Önce</Text>
      <View style={styles.timeContainer}>
        <Text style={[styles.time,{ backgroundColor: 'red' }]}>08:00</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>08:30</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>09:00</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>09:30</Text>
        <Text style={styles.space}></Text>
        <Text style={[styles.time,{ backgroundColor: 'red' }]}>10:00</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>10:30</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>11:00</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>11:30</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>12:00</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>12:30</Text>
      </View>

      <Text style={styles.sectionTitle}>Öğleden Sonra</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>13:00</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>13:30</Text>
        <Text style={styles.space}></Text>
        <Text style={[styles.time,{ backgroundColor: 'red' }]}>14:00</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>14:30</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>15:00</Text>
        <Text style={styles.space}></Text>
        <Text style={[styles.time,{ backgroundColor: 'red' }]}>15:30</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>16:00</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>16:30</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>17:00</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.time}>17:30</Text>
      </View>

      <Button text="Devam Edin" onPress={handleSubmit} />
      <Button text="Ana Sayfaya Geri Dön" onPress={gotToWelcomeSing} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  time: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  space: {
    width: 10,
    height: 10,
  },
});

export default Randevu;
