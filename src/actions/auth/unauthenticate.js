export const UNAUTHENTICATE = 'UNAUTHENTICATE';

const unauthenticate = () => {
  return (dispatch, getState) => {
    dispatch({
      type: UNAUTHENTICATE
    });
  };
};

export default unauthenticate;
