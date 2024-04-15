export type QuizDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface PostTestResultResponse {
    id: string;
    level: QuizDifficulty;
    score: number;
    total_count: number;
    expected_count: number;
    correct_count: number;
    total_words: string[];
    input_words: string[];
    correct_words: string[];
}
