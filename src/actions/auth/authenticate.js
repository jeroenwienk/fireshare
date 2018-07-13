export const AUTHENTICATE = 'AUTHENTICATE';

const authenticate = user => {
  return (dispatch, getState) => {
    dispatch({
      type: AUTHENTICATE,
      payload: user
    });
  };
};

export default authenticate;
