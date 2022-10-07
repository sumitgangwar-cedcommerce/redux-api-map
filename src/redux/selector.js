import { saveData } from "./action";

export const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    saveData: (data) => dispatch(saveData({ ...data })),
  };
};
