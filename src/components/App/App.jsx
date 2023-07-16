import { Container } from 'components/App/App.styled';
import FriendList from 'components/FriendList/FriendList';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import user from 'data/user';

const App = () => (
  <Container>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </Container>
);

export default App;
