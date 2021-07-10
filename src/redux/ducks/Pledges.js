const PLEDGESUBMIT = "PLEDGESUBMIT";

export const pledgeSubmit = (pledge) => ({
  type: PLEDGESUBMIT,
  payload: pledge,
});

const initalState = {
  pledge: 70000,
  totalPledge: 100000,
  backers: 4000,
  daysLeft: 56,
};

export default function PledgeReducer(state = initalState, action) {
  switch (action.type) {
    case PLEDGESUBMIT:
      return { ...state, pledge: state.pledge + parseInt(action.payload) };
    default:
      return state;
  }
}
