'use client';

import MyPageHeaderSection from '@src/components/screens/my-page/section/MyPageHeaderSection';
import MyPageTestRecordSection from '@src/components/screens/my-page/section/MyPageTestRecordSection';
import MyPageUserInformationSection from '@src/components/screens/my-page/section/MyPageUserInformationSection';

const QuizAnswerPage = () => (
    <div className="flex flex-col gap-10">
        <MyPageHeaderSection />
        <MyPageUserInformationSection />
        <MyPageTestRecordSection />
    </div>
);

export default QuizAnswerPage;
