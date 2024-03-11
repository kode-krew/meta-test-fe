import { FC } from 'react';
import CommonInput from '@src/components/common/CommonInput';
import { useForm } from 'react-hook-form';
import QuizAnswerSortingButton from './QuizAnswerSortingButton';
import QuizAnswerSubmitButton from './QuizAnswerSubmitButton';

interface QuizAnswerFormProps {}

const QuizAnswerForm: FC<QuizAnswerFormProps> = () => {
    const { register } = useForm();

    return (
        <form className="flex h-full max-h-screen w-full  flex-col justify-between">
            <div>
                <CommonInput placeholder="단어 입력후 엔터를 쳐 주세요." variant="secondary" />
                <section className="mt-5 flex w-full flex-wrap gap-5">
                    <QuizAnswerSortingButton word="sssss" />
                    <QuizAnswerSortingButton word="sssssㄴㅇㄹㄴㅇㄹ" />
                    <QuizAnswerSortingButton word="sssssㄹㅇㄴㄹ" />
                    <QuizAnswerSortingButton word="sssssㅇㅇㅇ" />
                    <QuizAnswerSortingButton word="sssssㅇㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄹ" />
                    <QuizAnswerSortingButton word="sssssㄴㅇㄹㅇㄹ" />
                    <QuizAnswerSortingButton word="sssㄹㅇㅇㄴㄹㅇㄴㄹss" />
                    <QuizAnswerSortingButton word="sssss" />
                    <QuizAnswerSortingButton word="sssssㅇㄹ" />
                    <QuizAnswerSortingButton word="sssss" />
                    <QuizAnswerSortingButton word="ssssㅇㄹㅇㄹs" />
                    <QuizAnswerSortingButton word="sssssㅇㄹㄹ" />
                    <QuizAnswerSortingButton word="ssssㅇㄴㄹㅇs" />
                    <QuizAnswerSortingButton word="sssㄹㅇㄴㄹㄴㅇss" />
                    <QuizAnswerSortingButton word="ㄹㅇㄴㅇㄹㅇㄴㄹㅇㄹ" />
                    <QuizAnswerSortingButton word="sssss" />
                    <QuizAnswerSortingButton word="sssssㅇㄴㄹㅇㄹㅇㄴㄹㅇㄴㄹ" />
                </section>
            </div>
            <QuizAnswerSubmitButton />
        </form>
    );
};

export default QuizAnswerForm;
