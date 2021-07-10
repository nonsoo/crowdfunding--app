const PLEDGESUBMIT = "PLEDGESUBMIT";

export const pledgeSubmit = (pledge) => ({
  type: PLEDGESUBMIT,
  payload: pledge,
});

const initalState = {
  pledge: 30000,
  totalPledge: 100000,
  backers: 4000,
  daysLeft: 56,
};

export default function PledgeReducer(state = initalState, action) {
  switch (action.type) {
    case PLEDGESUBMIT:
      console.log(action.payload);
      return { ...state, pledge: action.payload };
    default:
      return state;
  }
}
