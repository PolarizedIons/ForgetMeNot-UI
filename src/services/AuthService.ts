import { LoginResponse } from '../models/responses/LoginResponse';
import { BaseService } from './BaseService';

export class AuthService extends BaseService {
  public static GetOAuthUrl(): Promise<string> {
    return this.get('/auth/oauth');
  }

  public static Login(code:string) {
    return this.get<LoginResponse>('/auth/callback', { params: { code } })
      .then((res) => {
        BaseService.recreateClient(res.accessToken);
        return res;
      });
  }
}
