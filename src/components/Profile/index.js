import { useSelector } from 'react-redux';
import './style.scss';

const Profile = () => {
  // Check dark mode status
  const { lightmode } = useSelector((state) => state.mode);

  return (
    <div className={`profile box${!lightmode ? ' box-dark' : ''}`}>
      Profile
    </div>
  );
};

export default Profile;
