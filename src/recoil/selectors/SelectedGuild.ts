import { selector } from 'recoil';
import { GuildsState } from '../atoms/Guilds';
import { SelectedGuildIndex } from '../atoms/SelectedGuildIndex';

export const SelectedGuild = selector({
  key: 'SelectedGuild',
  get: ({ get }) => {
    const guilds = get(GuildsState);
    const index = get(SelectedGuildIndex);
    return guilds ? guilds[index] : null;
  },
});
