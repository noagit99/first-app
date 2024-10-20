export interface User {
    access_token(arg0: string, access_token: any): unknown;
    id: string;
    username: string;
    email: string;
    password: string;
  }
  
  export interface LoginData {
    username: string;
    password: string;
  }
  
  export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
  }
  
  export interface UserResponse {
    status: number;
    user: User;
  }
  