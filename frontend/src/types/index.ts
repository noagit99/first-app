export interface User {
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
  