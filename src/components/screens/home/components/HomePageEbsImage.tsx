import { FC } from 'react';
import Image from 'next/image';
import ebs1 from 'public/home/ebs1.png';
import ebs2 from 'public/home/ebs2.png';
import ebs3 from 'public/home/ebs3.png';
import ebs4 from 'public/home/ebs4.png';

interface MainPageEbsImageProps {}

const MainPageEbsImage: FC<MainPageEbsImageProps> = () => (
    <div className="grid w-screen grid-cols-1 gap-1 md:grid-cols-2">
        <Image src={ebs1} alt="ebs 자료1" />
        <Image src={ebs2} alt="ebs 자료2" />
        <Image src={ebs3} alt="ebs 자료3" />
        <Image src={ebs4} alt="ebs 자료4" />
    </div>
);

export default MainPageEbsImage;
