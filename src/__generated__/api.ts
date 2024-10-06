/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    '/health-check': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations['HealthCheckController_checkHealth'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/users': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 유저 정보 조회 */
        get: operations['UserController_getUser'];
        put?: never;
        /**
         * 회원가입
         * @description 유저 정보 등록
         */
        post: operations['UserController_createUser'];
        delete?: never;
        options?: never;
        head?: never;
        /**
         * 유저 정보 수정
         * @description
         */
        patch: operations['UserController_updateUser'];
        trace?: never;
    };
    '/users/test': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 유저 테스트 리스트 정보 조회 */
        get: operations['UserController_geteUserTestList'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/users/test/{id}': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 유저 테스트 세부 정보 조회 */
        get: operations['UserController_geteUserTest'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/auth/token': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 로그인
         * @description 토큰 발급
         */
        post: operations['AuthController_createToken'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/auth/token/refresh': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 토큰 재발급
         * @description 토큰 재발급
         */
        post: operations['AuthController_refreshToken'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/auth/login/kakao': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 카카오 소셜로그인
         * @description 기가입 유저는 로그인, 신규 유저는 회원가입 진행
         */
        get: operations['AuthController_loginWithKakao'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/auth/login/google': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 구글 소셜로그인
         * @description 기가입 유저는 로그인, 신규 유저는 회원가입 진행
         */
        get: operations['AuthController_loginWithGoogle'];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    '/auth/password': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * 비밀번호 초기화
         * @description 비밀번호 변경하고 이메일로 전송합니다.
         */
        patch: operations['AuthController_updateUserPassword'];
        trace?: never;
    };
    '/auth/email-verification': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 이메일 인증 요청
         * @description 이메일 인증 요청 메일을 발송
         */
        post: operations['AuthController_createEmailVerificaiton'];
        delete?: never;
        options?: never;
        head?: never;
        /**
         * 이메일 인증 검증
         * @description 임시토큰으로 이메일 인증을 검증
         */
        patch: operations['AuthController_updateEmailVerificaiton'];
        trace?: never;
    };
    '/test': {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** 테스트 결과 등록 */
        post: operations['TestController_createUserTest'];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        GetUserInfoResponseDto: {
            /**
             * @description The id of the user
             * @example 422838ab-3a92-4e5f-914c-5eae24249a92
             */
            id: string;
            /**
             * @description The email of the user
             * @example john.doe@example.com
             */
            email: string;
            /**
             * @description The nickname of the user
             * @example JohnDoe
             */
            nickname?: string;
            /**
             * @description The gender of the user
             * @example m
             */
            gender?: string;
            /**
             * @description The age of the user
             * @example 20
             */
            age?: number;
            /**
             * @description 유저 가입 유형(타입)
             * @example NORMAL
             */
            userType: string;
        };
        UnauthorizedError: {
            /** @example [
             *       "No token",
             *       "Invalid token",
             *       "Token expired"
             *     ] */
            message: string[];
            /** @example Unauthorized */
            error: string;
        };
        GetUserInfoNotFoundError: {
            /** @example User does not exist */
            message: string;
            /** @example Not Found */
            error: string;
        };
        CreateUserInfoRequestDto: {
            /**
             * @description id
             * @example 422838ab-3a92-4e5f-914c-5eae24249a92
             */
            id?: string;
            /**
             * @description The email of the user
             * @example john.doe@example.com
             */
            email: string;
            /**
             * @description The password of the user
             * @example Password@1234
             */
            password: string;
            /**
             * @description The nickname of the user
             * @example JohnDoe
             */
            nickname?: string;
            /**
             * @description The gender of the user
             * @example m
             */
            gender?: string;
            /**
             * @description The age of the user
             * @example 20
             */
            age?: number;
        };
        CreateUserInfoResponseDto: {
            /**
             * @description The id of the user
             * @example 422838ab-3a92-4e5f-914c-5eae24249a92
             */
            id: string;
            /**
             * @description The email of the user
             * @example john.doe@example.com
             */
            email: string;
            /**
             * @description The nickname of the user
             * @example JohnDoe
             */
            nickname?: string;
            /**
             * @description The gender of the user
             * @example m
             */
            gender?: string;
            /**
             * @description The age of the user
             * @example 20
             */
            age?: number;
            /**
             * @description 유저 가입 유형(타입)
             * @example NORMAL
             */
            userType: string;
        };
        CreateUserInfoConflictError: {
            /** @example User exists */
            message: string;
            /** @example Conflict */
            error: string;
        };
        UpdateUserInfoRequestDto: {
            /**
             * @description The email of the user
             * @example john.doe@example.com
             */
            email?: string;
            /**
             * @description The nickname of the user
             * @example JohnDoe
             */
            nickname?: string;
            /**
             * @description The new password of the user
             * @example NewPassword@1234
             */
            password?: string;
        };
        UpdateUserInfoResponseDto: {
            /**
             * @description The nickname of the user
             * @example JohnDoe
             */
            nickname?: string;
            /**
             * @description The gender of the user
             * @example m
             */
            gender?: string;
            /**
             * @description The age of the user
             * @example 20
             */
            age?: number;
            /**
             * @description 유저 가입 유형(타입)
             * @example NORMAL
             */
            userType: string;
        };
        Item: {
            /**
             * @description The total words
             * @example [
             *       "애플",
             *       "메타",
             *       "테슬라"
             *     ]
             */
            total_words: string[];
            /**
             * @description The total count
             * @example 3
             */
            total_count: number;
            /**
             * @description The correct words
             * @example [
             *       "애플",
             *       "메타",
             *       "테슬라"
             *     ]
             */
            correct_words: string[];
            /**
             * @description The input words
             * @example [
             *       "애플",
             *       "메타",
             *       "테슬라"
             *     ]
             */
            input_words: string[];
            /**
             * @description The level
             * @enum {string}
             */
            level: 'beginner' | 'intermediate' | 'advanced' | 'all';
            /**
             * @description The expected count
             * @example 1
             */
            expected_count: number;
            /**
             * @description The category
             * @example test
             */
            category: string;
            /**
             * @description The score
             * @example 0
             */
            score: number;
            /**
             * @description The creation date
             * @example 2024-03-30T01:44:00.232Z
             */
            createdAt: string;
            /**
             * @description The ID
             * @example 20407a4c-2d79-4dd8-bd17-9271a367e96c
             */
            id: string;
            /**
             * @description The SortKey
             * @example Test_beginner_2024-03-30T01:44:00.232Z
             */
            sort_key: string;
        };
        GetUserTestListResponseDto: {
            /** @description The list of items */
            items: components['schemas']['Item'][];
            /**
             * @description The count of items
             * @example 1
             */
            count: number;
            /**
             * @description The last evaluated key for pagination
             * @example eyJJZCI6IjIwNDA3YTRjLTJkNzktNGRkOC1iZDE3LTkyNzFhMzY3ZTk2YyIsIlNvcnRLZXkiOiJUZXN0IzIwMjQtMDMtMzBUMDE6NDQ6MDAuMjMyWiJ9
             */
            lastEvaluatedKey?: string;
        };
        GetUserTestListRequestQueryBadRequestError: {
            /** @example [
             *       "limit must not be greater than 30",
             *       "limit must not be less than 1",
             *       "limit must be an integer number",
             *       "order must be one of the following values: desc, asc",
             *       "level must be one of the following values: beginner, intermediate, advanced, all"
             *     ] */
            message: string[];
            /** @example Bad Request */
            error: string;
        };
        GetUserTestResponseDto: {
            /**
             * @description The id of the user
             * @example 422838ab-3a92-4e5f-914c-5eae24249a92
             */
            id: string;
            /**
             * @description The sort key of the test
             * @example Test_beginner_2024-04-20T01:19:42.998Z
             */
            sort_key: string;
            /**
             * @description level
             * @enum {string}
             */
            level: 'beginner' | 'intermediate' | 'advanced' | 'all';
            /**
             * @description score
             * @example 0.5
             */
            score: number;
            /**
             * @description total_count
             * @example 10
             */
            total_count: number;
            /**
             * @description expected_count
             * @example 5
             */
            expected_count: number;
            /**
             * @description expected_count
             * @example 5
             */
            correct_count: number;
            /**
             * @description An array of total words for the test.
             * @example [
             *       "word1",
             *       "word2",
             *       "word3",
             *       "word4",
             *       "word5"
             *     ]
             */
            total_words: string[];
            /**
             * @description An array of input words for the test.
             * @example [
             *       "word1",
             *       "word2"
             *     ]
             */
            input_words: string[];
            /**
             * @description An array of correct words for the test.
             * @example [
             *       "word1"
             *     ]
             */
            correct_words: string[];
        };
        GetUserTestRequestQueryBadRequestError: {
            /** @example [
             *       "sort_key must be a string"
             *     ] */
            message: string[];
            /** @example Bad Request */
            error: string;
        };
        GetUserTestNotFoundError: {
            /** @example User test does not exist */
            message: string;
            /** @example Not Found */
            error: string;
        };
        CreateTokenRequestDto: {
            /**
             * @description The email of the user
             * @example john.doe@example.com
             */
            email: string;
            /**
             * @description The password of the user
             * @example Password@1234
             */
            password: string;
        };
        CreateTokenResponseDto: {
            /**
             * @description access token
             * @example valid.access.token
             */
            access_token: string;
            /**
             * @description refresh token
             * @example valid.refresh.token
             */
            refresh_token: string;
        };
        CreateTokenRequestBodyError: {
            /** @example [
             *       "email should not be empty",
             *       "email must be an email",
             *       "password must be a string",
             *       "password must be longer than or equal to 8 characters"
             *     ] */
            message: string[];
            /** @example Bad Request */
            error: string;
        };
        RefreshTokenRequestDto: {
            /**
             * @description refresh token
             * @example valid.refresh.token
             */
            refresh_token: string;
        };
        RefreshTokenResponseDto: {
            /**
             * @description access token
             * @example valid.access.token
             */
            access_token: string;
            /**
             * @description refresh token
             * @example valid.refresh.token
             */
            refresh_token: string;
        };
        RefreshTokenRequestBodyError: {
            /** @example [
             *       "refresh_token must be a string",
             *       "refresh_token should not be empty"
             *     ] */
            message: string[];
            /** @example Bad Request */
            error: string;
        };
        ResetPasswordRequestDto: {
            /**
             * @description The email of the user
             * @example john.doe@example.com
             */
            email: string;
        };
        ResetPasswordRequestBodyError: {
            /** @example [
             *       "email should not be empty",
             *       "email must be an email"
             *     ] */
            message: string[];
            /** @example Bad Request */
            error: string;
        };
        EmailVerificationRequestDto: {
            /**
             * @description The email of the user
             * @example john.doe@example.com
             */
            email: string;
        };
        EmailVerificationResponseDto: {
            /** @example e4e74363-c3ed-45fb-ba68-faad0ef45ab3 */
            request_id: string;
        };
        EmailVerificationRequestBodyError: {
            /** @example [
             *       "email should not be empty",
             *       "email must be an email"
             *     ] */
            message: string[];
            /** @example Bad Request */
            error: string;
        };
        UpdateEmailVerificationRequestDto: {
            /**
             * @description request id
             * @example e4e74363-c3ed-45fb-ba68-faad0ef45ab3
             */
            request_id: string;
            /**
             * @description auth code
             * @example 1234
             */
            code: number;
        };
        UpdateEmailVerificationRequestBodyError: {
            /** @example [
             *       "request_id must be a string",
             *       "request_id should not be empty",
             *       "code must be a number conforming to the specified constraints",
             *       "code should not be empty"
             *     ] */
            message: string[];
            /** @example Bad Request */
            error: string;
        };
        CreateTestRequestDto: {
            /**
             * @description id
             * @example 422838ab-3a92-4e5f-914c-5eae24249a92
             */
            id: string;
            /**
             * @description level
             * @enum {string}
             */
            level: 'beginner' | 'intermediate' | 'advanced' | 'all';
            /**
             * @description total_count
             * @example 10
             */
            total_count: number;
            /**
             * @description expected_count
             * @example 5
             */
            expected_count: number;
            /**
             * @description An array of total words for the test.
             * @example [
             *       "word1",
             *       "word2",
             *       "word3",
             *       "word4",
             *       "word5"
             *     ]
             */
            total_words: string[];
            /**
             * @description An array of input words for the test.
             * @example [
             *       "word1",
             *       "word2"
             *     ]
             */
            input_words: string[];
        };
        CreateTestResponseDto: {
            /**
             * @description The id of the user
             * @example 422838ab-3a92-4e5f-914c-5eae24249a92
             */
            id: string;
            /**
             * @description The sort key of the test
             * @example Test_beginner_2024-04-20T01:19:42.998Z
             */
            sort_key: string;
        };
        CreateTestRequestBodyBadRequestError: {
            /** @example [
             *       "level must be one of the following values: beginner, intermediate, advanced, all",
             *       "level must be a string",
             *       "total_count must not be greater than 30",
             *       "total_count must not be less than 1",
             *       "total_count must be an integer number",
             *       "expected_count must not be greater than 30",
             *       "expected_count must not be less than 0",
             *       "expected_count must be an integer number",
             *       "each value in total_words must be a string",
             *       "total_words must be an array",
             *       "each value in input_words must be a string",
             *       "input_words must be an array"
             *     ] */
            message: string[];
            /** @example Bad Request */
            error: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    HealthCheckController_checkHealth: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_getUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['GetUserInfoResponseDto'];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['UnauthorizedError'];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['GetUserInfoNotFoundError'];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_createUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateUserInfoRequestDto'];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['CreateUserInfoResponseDto'];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': unknown;
                };
            };
            /** @description User exists */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['CreateUserInfoConflictError'];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_updateUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['UpdateUserInfoRequestDto'];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['UpdateUserInfoResponseDto'];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': unknown;
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['UnauthorizedError'];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_geteUserTestList: {
        parameters: {
            query: {
                /**
                 * @description limit, minimum: 1
                 * @example 10
                 */
                limit: number;
                /** @description order by created_at */
                order?: 'desc' | 'asc';
                /** @description filter by level */
                level?: 'beginner' | 'intermediate' | 'advanced' | 'all';
                /**
                 * @description Base64 encoded startKey
                 * @example eyJJZCI6IjIwNDA3YTRjLTJkNzktNGRkOC1iZDE3LTkyNzFhMzY3ZTk2YyIsIlNvcnRLZXkiOiJUZXN0IzIwMjQtMDMtMzBUMDE6NDQ6MTYuMDQ3WiJ9
                 */
                startKey?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['GetUserTestListResponseDto'];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['GetUserTestListRequestQueryBadRequestError'];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['UnauthorizedError'];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_geteUserTest: {
        parameters: {
            query: {
                /**
                 * @description The sort key of the test
                 * @example Test_advanced_2024-04-20T01:19:42.998Z
                 */
                sort_key: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['GetUserTestResponseDto'];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['GetUserTestRequestQueryBadRequestError'];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['UnauthorizedError'];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['GetUserTestNotFoundError'];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_createToken: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateTokenRequestDto'];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['CreateTokenResponseDto'];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['CreateTokenRequestBodyError'];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': unknown;
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_refreshToken: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['RefreshTokenRequestDto'];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['RefreshTokenResponseDto'];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['RefreshTokenRequestBodyError'];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': unknown;
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_loginWithKakao: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_loginWithGoogle: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_updateUserPassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['ResetPasswordRequestDto'];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['ResetPasswordRequestBodyError'];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': unknown;
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_createEmailVerificaiton: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['EmailVerificationRequestDto'];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['EmailVerificationResponseDto'];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['EmailVerificationRequestBodyError'];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthController_updateEmailVerificaiton: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['UpdateEmailVerificationRequestDto'];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['UpdateEmailVerificationRequestBodyError'];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': unknown;
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TestController_createUserTest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                'application/json': components['schemas']['CreateTestRequestDto'];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['CreateTestResponseDto'];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    'application/json': components['schemas']['CreateTestRequestBodyBadRequestError'];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}