import { GuildInfo } from '../models/responses/GuildInfo';
import { BaseService } from './BaseService';

export class DiscordService extends BaseService {
  public static getGuilds(): Promise<GuildInfo[]> {
    return this.get('/discord/guilds');
  }
}
