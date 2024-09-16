/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {globalStyle} from '../../../config';
import {useCounterStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Counter ${count}`,
    });
  }, [count]);

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.title}>Count: {count}</Text>

      <Pressable
        style={globalStyle.primaryBotton}
        onPress={() => incrementBy(1)}>
        <Text>+1</Text>
      </Pressable>

      <Pressable
        style={globalStyle.primaryBotton}
        onPress={() => incrementBy(-1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
