import { atom } from 'recoil';

export const SelectedChannelIndex = atom<number>({
  key: 'selectedChannelIndexState',
  default: 0,
});
