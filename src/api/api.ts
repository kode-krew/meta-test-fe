import type { paths } from '@src/__generated__/api';
import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';

export const client = createFetchClient<paths>({
    baseUrl: `${process.env.NEXT_PUBLIC_META_TEST_SERVER_HOST_URL}`,
});

export const $api = createClient(client);
