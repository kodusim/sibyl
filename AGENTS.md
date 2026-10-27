# Sibyl 에이전트 운영 규칙

## 제품의 기준

설화보살은 사용자가 고민을 먼저 설명하지 않아도, 질문에 대한 답변으로 마음과 고민을 짚고 마지막에 무당처럼 풀이와 조언을 제공하는 AI 점사 서비스다. 사용자가 명시했듯 게임이 아니다. 아키네이터는 내부 질문·추론 방식의 참고일 뿐 서비스의 정체성이 아니다. 실제 독심술이나 초자연적 능력을 주장하지 않는다.

기본 점사를 먼저 제공한 뒤 한마디 조언(짧은 광고), 선택 풀이(영상 광고), 상세 점사(유료 결제)를 제안하는 구상이다. 광고 길이·형식과 유료 제공 방식은 플랫폼 검증 전이며 확정 지원으로 표현하지 않는다. 서비스명은 '설화보살', 소개 문구는 '마음을 짚는 AI 점집'으로 확정했다. 저장소와 기술 식별자는 현재 sibyl이다.

현재 앱은 초기 상담 데모다. 목표 제품의 추론 기능은 아직 구현되지 않았다. 계획·가설·구현·측정 결과를 명확히 구분한다.

## 조직과 위임

사용자가 승인한 일곱 팀으로 운영한다. 루트 에이전트는 총괄을 맡아 필요한 담당 에이전트에게 작업을 위임한다. 모든 팀을 매번 실행할 필요는 없다. 동시 실행 한도를 지키며 묶음으로 진행한다. 대표인 사용자가 제품 방향, 사업상 주요 결정, 출시를 결정한다.

| 담당 | 역할 파일 | 초기 산출물 |
| --- | --- | --- |
| product_research | agents/product-research.md | docs/team-deliverables/product-research.md |
| inference_data | agents/inference-data.md | docs/team-deliverables/inference-data.md |
| character_content | agents/character-content.md | docs/team-deliverables/character-content.md |
| engineering | agents/engineering.md | docs/team-deliverables/engineering.md |
| quality_trust | agents/quality-trust.md | docs/team-deliverables/quality-trust.md |
| growth_business | agents/growth-business.md | docs/team-deliverables/growth-business.md |
| apps_in_toss | agents/apps-in-toss.md | docs/team-deliverables/apps-in-toss.md |

역할 파일은 재사용 가능한 작업 지침이다. 별도 실행 서비스나 상시 가동 프로세스가 아니다. 총괄은 위임할 때 해당 역할 파일, 작업 목적, 소유 파일, 완료 기준을 전달한다.

## 협업

- 작업 시작 전 관련 역할과 공통 제품 기준을 읽는다.
- 같은 파일을 두 에이전트에게 동시에 맡기지 않는다. 팀 간 변경 제안은 총괄에게 전달한다.
- 각 결과에 산출물, 근거/가설, 검증 방법, 미해결 사항, 다음 담당을 적는다.
- 추론팀은 질문 의미와 후보 데이터를, 캐릭터팀은 의미를 보존한 표현을 소유한다.
- 품질팀은 구현·콘텐츠 제작과 독립적으로 평가한다. 합성 테스트 결과를 고객 검증으로 보고하지 않는다.
- 사용자 고민·답변 원문을 기본 분석 로그로 수집하지 않는다. 비밀키는 서버에서만 다룬다.
- 외부 연락, 광고 집행, 결제, 배포는 별도 작업 범위를 확인한다. 기존 사용자 승인은 존중한다.
- 새로운 의존성과 현재 플랫폼 제약은 공식 문서 또는 설치된 패키지로 확인한다.
- 앱인토스 전문팀은 등록·심사·비게임 UX·광고·결제·콘솔 기능을 공식 출처로 검토한다. 등록 성공을 출시 승인이나 시장성 입증으로 보고하지 않는다.

## 완료 기준

문서 작업은 용어·팀 간 인터페이스·구현 여부의 일관성을 검토한다. 코드 변경은 관련 lint/build와 필요한 동작 검증을 수행한다. 원격 반영 여부를 정확히 보고한다.
