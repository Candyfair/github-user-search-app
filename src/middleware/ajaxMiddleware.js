import { FETCH_USER, isError, receivedUser } from '../redux/actions/search';
import api from './api';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER:
      next(action);

      api.get(
        `/${action.value}`,
      )
        .then((res) => {
          const userAction = receivedUser(res.data);
          store.dispatch(userAction);
          const noError = isError(false);
          store.dispatch(noError);
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            const error404 = isError(true);
            store.dispatch(error404);
          }
          console.log(err.message);
        });
      break;

    default:
      next(action);
  }
};
