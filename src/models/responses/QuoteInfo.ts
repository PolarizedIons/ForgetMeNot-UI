import { UserInfo } from './UserInfo';

export type QuoteInfo = {
    id: string;
    createdAt: string;
    quote: string;
    author: UserInfo | null;
    guildId: string;
    channelId: string;
    messageId: string;
}
