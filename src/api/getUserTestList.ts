import defaultRequest from '@src/lib/axios/defaultRequest';
import variableAssignment from '@src/lib/axios/variableAssignment';
import { GetUserTestResponse, QuizTestLevel } from '@src/types/api/test';
import { InfinitePaginationDataType } from '@src/types/common/InfinitePaginationType';
import { ApiHandler } from '@src/types/common/api';

export interface GetUserTestListParameter {
    id: string;
    limit: number;
    order?: 'desc' | 'asc';
    level?: QuizTestLevel;
    startKey?: string;
}
export const API_GET_USER_TEST_LIST = `/users/test/{{id}}`;

export const getUserTestList: ApiHandler<
    InfinitePaginationDataType<'items', GetUserTestResponse>,
    GetUserTestListParameter
> = async ({ id, ...params }) => {
    const { data } = await defaultRequest.get(variableAssignment(API_GET_USER_TEST_LIST, { id }), {
        params,
    });

    return data;
};
