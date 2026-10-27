export const topics = ['오늘의 운세', '연애와 인연', '일과 진로', '금전운'] as const
export type Topic = (typeof topics)[number]

const readings: Record<Topic, string> = {
  '오늘의 운세': '잠시 숨을 고르고 마음이 향하는 곳을 살펴보세요. 오늘은 거창한 답보다, 미뤄두었던 작은 일 하나를 마치는 데서 기분 좋은 변화가 시작될 수 있어요.',
  '연애와 인연': '상대의 마음을 짐작하기 전에 내 마음부터 다정하게 들여다보세요. 편안한 순간에 솔직한 한마디를 건네보는 건 어떨까요? 관계의 속도는 서로 함께 정해도 괜찮아요.',
  '일과 진로': '모든 길을 한 번에 정할 필요는 없어요. 궁금했던 일을 작게 경험해 보세요. 오늘의 작은 시도가 나에게 맞는 방향을 발견하는 실마리가 될 수 있어요.',
  '금전운': '마음이 급할수록 잠시 멈춰 지금의 생활을 살펴보세요. 이번 주 지출을 돌아보고 꼭 필요한 것 하나를 골라보는 건 어떨까요? 작은 정리가 마음의 여유를 만들어줄 수 있어요.',
}

// Replace through a server-side AI endpoint when the backend is ready.
export function getDemoReading(topic: Topic): string {
  return readings[topic]
}
