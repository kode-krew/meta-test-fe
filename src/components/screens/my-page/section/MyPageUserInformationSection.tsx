import { FC, useCallback, useState } from 'react';
import Modal from '@src/components/common/Modal';
import RoundedButton from '@src/components/common/RoundedButton';
import MyPageInformationEditModalScreen from '../components/MyPageInformationEditModalScreen';
import MyPagePasswordEditModalScreen from '../components/MyPagePasswordEditModalScreen';

interface MyPageUserInformationSectionProps {}

interface MyPageUserInformationSectionModalStateType {
    isOpenEditInformation: boolean;
    isOpenEditPassword: boolean;
}

const MyPageUserInformationSection: FC<MyPageUserInformationSectionProps> = () => {
    const [modalState, setModalState] = useState<MyPageUserInformationSectionModalStateType>({
        isOpenEditInformation: false,
        isOpenEditPassword: false,
    });

    const onClickEditInformationButton = () =>
        setModalState((prev) => ({ ...prev, isOpenEditInformation: true }));

    const onClickEditPasswordButton = () =>
        setModalState((prev) => ({ ...prev, isOpenEditPassword: true }));

    const onClose = () =>
        setModalState((prev) => ({
            ...prev,
            isOpenEditInformation: false,
            isOpenEditPassword: false,
        }));

    return (
        <section className="flex flex-col gap-5">
            <header className="flex  w-full justify-between">
                <section className="flex w-fit w-full items-center">
                    <h1 className="text-xl font-bold">내 정보</h1>
                </section>
                <section className="flex gap-2">
                    <div className="w-max">
                        <RoundedButton variant="secondary" onClick={onClickEditPasswordButton}>
                            비밀번호변경
                        </RoundedButton>
                    </div>
                    <div className="w-max">
                        <RoundedButton variant="primary" onClick={onClickEditInformationButton}>
                            수정
                        </RoundedButton>
                    </div>
                </section>
            </header>
            <main className="flex flex-col gap-4 px-3 py-5 shadow-md">
                <section className="flex">
                    <span className="w-44">이메일</span>
                    <span>test@test.com</span>
                </section>
                <section className="flex">
                    <span className="w-44">닉네임</span>
                    <span>test@test.com</span>
                </section>
            </main>
            {modalState.isOpenEditInformation && (
                <Modal onClose={onClose}>
                    <MyPageInformationEditModalScreen />
                </Modal>
            )}
            {modalState.isOpenEditPassword && (
                <Modal onClose={onClose}>
                    <MyPagePasswordEditModalScreen />
                </Modal>
            )}
        </section>
    );
};

export default MyPageUserInformationSection;
