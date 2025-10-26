import { useDispatch, useSelector } from 'react-redux';
import { ChangeThemeDiv, ToggleThemeBtn, HeaderContainer, HeaderContainerDiv, StyledNavLink, ToggleThemeIcon} from './Header.styled';
import { toggleThemeAction } from '../../feature/themeList';
import { RootState } from '../../store';

import lightThemeIcon from '../../assets/images/light.svg'
import darkThemeIcon from '../../assets/images/dark.png'

export const Header = () => {

  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.themeList.theme)
  const currentTheme = theme.name === 'light' ? lightThemeIcon : darkThemeIcon

  return (
    <HeaderContainer>
      <HeaderContainerDiv>
        <StyledNavLink to="/">ToDo</StyledNavLink>
        <StyledNavLink to="/list">List</StyledNavLink>
        
        <ChangeThemeDiv>
            <ToggleThemeBtn onClick={() => dispatch(toggleThemeAction())}>
              <ToggleThemeIcon src={currentTheme} alt='Theme icon' />
            </ToggleThemeBtn>
        </ChangeThemeDiv>
      </HeaderContainerDiv>
    </HeaderContainer>
  );
};
