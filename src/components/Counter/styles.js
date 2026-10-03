import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: theme.colors.gray400,
    borderRadius: theme.radius.full,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  value: {
    fontSize: theme.fontSize.sm,
    fontWeight: 'bold',
    color: theme.colors.gray200,
  },
});
