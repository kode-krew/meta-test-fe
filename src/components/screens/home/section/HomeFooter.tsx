import { FC } from 'react';

interface HomeFooterProps {}

const HomeFooter: FC<HomeFooterProps> = () => (
    <section className="mt-10  flex  h-24 w-screen flex-row-reverse pb-5 pl-3 pr-3 pt-2 shadow-inner">
        <div className="w-max">
            <p className="text-2xl underline decoration-gray-500 decoration-solid decoration-2	 underline-offset-4">
                Contact
            </p>
            <div className="ga flex gap-2">
                <p className="mt-3">Email:</p>
                <p
                    className="
            mt-3
            underline decoration-gray-500 decoration-solid decoration-2	 underline-offset-4"
                >
                    kodekrew20@gmail.com
                </p>
            </div>
        </div>
    </section>
);

export default HomeFooter;
