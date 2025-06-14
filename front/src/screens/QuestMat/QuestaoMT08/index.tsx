import { View, Text , Image} from 'react-native';
import {styles} from "./styles";
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

export  function QuestaoMT08() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <BackButton />
      <Text> Matematica8 </Text>
      <Button title="Próxima" onPress={() => navigation.navigate('QuestaoMT09')} />
    </View>
  );
}

