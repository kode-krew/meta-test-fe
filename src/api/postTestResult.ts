import defaultRequest from '@src/lib/axios/defaultRequest';
import { QuizTestLevel } from '@src/types/api/test';
import { PostTestResultResponse } from '@src/types/api/tests';
import { ApiHandler } from '../types/common/api';

export interface PostTestResultBody {
    id: string;
    level: QuizTestLevel;
    total_count: number;
    expected_count: number;
    total_words: string[];
    input_words: string[];
}

export const postTestResult: ApiHandler<PostTestResultResponse, PostTestResultBody> = async (
    body,
) => {
    const { data } = await defaultRequest.post('/test', { body });
    return data;
};
