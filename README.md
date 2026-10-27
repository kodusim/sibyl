# sibyl · 시빌

앱인토스에서 만드는 AI 무당 미니앱. 고민을 편하게 꺼내고, 운세를 통해 자신을 돌아보는 경험을 목표로 합니다.

## 시작하기

Node.js 24 LTS와 npm을 사용합니다.

```powershell
cd sibyl
npm.cmd ci
npm.cmd run dev
```

터미널에 표시되는 로컬 주소를 엽니다. Windows PowerShell에서는 `npm.cmd`를 사용합니다.

## 명령어

- `npm.cmd run dev`: Vite 개발 서버와 앱인토스 개발 도구
- `npm.cmd run lint`: 코드 검사
- `npm.cmd run build`: TypeScript 검사, 웹 빌드, `sibyl.ait` 생성
- `npm.cmd run preview`: 빌드된 웹 화면 확인
- `npm.cmd run deploy`: 앱인토스 업로드 (콘솔 설정과 인증 후 명시적으로 실행)

## 현재 구현

- React + TypeScript + Vite
- 앱인토스 Web Framework SDK 및 개발 도구
- 모바일 첫 화면, 고민 주제 선택, 질문 입력, 주제별 예시 응답
- 질문은 메모리에만 유지하며 새로고침하면 사라집니다.

실제 AI 호출, 사주 계산, 로그인, 저장, 결제는 아직 구현하지 않았습니다. 데모 응답은 주제별 고정 문구이며 질문 내용을 분석하지 않습니다.

## 구조

- `src/App.tsx`: 첫 화면과 상담 데모
- `src/features/reading/demo.ts`: 상담 주제와 예시 응답
- `apps-in-toss.config.ts`: 앱인토스 설정

## 다음 개발

1. 상담 캐릭터와 말투, MVP 범위 확정
2. 서버 AI 엔드포인트와 응답 상태/오류 처리 연결 (비밀키는 프론트엔드에 넣지 않기)
3. TDS 컴포넌트 적용과 앱인토스 실기기 확인
4. 개인정보 처리 및 이용 안내, 출시 심사 준비

콘솔의 앱 식별자를 `apps-in-toss.config.ts`의 `appName`과 맞춰야 합니다. 현재 값은 `sibyl`입니다. 콘솔 등록과 배포는 별도 작업입니다.

공식 연동 가이드: https://developers-apps-in-toss.toss.im/ai-vibe-coding/tutorials/webview.md

원격 저장소: https://github.com/kodusim/sibyl.git
