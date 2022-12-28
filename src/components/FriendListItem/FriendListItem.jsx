import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status"></span>
      <img
        className="avatar"
        src={avatar}
        alt={name}
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
}