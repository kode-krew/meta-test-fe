import { FC, useCallback } from 'react';
import SelectBox, { SelectBoxOptionType } from '@src/components/common/SelectBox';
import HomeBasicLoginSection from '@src/components/screens/home/components/login/HomeBasicLoginSection';
import HomeLoginModalScreen from '@src/components/screens/home/components/login/HomeLoginModalScreen';
import useLogin from '@src/hooks/useLogin';
import { ModalService } from '@src/service/ModalService';
import { useRouter } from 'next/navigation';
import QuizResultBarChart from './QuizResultBarChart';

interface QuizResultHistoryGraphCardProps {}

const options: SelectBoxOptionType[] = [{ id: 'all', label: '전체' }];

const QuizResultHistoryGraphCard: FC<QuizResultHistoryGraphCardProps> = () => {
    const { push } = useRouter();
    const modalService = ModalService.getInstance();
    const { isLogin, setIsLogin } = useLogin();

    const onSuccessLogin = useCallback(() => {
        setIsLogin(true);
    }, [setIsLogin]);

    const onClickLoginButton = () => {
        modalService.openModal(<HomeLoginModalScreen onSuccessLogin={onSuccessLogin} />);
    };

    return (
        <section className="relative mt-3 w-full rounded-md border border-none p-5 shadow-md">
            {!isLogin && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <button
                        onClick={onClickLoginButton}
                        className="cursor-pointer rounded-3xl bg-gray-500 px-4 py-2 text-white"
                    >
                        로그인하고 내 기록 확인하기
                    </button>
                </div>
            )}
            <div className={`${isLogin ? '' : 'pointer-events-none opacity-50'}`}>
                <article className="flex w-full justify-between">
                    <h3 className="w-full">테스트 점수 기록</h3>
                    <div className="w-36">
                        <SelectBox
                            options={options}
                            onOptionChange={() => {}}
                            selectedOption="전체"
                        />
                    </div>
                </article>
                <section className="h-80 w-full">
                    <QuizResultBarChart />
                </section>
            </div>
        </section>
    );
};

export default QuizResultHistoryGraphCard;
