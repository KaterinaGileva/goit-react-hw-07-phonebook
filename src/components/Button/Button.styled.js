import styled from 'styled-components';

export const ButtonFilter = styled.button`
display: inline-flex;
    padding: 8px 12px;
    border-radius: 4px;
    border: solid 1px blue;
    font: inherit;
    cursor: pointer;
    background-color:  green;
    
    :hover {
    background-color: green;
    transform: scale(1.02);
  }
  
  :active {
    background-color: #1565c0;
    color: #fff;
    box-shadow: 2px 2px 5px #fc894d;
  }
`;
