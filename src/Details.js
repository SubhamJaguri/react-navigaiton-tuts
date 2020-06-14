import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles/styles';
const Details = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Details</Text>
      <Button title='View top tabs' onPress={() => {}} />
      <Button title='View bottom tabs' onPress={() => {}} />
    </View>
  );
};

export default Details;
