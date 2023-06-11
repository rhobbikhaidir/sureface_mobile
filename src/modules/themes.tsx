// import type { ExtendedTheme } from '@react-navigation/native'
import { DefaultTheme } from '@react-navigation/native'

export const palette = {
  primary: '#002C5F',
  secondary: '#ff6a00',
  background: '#F6F3F2',
  white: '#fff',
  black: '#000000',
  button: '#000000',
  shadow: '#757575',
  text: '#30363b',
  borderColor: '#E1DFDF',
  borderColorDark: '#333942',
  placeholder: '#a1a1a1',
  danger: 'rgb(208, 2, 27)',
  title: 'rgb(102, 102, 102)',
  separator: 'rgb(194, 194, 195)',
  highlight: 'rgb(199, 198, 203)',
  blackOverlay: 'rgba(0,0,0,0.8)',
  iconWhite: '#fff',
  iconBlack: '#101214',
  dynamicWhite: '#fff',
  dynamicBlack: '#1c1e21',
  dynamicBackground: '#fff',
  transparent: 'transparent',
  calpyse: '#2b7488',
  backgroundColor: '#F6F3F2',
  hyundaiSand: '#E4DCD3',
  hyundaiLightSand: '#F6F3F2',
  gray: '#999999',
  lightGray: '#CCCCCC',
  activeBlue: '#00AAD2',
  activeRed: '#E63312',
  divider: '#EBEBEB',
  neutral: '#737373',
  green: '#28A138',
  greenSuccess: '#198754',
  loading: '#313131',
  lightBlue: '#E6F7FB',
  backBackground: 'rgba(0,0,0,0.3)',
  grayDarker: '#B6B6B6'
}

export const LightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...palette
  }
}

export const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...LightTheme.colors,
    background: palette.black,
    foreground: palette.white,
    text: palette.white,
    tabBar: palette.black,
    iconWhite: palette.black,
    iconBlack: palette.white,
    dynamicBackground: palette.dynamicBlack,
    shadow: palette.transparent,
    borderColor: palette.borderColorDark
  }
}
