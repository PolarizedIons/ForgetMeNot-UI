import { ChannelInfo } from './ChannelInfo';

export type GuildInfo = {
    id: string;
    name: string;
    iconUrl: string;
    channels: ChannelInfo[]
}
