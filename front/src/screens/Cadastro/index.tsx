import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from "./styles";
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<any>();

  const handleRegister = () => {
    // logica de cadastro
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cadastroText}>Cadastro</Text>
        <TextInput
          placeholder='Nome'
          style={styles.cadastroInput}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder='Email'
          style={styles.cadastroInput}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder='Senha'
          style={styles.cadastroInput}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder='Confirmar Senha'
          style={styles.cadastroInput}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
          
          <Button
            title='Cadastrar'
            onPreess={handleRegister}
          />
      
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
          <Text style={styles.jatemConta}>Já tem conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.entrar}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

