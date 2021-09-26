import { atom } from 'recoil';
import { UserInfo } from '../../models/responses/UserInfo';

export const UserState = atom<UserInfo | null>({
  key: 'userState',
  default: null,
});
