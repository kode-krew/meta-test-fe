import { FC } from 'react';
import HomeIcon from '@src/components/common/Icons/HomeIcon';
import { useRouter } from 'next/navigation';

interface MyPageHeaderSectionProps {}

const MyPageHeaderSection: FC<MyPageHeaderSectionProps> = () => {
    const { replace } = useRouter();
    const onClick = () => {
        replace('/');
    };
    return (
        <section className="relative">
            <div className="flex items-center">
                <div
                    onClick={onClick}
                    className="h-15 w-15 flex cursor-pointer items-center justify-center rounded-md shadow-md"
                >
                    <HomeIcon />
                </div>
                <h1
                    className="-left-5  mr-5
                  flex 
                  w-screen
                  max-w-3xl
                  justify-center
                  text-center text-2xl font-bold 
                  "
                >
                    마이페이지
                </h1>
            </div>
            <hr
                className="absolute -bottom-5  -left-5 h-1 w-screen
            max-w-3xl
            bg-violet-400"
            />
        </section>
    );
};

export default MyPageHeaderSection;
