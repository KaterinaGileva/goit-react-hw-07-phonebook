import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  max-width: auto;
  margin: 20px;
  padding: 20px;
  
  border-radius: 10px;
  background-color: #00FFFF;
  
`;

export const Header = styled.header`
  top: 0;
  display: flex;
  padding: 0px 50px

  align-items: center;
  justify-content: space-between;
  border-radius: 10px;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  margin: 5px 40px 5px 0;
  padding: 8px 8px;
  
  border-radius: 4px;
  text-decoration: none;
  
  background-color: yellow;
  font-size: 24px;
  font-weight: 700;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: #ADFF2F;
    box-shadow: 3px 3px 7px #fc894d;
  }

  :hover {
    transform: scale(1.03);
  }
`;