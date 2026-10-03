import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: theme.padding,
    paddingTop: 48,
  },
  text: {
    fontSize: theme.fontSize.md,
    color: theme.colors.gray300,
  },
  title: {
    marginTop: 16,
    fontWeight: 'bold',
  },
});
