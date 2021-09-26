import { atom } from 'recoil';
import { GuildInfo } from '../../models/responses/GuildInfo';

export const GuildsState = atom<GuildInfo[] | null>({
  key: 'guildsState',
  default: null,
});
