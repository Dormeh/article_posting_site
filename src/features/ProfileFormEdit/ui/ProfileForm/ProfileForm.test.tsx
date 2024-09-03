import { screen } from '@testing-library/react';
import {
    componentRender,
    componentRenderOptions,
} from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@testing-library/user-event';
import { Profile } from 'entities/Profile';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import {
    profileErrorsArr,
    testProfileAnotherData,
    testProfileDataWithoutImg,
    testProfileWrongData,
} from '../../model/services/updateProfileData/profileData';
import { ProfileForm } from './ProfileForm';

const options: componentRenderOptions = {
    initialState: {
        profile: {
            data: testProfileDataWithoutImg,
            readonly: true,
            isLoading: false,
            error: undefined,
        },
        user: {
            authData: {
                id: '1',
                profileId: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};
describe('ProfileForm', () => {
    beforeEach(() => componentRender(<ProfileForm id="1" />, options));
    test('cancel button will present after click edit button', async () => {
        const editButton = screen.getByTestId('Button.edit');
        await userEvent.click(editButton);
        expect(screen.getByTestId('Button.cancel')).toBeInTheDocument();
    });
    test('cancel button will disappear after click it', async () => {
        const editButton = screen.getByTestId('Button.edit');
        await userEvent.click(editButton);
        const cancelButton = screen.getByTestId('Button.cancel');
        await userEvent.click(cancelButton);
        // screen.debug();
        expect(screen.queryByTestId('Button.cancel')).not.toBeInTheDocument();
    });
    test('When canceled, the values should return to their previous state.', async () => {
        const editButton = screen.getByTestId('Button.edit');
        await userEvent.click(editButton);
        const inputsArr = (await screen.findAllByTestId('Input.input', {
            exact: false,
        })) as HTMLInputElement[];
        console.log(
            inputsArr.map((input) => `${input.name}: ${input.value}`),
            'до отчистки',
        );
        // await Promise.all(inputsArr.map((input) => userEvent.clear(input))); // jest выдает 3 ошибки на то что нет await перед асинхронным действием
        // eslint-disable-next-line no-restricted-syntax
        for await (const input of inputsArr) {
            await userEvent.clear(input);
        }
        // eslint-disable-next-line no-restricted-syntax
        for await (const input of inputsArr) {
            const key = input.name as keyof typeof testProfileAnotherData;
            await userEvent.type(input, `${testProfileAnotherData[key]}`);
        }
        console.log(
            inputsArr.map((input) => `${input.name}: ${input.value}`),
            'после добавления новых данных',
        );
        const cancelButton = screen.getByTestId('Button.cancel');
        await userEvent.click(cancelButton);
        console.log(
            inputsArr.map((input) => `${input.name}: ${input.value}`),
            'после отмены',
        );
        // eslint-disable-next-line no-restricted-syntax
        for (const input of inputsArr) {
            expect(input).toHaveValue(
                `${testProfileDataWithoutImg[input.name as keyof typeof testProfileDataWithoutImg]}`,
                // привел к строке из-за type="tel" тест определяет что данные это строка
            );
        }
    });
    test('When entering invalid values, an error should appear in each input.', async () => {
        const editButton = screen.getByTestId('Button.edit');
        await userEvent.click(editButton);
        const inputsArr = (await screen.findAllByTestId('Input.input', {
            exact: false,
        })) as HTMLInputElement[];
        // eslint-disable-next-line no-restricted-syntax
        for await (const input of inputsArr) {
            await userEvent.clear(input);
        }
        // eslint-disable-next-line no-restricted-syntax
        for await (const input of inputsArr) {
            const key = input.name as keyof typeof testProfileWrongData;
            await userEvent.type(input, testProfileWrongData[key]);
        }
        console.log(
            inputsArr.map((input) => `${input.name}: ${input.value}`),
            'введенные некорректные данные',
        );
        const errorsArr = await screen.findAllByTestId('Input.error', {
            exact: false,
        });
        console.log(
            errorsArr.map((error, i) => `${inputsArr[i].name}: ${error.textContent}`),
            'список ошибок',
        );
        expect(errorsArr).toHaveLength(7);
        // eslint-disable-next-line no-restricted-syntax
        for (const error of errorsArr) {
            const key = error.dataset.testid?.replace(
                'Input.error.',
                '',
            ) as keyof typeof profileErrorsArr;
            expect(error.textContent).toEqual(profileErrorsArr[key]);
        }
    });
    test('When click the save button, a PUT request with new data should be sent', async () => {
        const mockPutReq = jest.spyOn($api, 'put');

        const editButton = screen.getByTestId('Button.edit');
        await userEvent.click(editButton);
        const inputsArr = (await screen.findAllByTestId('Input.input', {
            exact: false,
        })) as HTMLInputElement[];
        // eslint-disable-next-line no-restricted-syntax
        for await (const input of inputsArr) {
            await userEvent.clear(input);
        }
        // eslint-disable-next-line no-restricted-syntax
        for await (const input of inputsArr) {
            const key = input.name as keyof typeof testProfileAnotherData;
            await userEvent.type(input, `${testProfileAnotherData[key]}`);
        }
        const saveButton = screen.getByTestId('Button.save');
        await userEvent.click(saveButton);
        expect(mockPutReq).toHaveBeenCalledWith('/profiles/1', testProfileAnotherData);
    });
});
