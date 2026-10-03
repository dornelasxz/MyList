import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    backgroundColor: theme.colors.gray500,
    borderWidth: 1,
    borderColor: theme.colors.gray700,
    borderRadius: theme.radius.md,
    paddingHorizontal: 16,
    fontSize: theme.fontSize.lg,
    color: theme.colors.gray100,
  },
});
