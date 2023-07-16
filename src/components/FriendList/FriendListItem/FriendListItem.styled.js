import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: #3b5998;
  width: 100%;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgb(46 47 66 / 8%), 0 1px 1px rgb(46 47 66 / 16%),
    0 2px 1px rgb(46 47 66 / 8%);
  padding: 10px 20px;
  overflow: hidden;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ status }) =>
    status === true ? '#00ff00' : '#ff0000'};
`;

export const Avatar = styled.img`
  background-color: #dfe3ee;
  border-radius: 5px;
`;
export const Name = styled.p``;
