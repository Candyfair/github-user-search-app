import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import './style.scss';

import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';
import { searchUser } from '../../redux/actions/search';

const Profile = () => {
  // Check dark mode status
  const { lightmode } = useSelector((state) => state.mode);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(searchUser())
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={`profile box${!lightmode ? ' box-dark' : ''}`}>

      {/* Profile header */}
      <div className="profile__header">
        <div className="profile__header__avatar">Avatar</div>
        <div className="profile__header__user-details">

          <div>
            <div className="profile__header__user-details__name">
              <span className={!lightmode ? 'text-dark' : ''}>
                The Octocat
              </span>
            </div>
            <div className="profile__header__user-details__pseudo">
              <a href="">@{user}</a>
            </div>
          </div>

          <div className="profile__header__user-details__joined">
            <span className={!lightmode ? 'text-dark' : ''}>
              Joined
            </span>
          </div>

        </div>
      </div>

      {/* Description */}
      <div className="profile__description">
        <span className={!lightmode ? 'text-dark' : ''}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Donec odio. Quisque volutpat mattis eros.
        </span>
      </div>

      {/* Stats */}
      <div className={`profile__stats${!lightmode ? ' stats-dark' : ''}`}>
        <div className="profile__stats__box">
          <div className="profile__stats__box__title">Repos</div>
          <div className="profile__stats__box__number">
            <span className={!lightmode ? 'text-dark' : ''}>
              8
            </span>
          </div>

        </div>
        <div className="profile__stats__box">
          <div className="profile__stats__box__title">Followers</div>
          <div className="profile__stats__box__number">
            <span className={!lightmode ? 'text-dark' : ''}>
              3938
            </span>
          </div>
        </div>
        <div className="profile__stats__box">
          <div className="profile__stats__box__title">Following</div>
          <div className="profile__stats__box__number">
            <span className={!lightmode ? 'text-dark' : ''}>
              9
            </span>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="profile__links">
        <div>
          <div className="profile__links__link">
            <div className={`profile__links__icon${!lightmode ? ' icon-dark' : ''}`}>
              <Icon icon={CONSTANTS.ICONS.location} size={20} />
            </div>
            <span>
              San Francisco
            </span>
          </div>

          <div className="profile__links__link">
            <div className={`profile__links__icon${!lightmode ? ' icon-dark' : ''}`}>
              {/* <Icon icon={CONSTANTS.ICONS.website} size={20} /> */}
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"/><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" /></g></svg>
            </div>
            <span>
              https://github.blog
            </span>
          </div>
        </div>

        <div>
          <div className="profile__links__link">
            <div className={`profile__links__icon${!lightmode ? ' icon-dark' : ''}`}>
              <Icon icon={CONSTANTS.ICONS.twitter} size={20} />
            </div>
            <span>
              Not Available
            </span>
          </div>

          <div className="profile__links__link">
            <div className={`profile__links__icon${!lightmode ? ' icon-dark' : ''}`}>
              <Icon icon={CONSTANTS.ICONS.company} size={20} />
            </div>
            <span>
              GitHub
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
