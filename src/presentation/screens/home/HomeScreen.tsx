import React from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from '../../../config';
import {useProfileStore} from '../../store/profile-store';
import {useCounterStore} from '../../store/counter-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const count = useCounterStore(state => state.count);

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.title}>HomeScreen</Text>
      <Text>Nombre : {name}</Text>
      <Text>Email : {email}</Text>
      <Text>Count : {count}</Text>
    </View>
  );
};
