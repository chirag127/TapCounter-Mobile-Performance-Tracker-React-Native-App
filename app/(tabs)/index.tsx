import { useState, useEffect } from 'react';
import { StyleSheet, Animated, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const STORAGE_KEY = '@tap_counter_high_score';
// how to create Tap Counter – A simple app that counts taps and saves the high score.
// .
//   in expo



export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [scale] = useState(new Animated.Value(1));

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      if (value) {
        setHighScore(parseInt(value, 10));
      }
    });
  }, []);

  const handlePress = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount > highScore) {
        setHighScore(newCount);
        AsyncStorage.setItem(STORAGE_KEY, newCount.toString());
      }

      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();

      return newCount;
    });
  };

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
          <ThemedText style={styles.buttonText}>{count}</ThemedText>
        </Animated.View>
      </TouchableOpacity>
      <ThemedText style={styles.highScore}>High Score: {highScore}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
  },
  buttonText: {
    fontSize: 32,
    color: 'white',
  },
  highScore: {
    marginTop: 20,
    fontSize: 24,
  },
});
// How to create a simple app that counts taps and saves the high score