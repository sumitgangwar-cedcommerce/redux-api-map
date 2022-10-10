import { logOut, saveData } from "./action";

export const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    saveData: () => dispatch(saveData()),
    logOut : () => dispatch(logOut())
  };
};
