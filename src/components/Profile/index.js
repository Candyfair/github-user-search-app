import { useSelector } from 'react-redux';
import moment from 'moment';

import './style.scss';

import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';

const Profile = () => {
  // Check dark mode status
  const { lightmode } = useSelector((state) => state.mode);

  // Get user and user info from state
  const { userInfo } = useSelector((state) => state.search);

  let company;
  if (userInfo.company) {
    company = userInfo.company.replace(/^@/, '');
  }

  return (
    <div className={`profile box${!lightmode ? ' box-dark' : ''}`}>

      {/* Profile header */}
      {/* Bloc 1 */}
      <div className="profile__header">

        {/* Avatar */}
        <div className="profile__header__avatar">
          <img src={userInfo.avatar_url} alt={userInfo.login} />
        </div>

        <div className="profile__header__user-details">

          <div>
            {/* Name */}
            <div className="profile__header__user-details__name">
              <span className={!lightmode ? 'text-dark' : ''}>
                {
                  userInfo.name
                    ? userInfo.name
                    : userInfo.login
                }
              </span>
            </div>

            {/* Username */}
            <div className="profile__header__user-details__pseudo">
              <a href={userInfo.html_url} target="_blank" rel="noopener noreferrer">
                @{userInfo.login}
              </a>
            </div>
          </div>

          {/* Joined date */}
          <div className="profile__header__user-details__joined">
            <span className={!lightmode ? 'text-dark' : ''}>
              Joined {moment(userInfo.created_at).format('Do MMM YYYY')}
            </span>
          </div>

        </div>
      </div>

      {/* Blocs 2, 3 et 4 */}
      {/* Bio */}
      <div className="profile__description">
        <span className={!lightmode ? 'text-dark' : ''}>
          {
            userInfo.bio
              ? userInfo.bio
              : (
                <span className="profile__description__empty">
                  This profile has no bio
                </span>
              )
            }
        </span>
      </div>

      {/* Stats */}
      <div className={`profile__stats${!lightmode ? ' stats-dark' : ''}`}>
        <div className="profile__stats__box">
          <div className="profile__stats__box__title">Repos</div>
          <div className="profile__stats__box__number">
            <span className={!lightmode ? 'text-dark' : ''}>
              {userInfo.public_repos}
            </span>
          </div>

        </div>
        <div className="profile__stats__box">
          <div className="profile__stats__box__title">Followers</div>
          <div className="profile__stats__box__number">
            <span className={!lightmode ? 'text-dark' : ''}>
              {userInfo.followers}
            </span>
          </div>
        </div>
        <div className="profile__stats__box">
          <div className="profile__stats__box__title">Following</div>
          <div className="profile__stats__box__number">
            <span className={!lightmode ? 'text-dark' : ''}>
              {userInfo.following}
            </span>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="profile__links">
        <div className="profile__links__column">

          {/* 1. Location */}
          <div className={`profile__links__link${!userInfo.location ? ' not-available' : ''}`}>
            <div className={`profile__links__icon${!lightmode ? ' icon-dark' : ''}`}>
              <Icon icon={CONSTANTS.ICONS.location} size={20} />
            </div>
            <span>
              {
                userInfo.location
                  ? userInfo.location
                  : 'Not Available'
              }
            </span>
          </div>

          {/* 2. Link website */}
          <div className={`profile__links__link${!userInfo.blog ? ' not-available' : ''}`}>
            <div className={`profile__links__icon${!lightmode ? ' icon-dark' : ''}`}>
              {/* <Icon icon={CONSTANTS.ICONS.website} size={20} /> */}
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" /><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" /></g></svg>
            </div>
            <span>
              <a href={userInfo.blog} className={`link-${!lightmode ? 'dark' : 'light'}`} target="_blank" rel="noopener noreferrer">
                {
                  userInfo.blog
                    ? userInfo.blog
                    : 'Not Available'
                }
              </a>
            </span>
          </div>
        </div>

        <div className="profile__links__column">
          {/* 3. Twitter */}
          <div className={`profile__links__link${!userInfo.twitter_username ? ' not-available' : ''}`}>
            <div className={`profile__links__icon${!lightmode ? ' icon-dark' : ''}`}>
              <Icon icon={CONSTANTS.ICONS.twitter} size={20} />
            </div>
            <span>
              {
                userInfo.twitter_username
                  ? (
                    <a href={`https://twitter.com/${userInfo.twitter_username}`} className={`link-${!lightmode ? 'dark' : 'light'}`} target="_blank" rel="noopener noreferrer">
                      {userInfo.twitter_username}
                    </a>
                  )
                  : 'Not Available'
              }
            </span>
          </div>

          {/* 4. Company */}
          <div className={`profile__links__link${!userInfo.company ? ' not-available' : ''}`}>
            <div className={`profile__links__icon${!lightmode ? ' icon-dark' : ''}`}>
              <Icon icon={CONSTANTS.ICONS.company} size={20} />
            </div>
            <span>
              {
                userInfo.company
                  ? (
                    <a href={`https://github.com/${company}`} className={`link-${!lightmode ? 'dark' : 'light'}`} target="_blank" rel="noopener noreferrer">
                      {userInfo.company}
                    </a>
                  )
                  : 'Not Available'
              }
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
