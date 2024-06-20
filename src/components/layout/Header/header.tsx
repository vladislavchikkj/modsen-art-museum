import BurgerMenu from '@components/ui/BurgerMenu/burgerMenu';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../container';
import {
  FavoritesLink,
  HeaderDiv,
  HeaderWrapper,
  IconBookmark,
  IconLogo,
  LinkWrapper,
  LogoWrapper,
  Title,
} from './header.styles';

import bookmarkHomeImage from '@assets/bookmark-home.png';
import homeImage from '@assets/home.png';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <HeaderDiv>
      <Container>
        <HeaderWrapper>
          <LogoWrapper to="/">
            <IconLogo />
            <Title>
              Museum of <span>Art</span>
            </Title>
          </LogoWrapper>
          <BurgerMenu />
          <LinkWrapper>
            {location.pathname !== '/' && (
              <FavoritesLink to="/">
                <IconBookmark src={homeImage} alt="home" />
                <span>Home</span>
              </FavoritesLink>
            )}
            <FavoritesLink to="/favorites">
              <IconBookmark src={bookmarkHomeImage} alt="bookmark" />
              <span>Your favorites</span>
            </FavoritesLink>
          </LinkWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderDiv>
  );
};

export default Header;