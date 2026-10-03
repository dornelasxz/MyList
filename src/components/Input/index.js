import { TextInput } from 'react-native';

import { theme } from '../../theme';
import { styles } from './styles';

export function Input(props) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={theme.colors.gray300}
      {...props}
    />
  );
}
