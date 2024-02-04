import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import Button from '../components/Button/Button';

const InfoCar = ({ navigation }) => {
  const gotToWelcomeSing = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Araç Servis Durumu</Text>

      <View style={styles.infoContainer}>
      <View style={styles.infoItem}>
          <Text style={styles.label}>Tarih :</Text>
          <Text style={styles.value}>04.02.2024</Text>
        </View>


        <View style={styles.infoItem}>
          <Text style={styles.label}>Araç Bilgisi:</Text>
          <Text style={styles.value}>Passat 1.6 TDI</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Plaka:</Text>
          <Text style={styles.value}>44 PST 4444</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Servis Durumu:</Text>
          <Text style={styles.value}>İşlem Tamamlandı</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Maliyet:</Text>
          <Text style={styles.value}>8500 ₺</Text>
        </View>
      </View>

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
  date: {
    fontSize: 16,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
    textAlign: 'right',
  },
});

export default InfoCar;
