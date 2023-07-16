/* eslint-disable prettier/prettier */
const {create} = require('zustand');

export const useResultStore = create((set, get) => ({
  successStore: {
    msg: 'You have successfully gifted Cashtokens to yourself. Click the button below to view your Cashtoken balance',
    btnText: 'View CashToken Balance',
    route: '',
  },
  setSuccessMessage: message => {
    console.log(get());
    return set({successStore: {...get().successStore, msg: message}});
  },
  setSuccessBtnMessage: message => {
    return set({successStore: {...get().successStore, btnText: message}});
  },
  resetSuccessStore: () =>
    set({
      successStore: {
        msg: 'You have successfully gifted Cashtokens to yourself. Click the button below to view your Cashtoken balance',
        btnText: 'View CashToken Balance',
        route: '',
      },
    }),
}));
