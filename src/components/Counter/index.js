import { Text, View } from 'react-native';

import { styles } from './styles';

export function Counter({ label, value, color }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color }]}>{label}</Text>
      <View style={styles.badge}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}
