import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
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
