export interface UserProfileProps {
  avatar?: string;
  name?: string;
  position?: string;
  location?: string;
  websites?: string[];
  linkedin?: string;
  phone?: string;
  address?: string;
  email?: string;
}

export interface ProfileProps {
  profile: UserProfileProps;
}
