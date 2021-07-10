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
      return { ...state, showModal: !state.showModal };
    default:
      return state;
  }
}
