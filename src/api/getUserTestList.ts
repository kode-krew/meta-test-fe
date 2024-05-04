import defaultRequest from '@src/lib/axios/defaultRequest';
import { GetUserTestResponse, QuizTestLevel } from '@src/types/api/test';
import { InfinitePaginationDataType } from '@src/types/common/InfinitePaginationType';

export const API_GET_USER_TEST_LIST = '/user/test';

export interface GetUserTestListParameter {
    limit: number;
    order?: 'desc' | 'asc';
    level?: QuizTestLevel;
    startKey?: string;
}

export const getUserTestList = async (params: GetUserTestListParameter) => {
    const { data } = await defaultRequest.get<
        InfinitePaginationDataType<'items', GetUserTestResponse>
    >(API_GET_USER_TEST_LIST, {
        params,
    });

    return data;
};
