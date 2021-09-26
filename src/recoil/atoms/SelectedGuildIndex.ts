import { atom } from 'recoil';

export const SelectedGuildIndex = atom<number>({
  key: 'selectedGuildIndexState',
  default: 0,
});
