export class AuthUtils {
  private static authToken = 'accessToken';

    static getAuthToken() {
        // return 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY1MjA3MzE4MywiaWF0IjoxNjUyMDczMTgzfQ.mc370yx5ywCdjNumcFd_5NnaXnFsY1z7kCKg4bevMWU'
        return localStorage.getItem(AuthUtils.authToken);
      }
    
      static setAuthToken(value: any) {
        return localStorage.setItem(AuthUtils.authToken, value);
      }
    
      static removeAuthToken() {
        return localStorage.removeItem(AuthUtils.authToken);
        return localStorage.removeItem('role');
      }
}