/* eslint-disable prettier/prettier */
const {create} = require('zustand');

export const useAgentStore = create(set => ({
  productName: null,
  mode: '',
  setProductName: name => {
    return set({productName: name});
  },
  resetAgentStore: () => {
    return set({productName: null});
  },
  setMode: name => {
    return set({mode: name});
  },
}));
