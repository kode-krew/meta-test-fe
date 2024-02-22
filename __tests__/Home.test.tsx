import Index from '@src/app/[locale]/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

describe('홈화면 랜더링 테스트', () => {
    let messages: AbstractIntlMessages;

    beforeAll(async () => {
        messages = await import('../messages/ko.json');
    });
    it('홈화면에 h1태그에 문자열 랜더링 여부', () => {
        render(
            <NextIntlClientProvider locale="ko" messages={messages}>
                <Index />
            </NextIntlClientProvider>,
        );
        const h1Text = screen.getByText('메타 인지 테스트');
        expect(h1Text).toBeInTheDocument();
    });
    it('영문 로케일 테스트 locale en 시 영문 텍스트 출력 여부', async () => {
        const enMessages = await import('../messages/en.json');

        render(
            <NextIntlClientProvider locale="en" messages={enMessages}>
                <Index />
            </NextIntlClientProvider>,
        );
        const h1Text = screen.getByText('meta-test');
        expect(h1Text).toBeInTheDocument();
    });
});
