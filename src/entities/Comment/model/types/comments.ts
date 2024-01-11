import { User } from 'entities/User';
import { Profile } from 'entities/Profile';

export interface Comment {
    id: string;
    articleId: string;
    profileId: string;
    profile: Profile;
    text: string;
}
