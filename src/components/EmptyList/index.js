import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../theme';
import { styles } from './styles';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="clipboard-text-outline"
        size={56}
        color={theme.colors.gray350}
      />
      <Text style={[styles.text, styles.title]}>Sua lista ainda está vazia</Text>
      <Text style={styles.text}>Adicione algo para se organizar</Text>
    </View>
  );
}
