import { UserInfo } from './UserInfo';

export type LoginResponse = {
    accessToken: string;
    user: UserInfo;
}
