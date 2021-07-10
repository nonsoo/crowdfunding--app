const PLEDGESUBMIT = "PLEDGESUBMIT";

export const pledgeSubmit = (pledge) => ({
  type: PLEDGESUBMIT,
  payload: pledge,
});

const initalState = {
  pledge: 0,
};

export default function PledgeReducer(state = initalState, action) {
  switch (action.type) {
    case PLEDGESUBMIT:
      return { ...state, pledge: action.payload };
    default:
      return state;
  }
}
