import { Platform } from 'react-native';

export const COLOR_TRANSPARENT = Platform.select({
  ios: 'transparent',
  android: 'transparent',
  default: 'transparent',
});

export const COLOR_WHITE = Platform.select({
  ios: '#ffffff',
  android: '#ffffff',
  default: '#ffffff',
});

export const COLOR_GRAY = Platform.select({
  ios: '#808080',
  android: '#808080',
  default: '#808080',
});

export const COLOR_BORDER = Platform.select({
  ios: '#D2D5DA',
  android: '#D2D5DA',
  default: '#D2D5DA',
});

export const COLOR_PRIMARY = Platform.select({
  ios: '#3B82F7',
  android: '#3B82F7',
  default: '#3B82F7',
});

export const COLOR_DISABLED = Platform.select({
  ios: '#D1D1D1',
  android: '#D1D1D1',
  default: '#D1D1D1',
});

export const COLOR_DANGER = Platform.select({
  ios: '#FF3B30',
  android: '#FF3B30',
  default: '#FF3B30',
});

export const COLOR_GREEN = Platform.select({
  ios: '#34C759',
  android: '#34C759',
  default: '#34C759',
});

export const COLOR_BLUE = Platform.select({
  ios: '#D0E4FF',
  android: '#D0E4FF',
  default: '#D0E4FF',
});

export const COLOR_ORANGE = Platform.select({
  ios: '#F49E4C',
  android: '#F49E4C',
  default: '#F49E4C',
});
