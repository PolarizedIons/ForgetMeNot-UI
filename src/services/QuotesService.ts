import { GetQuotesFilter } from '../models/requests/GetQuotesFilter';
import { QuoteInfo } from '../models/responses/QuoteInfo';
import { BaseService } from './BaseService';

export class QuotesService extends BaseService {
  public static getQuotes(guildId: string, filter: GetQuotesFilter): Promise<QuoteInfo[]> {
    return this.get(`/quotes/${guildId}`, { params: filter });
  }
}
