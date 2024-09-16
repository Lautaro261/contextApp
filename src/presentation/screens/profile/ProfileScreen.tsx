import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {globalStyle} from '../../../config';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.title}>ProfileScreen</Text>
      <Text>Nombre : {name}</Text>
      <Text>Email : {email}</Text>

      <Pressable
        style={globalStyle.primaryBotton}
        onPress={() => useProfileStore.setState({name: 'Fernando Herrera'})}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={globalStyle.primaryBotton}
        onPress={() =>
          useProfileStore.setState({email: 'fernandoH@gmail.com'})
        }>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={globalStyle.primaryBotton}
        onPress={() => changeProfile('John Doe', 'john98doe@gmail.com')}>
        <Text>Regresar a Jonh</Text>
      </Pressable>
    </View>
  );
};
