import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 650px) {
    display: block;
  }
`;

export const BurgerIcon = styled.div`
  width: 25px;
  height: 2px;
  background-color: white;
  position: relative;
  display: inline-block;
  margin-right: 10px;
  transition: 0.5s;

  &::before,
  &::after {
    content: "";
    width: 25px;
    height: 2px;
    background-color: white;
    position: absolute;
    transition: 0.5s;
  }

  &::before {
    top: -8px;
  }

  &::after {
    bottom: -8px;
  }
`;

export const SideMenu = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: ${(props) => (props.isOpen ? "250px" : "0")};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;
`;

export const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 36px;
  color: white;
  cursor: pointer;
`;

export const FavoritesLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 0.5em;
  padding: 1rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconBookmark = styled.img`
  width: 24px;
  height: 24px;
  color: #e0a449;
`;