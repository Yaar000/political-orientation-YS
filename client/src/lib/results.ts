import { PoliticalResult, Language } from '../types/quiz';

export const results: Record<Language, Record<number, PoliticalResult>> = {
  ko: {
    1: {
      type: "진보적 자유주의자",
      icon: "🌈",
      description: "사회적 약자 보호에 적극적이며 표현의 자유와 다양성을 중시합니다.",
      characteristics: ["사회적 약자 보호", "다양성 추구", "개인의 자유 중시"],
      values: ["평등", "인권", "표현의 자유"]
    },
    2: {
      type: "보수적 자유주의자",
      icon: "💼",
      description: "시장의 자유를 중시하며 질서와 안정을 추구합니다.",
      characteristics: ["시장 경제 선호", "질서 중시", "점진적 변화"],
      values: ["자유시장", "안정", "개인책임"]
    },
    3: {
      type: "진보적 권위주의자",
      icon: "⚖️",
      description: "경제적 평등을 중시하며 표현의 자유에는 일정한 제한이 필요하다고 봅니다.",
      characteristics: ["경제적 평등 추구", "강한 정부 역할", "집단 이익 중시"],
      values: ["경제평등", "사회정의", "집단주의"]
    },
    4: {
      type: "보수적 권위주의자",
      icon: "🛡️",
      description: "강한 국가와 안보를 중시하며 전통적 가치를 강조합니다.",
      characteristics: ["전통 가치 중시", "강한 국가", "사회 질서"],
      values: ["안보", "전통", "질서"]
    },
    5: {
      type: "중도 성향",
      icon: "⚖️",
      description: "상황에 따라 보수와 진보 입장을 넘나들며 실용주의를 중시합니다.",
      characteristics: ["실용적 접근", "상황별 판단", "균형적 시각"],
      values: ["효율성", "현실주의", "타협과 협력"]
    }
  },
  en: {
    1: {
      type: "Progressive Liberal",
      icon: "🌈",
      description: "Actively supports protection of social minorities and values freedom of expression and diversity.",
      characteristics: ["Social minority protection", "Diversity pursuit", "Individual freedom"],
      values: ["Equality", "Human rights", "Freedom of expression"]
    },
    2: {
      type: "Conservative Liberal",
      icon: "💼",
      description: "Values market freedom and pursues order and stability.",
      characteristics: ["Market economy preference", "Order emphasis", "Gradual change"],
      values: ["Free market", "Stability", "Personal responsibility"]
    },
    3: {
      type: "Progressive Authoritarian",
      icon: "⚖️",
      description: "Values economic equality and believes some restrictions on freedom of expression are necessary.",
      characteristics: ["Economic equality pursuit", "Strong government role", "Collective interests"],
      values: ["Economic equality", "Social justice", "Collectivism"]
    },
    4: {
      type: "Conservative Authoritarian",
      icon: "🛡️",
      description: "Values strong national security and emphasizes traditional values.",
      characteristics: ["Traditional values", "Strong state", "Social order"],
      values: ["Security", "Tradition", "Order"]
    },
    5: {
      type: "Moderate",
      icon: "⚖️",
      description: "Navigates between conservative and progressive positions depending on the situation, emphasizing pragmatism.",
      characteristics: ["Pragmatic approach", "Situational judgment", "Balanced perspective"],
      values: ["Efficiency", "Realism", "Compromise and cooperation"]
    }
  },
  ja: {
    1: {
      type: "進歩的リベラル",
      icon: "🌈",
      description: "社会的弱者の保護に積極的で、表現の自由と多様性を重視します。",
      characteristics: ["社会的弱者保護", "多様性追求", "個人の自由重視"],
      values: ["平等", "人権", "表現の自由"]
    },
    2: {
      type: "保守的リベラル",
      icon: "💼",
      description: "市場の自由を重視し、秩序と安定を追求します。",
      characteristics: ["市場経済選好", "秩序重視", "漸進的変化"],
      values: ["自由市場", "安定", "個人責任"]
    },
    3: {
      type: "進歩的権威主義",
      icon: "⚖️",
      description: "経済的平等を重視し、表現の自由には一定の制限が必要だと考えます。",
      characteristics: ["経済的平等追求", "強い政府役割", "集団利益重視"],
      values: ["経済平等", "社会正義", "集団主義"]
    },
    4: {
      type: "保守的権威主義",
      icon: "🛡️",
      description: "強い国家と安保を重視し、伝統的価値を強調します。",
      characteristics: ["伝統価値重視", "強い国家", "社会秩序"],
      values: ["安保", "伝統", "秩序"]
    },
    5: {
      type: "中道志向",
      icon: "⚖️",
      description: "状況に応じて保守と進歩の立場を行き来し、実用主義を重視します。",
      characteristics: ["実用的アプローチ", "状況別判断", "均衡的視点"],
      values: ["効率性", "現実主義", "妥協と協力"]
    }
  }
};

export function calculatePoliticalOrientation(totalScore: number): number {
  // Score ranges for 15 questions (0-30 total possible)
  if (totalScore >= 24) return 1; // Progressive Liberal (80%+)
  if (totalScore >= 18) return 2; // Conservative Liberal (60-79%)
  if (totalScore >= 12) return 3; // Progressive Authoritarian (40-59%)
  if (totalScore >= 6) return 4; // Conservative Authoritarian (20-39%)
  return 5; // Moderate (0-19%)
}
