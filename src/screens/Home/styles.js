import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray700,
  },
  header: {
    height: 173,
    backgroundColor: theme.colors.gray600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: theme.padding,
    marginTop: -27,
  },
  counters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.padding,
    marginTop: 32,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.gray400,
    marginHorizontal: theme.padding,
    marginTop: 20,
  },
});
