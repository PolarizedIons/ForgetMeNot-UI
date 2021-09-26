import { selector } from 'recoil';
import { SelectedGuild } from './SelectedGuild';

export const SelectedGuildChannels = selector({
  key: 'SelectedGuildChannels',
  get: ({ get }) => {
    const guild = get(SelectedGuild);
    return guild ? guild.channels : null;
  },
});
