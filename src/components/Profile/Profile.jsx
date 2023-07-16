import {
  Avatar,
  Container,
  Description,
  Label,
  List,
  Local,
  Name,
  Quantity,
  Tag,
} from 'components/Profile/Profile.styled';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Local>{location}</Local>
      </Description>
      <List>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    }),
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

export default Profile;
