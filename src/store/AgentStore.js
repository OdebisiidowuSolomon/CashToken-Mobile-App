/* eslint-disable prettier/prettier */
const {create} = require('zustand');

const flow = {
  name: 'Airtime',
  paymentMethod: 3,
  reviewMessage:
    'Confirm N2,000 deduced from your sales wallet for airtime purchase',
  successMessage:
    'You have successfully gifted Eko Tokens to yourself. Click the button below to view your Sales Wallet balance',
  BTNsuccessMessage: 'View CashToken Balance',
};

const paymentReview = {amount: null, intent: ''};

export const useAgentStore = create(set => ({
  productName: null,
  mode: '',
  flow,
  paymentReview,
  setPaymentReview: item => {
    set({paymentReview: item});
  },
  setFlow: item => {
    set({
      flow: {
        name: item.name,
        paymentMethod: item.paymentMethod,
        successMessage: item.successMessage,
        BTNsuccessMessage: item.BTNsuccessMessage,
      },
    });
  },
  setMode: name => {
    return set({mode: name});
  },
  setProductName: name => {
    return set({productName: name});
  },
  resetPaymentReview: () => set({paymentReview}),
  resetFlow: () => {
    return set({flow});
  },
  resetAgentStore: () => {
    return set({productName: null});
  },
}));
