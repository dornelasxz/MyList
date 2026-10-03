import { View } from 'react-native';

import { Button, Counter, EmptyList, Input, Logo } from '../../components';
import { theme } from '../../theme';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.form}>
        <Input placeholder="Adicione algo a sua lista" />
        <Button />
      </View>

      <View style={styles.counters}>
        <Counter label="Criadas" value={0} color={theme.colors.cyan} />
        <Counter label="Concluídas" value={0} color={theme.colors.blue} />
      </View>

      <View style={styles.divider} />

      <EmptyList />
    </View>
  );
}
