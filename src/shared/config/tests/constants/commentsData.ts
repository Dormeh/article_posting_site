import AvatarImg from 'shared/assets/images/storybook.jpg';

export const commentsData = [
    {
        profile: {
            id: '1',
            first: 'Тимур',
            lastname: 'Ульби',
            username: 'admin',
            age: 22,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            avatar: AvatarImg,
            email: 'adf@azdaf.ru',
            phone: '13131321321321',
        },
        id: '1',
        text: 'Some comment text',
        profileId: '1',
        articleId: '1',
    },
    {
        profile: {
            id: '2',
            first: 'Иван',
            lastname: 'Иванов',
            username: 'user',
            age: 22,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            avatar: AvatarImg,
            email: 'adf@azdkaf.ru',
            phone: '13131321321321',
        },
        id: '2',
        text: 'Some comment text',
        profileId: '2',
        articleId: '1',
    },
];
