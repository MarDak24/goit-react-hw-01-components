import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  color: #3b5998;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 1px 6px rgb(46 47 66 / 8%), 0 1px 1px rgb(46 47 66 / 16%),
    0 2px 1px rgb(46 47 66 / 8%);
  overflow: hidden;

  th,
  td {
    padding: 10px;
  }

  th:not(:last-child),
  td:not(:last-child) {
    border-right: 1px solid #8b9dc3;
  }

  tbody tr:nth-child(even) {
    background-color: #f7f7f7;
  }
`;

export const Head = styled.thead`
  background-color: #3b5998;
  color: #f7f7f7;
`;
