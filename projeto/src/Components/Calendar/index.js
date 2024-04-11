import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { Calendar } from 'react-native-calendars';
import {styles} from './style';

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <View style={styles.container}>
    <Text>{currentDate.toString()}</Text>
      <Calendar
        current={currentDate}
      />
    </View>
  );
}
