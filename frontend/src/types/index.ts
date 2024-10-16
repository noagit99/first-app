export interface User {
    id: string;
    username: string;
    email: string;
    // Include other user properties as needed
  }
  
  export interface LoginData {
    username: string;
    password: string;
  }
  
  export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
    // Add other required fields as necessary
  }
  
  export interface UserResponse {
    status: number;
    user: User;
  }
  