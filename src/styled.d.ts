import 'styled-components';
import { Theme } from './models/themeModal';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}