import styled from 'styled-components';

export const Container = styled.section`
  color: #3b5998;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgb(46 47 66 / 8%), 0 1px 1px rgb(46 47 66 / 16%),
    0 2px 1px rgb(46 47 66 / 8%);
  overflow: hidden;
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const List = styled.ul`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #3b5998;
  color: #f7f7f7;
  margin-top: 10px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    gap: 5px;
  }

  li:not(:last-child) {
    border-right: 1px solid #8b9dc3;
  }
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  text-align: center;
  display: block;
  font-weight: bold;
`;
