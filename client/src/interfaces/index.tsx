export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserState {
  // Use for fetching users
  loadingGetUsers: boolean;
  users: User[];
  errorGetUsers: any;

  // Use for fetching user by email
  loadingGetUserByEmail: boolean;
  userByEmail: User | null;
  errorGetUserByEmail: any;

  // Use for saving or editing user
  loadingSaveUser: boolean;
  savedUser: User | null;
  errorSaveUser: any;

  // Use for deleting user
  loadingDeleteUser: boolean;
  successDeleteUser: any;
  errorDeleteUser: any;
}

export interface PopupFormProps {
  open: boolean;
  title: string;
  children: React.ReactNode
}