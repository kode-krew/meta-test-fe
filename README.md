# nextjs 기본 템플릿 셋팅.

## 1. 기본 셋팅 구조.

-   pnpm create-next-app --ts 기반 템플릿 설치.
-   nextjs 14 버전 이후 app-router 기반 dir 구조.
-   eslint
    -   아래 확장 툴 기반 추천 lint 작성 원칙(airbnb, nextjs, typescript 기준) "plugin:@next/next/recommended", "plugin:@typescript-eslint/recommended", "airbnb", "airbnb/hooks", "airbnb-typescript", "prettier"
-   husky
    -   eslint 커밋 시 lint 확인 후, 커밋 처리(팀 컨벤션 및 린트 방지용)
-   nvmrc
    -   node 버전 관리 용으로, 해당 프로젝트 버전 일관성 용도.
-   pnpm
    -   패키지 매니저로, 기존 npm yarn-classic에 비해 불 필요한 유령 의존성 제거 및 성능 개선.
    -   추후, turbo-repo 확장 시 활용 용도로 적합(yarn-berry는 현재 지원x).

## 2. 프로젝트 기본 실행 방법.

-   script 설명

아래는 주어진 패키지 스크립트를 pnpm을 기준으로 설명한 마크다운입니다:

## 실행 스크립트

-   **`pnpm dev`**: 개발 서버를 시작하여 프로젝트를 개발할 수 있습니다.
-   **`pnpm build`**: 프로덕션을 위한 최적화된 빌드를 생성합니다.
-   **`pnpm start`**: 빌드된 앱을 서빙하고 프로덕션 환경에서 실행합니다.
-   **`pnpm lint`**: 코드를 lint하여 코드 품질을 향상시킵니다.
-   **`pnpm lint-staged`**: lint-staged를 실행하여 스테이징된 파일에 대해 lint를 실행합니다.

## 초기 설정

1. **프로젝트 클론 후**: 이 패키지를 클론한 후에는 다음 명령을 실행하여 필요한 종속성을 설치합니다:

    ```bash
    pnpm install
    ```

2. **사전 설치 작업**: 프로젝트에 필요한 사전 설치 작업을 수행하기 위해 다음 명령을 실행합니다:

    ```bash
    pnpm preinstall
    ```

3. **Husky 설정**: Git 훅을 활성화하려면 다음 명령을 실행하여 Husky를 설치하고 설정합니다:

    ```bash
    pnpm run prepare
    ```

4. **프로젝트에 Husky 설치 확인**: Husky를 사용하여 Git 훅을 관리하려면 다음 명령을 실행하여 Husky를 프로젝트에 설치합니다:
    ```bash
    pnpm run postinstall
    ```

---

이렇게 하면 프로젝트를 클론한 후 필요한 초기 설정을 완료하여 실행할 준비가 됩니다.
