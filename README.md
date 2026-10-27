# sibyl · 시빌

앱인토스에서 만드는 AI 점사 서비스. 사용자가 고민을 먼저 설명하지 않아도, 질문에 대한 답변으로 마음을 짚고 무당처럼 풀이와 조언을 제공하는 경험을 목표로 합니다.

사주나 점집을 찾는 경험에 가깝습니다. 아키네이터는 내부 추론 방식의 참고이며 게임으로 기획하지 않습니다. 브랜드는 ‘신통 — AI 점집’이 후보이고 기술 식별자는 `sibyl`입니다.

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

아래 화면은 제품 방향을 정하기 전에 만든 초기 상담 데모입니다. 목표인 질문 기반 점사와 광고·결제는 아직 구현되지 않았습니다.

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

1. 앱인토스 전문팀과 등록·심사·광고·결제 제약 검토
2. 후보 데이터와 질문 선택·답변 반영·점사 풀이 흐름 설계
3. 질문 의미를 보존하는 무당 말투와 모바일 점사 화면 연결
4. 기본 점사 이후 한마디 조언·선택 풀이·상세 점사 구체화

## 에이전트 조직

총괄은 [AGENTS.md](AGENTS.md)에 따라 제품·고객연구, 추론·데이터, 캐릭터·콘텐츠, 제품개발, 품질·신뢰, 성장·사업, 앱인토스 전문팀의 일곱 담당을 운영합니다.

역할 지침은 `agents/`, 팀별 초기 설계는 `docs/team-deliverables/`에 저장합니다. 운영 현황과 다음 작업은 [팀 운영 문서](docs/team-operations.md)를 확인하세요.

콘솔의 앱 식별자를 `apps-in-toss.config.ts`의 `appName`과 맞춰야 합니다. 현재 값은 `sibyl`입니다. 콘솔 등록과 배포는 별도 작업입니다.

공식 연동 가이드: https://developers-apps-in-toss.toss.im/ai-vibe-coding/tutorials/webview.md

원격 저장소: https://github.com/kodusim/sibyl.git
