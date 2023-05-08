import { FETCH_USER, receivedUser } from '../redux/actions/search';
import api from './api';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER:
      next(action);

      api.get(
        '/octocat',
        // '/candyfair',
      )
        .then((res) => {
          const userAction = receivedUser(res.data);
          store.dispatch(userAction);
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    default:
      next(action);
  }
};
