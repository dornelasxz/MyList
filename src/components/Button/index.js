import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../theme';
import { styles } from './styles';

export function Button(props) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
      <Feather name="plus-circle" size={18} color={theme.colors.gray100} />
    </TouchableOpacity>
  );
}
