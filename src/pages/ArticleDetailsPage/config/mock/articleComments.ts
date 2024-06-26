import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/images/storybook.jpg';
import { ArticleCommentsSchema } from '../../model/types/ArticleCommentsSchema';

export const articleComments: ArticleCommentsSchema = {
    ids: ['1', '2'],
    isLoading: false,
    entities: {
        1: {
            id: '1',
            text: 'Some comment text',
            articleId: '1',
            profileId: '1',
            profile: {
                id: '1',
                first: 'Тимур',
                lastname: 'Ульби',
                username: 'admin',
                age: 22,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                avatar: AvatarImg,
                email: 'adf@azdaf.ru',
                phone: '13131321321321',
            },
        },
        2: {
            id: '2',
            text: 'Some comment text',
            articleId: '1',
            profileId: '2',
            profile: {
                id: '2',
                first: 'Иван',
                lastname: 'Иванов',
                username: 'user',
                age: 22,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                avatar: AvatarImg,
                email: 'adf@azdkaf.ru',
                phone: '13131321321321',
            },
        },
    },
};
