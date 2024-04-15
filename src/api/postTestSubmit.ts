import defaultRequest from '@src/lib/axios/defaultRequest';
import { PostTestResultResponse, QuizDifficulty } from '@src/types/api/tests';
import { ApiHandler } from '@src/types/common/api';

export interface PostTestSubmitBody {
    id?: string;
    level: QuizDifficulty;
    total_count: number;
    expected_count: number;
    total_words: string[];
    input_words: string[];
}

export const postTestSubmit: ApiHandler<PostTestResultResponse, PostTestSubmitBody> = async (
    body,
) => {
    const { data } = await defaultRequest.post('/test', body);
    return data;
};
