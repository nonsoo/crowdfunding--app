const SHOWMODAL = "SHOWMODAL";

export const onShowModal = () => ({
  type: SHOWMODAL,
});

const initalState = {
  showModal: false,
};

export default function showModalReducer(state = initalState, action) {
  switch (action.type) {
    case SHOWMODAL:
      console.log("I am using the redux store");
      return { ...state, showModal: !state.showModal };
    default:
      return state;
  }
}
