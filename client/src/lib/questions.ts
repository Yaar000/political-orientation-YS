import { Question, Language } from '../types/quiz';

export const questions: Record<Language, Question[]> = {
  ko: [
    {
      text: "부자들에게 더 높은 세금을 부과하는 것에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "찬성한다. 사회적 불평등을 줄이기 위해 필요하다.", score: 2 },
        { text: "상황에 따라 다르다. 적절한 수준에서 균형을 맞춰야 한다.", score: 1 },
        { text: "반대한다. 개인의 노력으로 번 돈에 과도한 세금을 부과하면 안 된다.", score: 0 }
      ]
    },
    {
      text: "정부의 복지 정책 확대에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "적극 찬성. 어려운 사람들을 도와야 한다.", score: 2 },
        { text: "적절한 수준에서 필요하다.", score: 1 },
        { text: "반대. 개인의 자립을 위해 복지보다 일자리가 우선이다.", score: 0 }
      ]
    },
    {
      text: "동성결혼에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "찬성한다. 개인의 선택을 존중해야 한다.", score: 2 },
        { text: "잘 모르겠다. 더 많은 논의가 필요하다.", score: 1 },
        { text: "반대한다. 전통적인 가족 형태를 지켜야 한다.", score: 0 }
      ]
    },
    {
      text: "환경보호를 위해 경제성장을 일부 포기하는 것에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "찬성한다. 환경이 더 중요하다.", score: 2 },
        { text: "둘 다 중요하다. 균형을 맞춰야 한다.", score: 1 },
        { text: "반대한다. 경제성장이 우선이다.", score: 0 }
      ]
    },
    {
      text: "난민 수용에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "적극 수용해야 한다. 인도주의적 책임이다.", score: 2 },
        { text: "신중하게 검토해서 적절히 수용해야 한다.", score: 1 },
        { text: "반대한다. 우리나라 사람들을 먼저 생각해야 한다.", score: 0 }
      ]
    },
    {
      text: "최저임금 인상에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "크게 올려야 한다. 생활비가 너무 비싸다.", score: 2 },
        { text: "점진적으로 올려야 한다.", score: 1 },
        { text: "신중해야 한다. 일자리가 줄어들 수 있다.", score: 0 }
      ]
    },
    {
      text: "대학교육 무상화에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "찬성한다. 교육 기회를 평등하게 해야 한다.", score: 2 },
        { text: "소득 수준에 따라 지원해야 한다.", score: 1 },
        { text: "반대한다. 개인이 부담해야 한다.", score: 0 }
      ]
    },
    {
      text: "성별 할당제에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "찬성한다. 성평등을 위해 필요하다.", score: 2 },
        { text: "분야에 따라 다르다.", score: 1 },
        { text: "반대한다. 능력으로만 평가해야 한다.", score: 0 }
      ]
    },
    {
      text: "사형제에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "폐지해야 한다. 생명권은 소중하다.", score: 2 },
        { text: "잘 모르겠다. 어려운 문제다.", score: 1 },
        { text: "유지해야 한다. 흉악범은 엄벌해야 한다.", score: 0 }
      ]
    },
    {
      text: "정부의 시장 개입에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "적극 개입해야 한다. 시장만으로는 한계가 있다.", score: 2 },
        { text: "필요에 따라 적절히 개입해야 한다.", score: 1 },
        { text: "최소화해야 한다. 시장에 맡기는 것이 좋다.", score: 0 }
      ]
    },
    {
      text: "군사력 강화에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "반대한다. 평화가 더 중요하다.", score: 2 },
        { text: "적절한 수준을 유지해야 한다.", score: 1 },
        { text: "찬성한다. 강한 국방이 평화를 지킨다.", score: 0 }
      ]
    },
    {
      text: "노동조합의 역할에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "중요하다. 노동자 권익을 보호해야 한다.", score: 2 },
        { text: "필요하지만 적절한 선에서 해야 한다.", score: 1 },
        { text: "경제에 해가 될 수 있다. 제한이 필요하다.", score: 0 }
      ]
    },
    {
      text: "종교의 사회적 역할에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "개인적인 것이다. 사회에 개입하면 안 된다.", score: 2 },
        { text: "적절한 역할은 있다.", score: 1 },
        { text: "중요하다. 도덕적 가치를 제공한다.", score: 0 }
      ]
    },
    {
      text: "다문화 사회에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "환영한다. 다양성이 사회를 풍부하게 한다.", score: 2 },
        { text: "서로 이해하며 함께 살아가면 좋다.", score: 1 },
        { text: "우려된다. 우리 문화를 지켜야 한다.", score: 0 }
      ]
    },
    {
      text: "표현의 자유에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "최대한 보장해야 한다.", score: 2 },
        { text: "다른 사람에게 해가 되지 않는 선에서 보장해야 한다.", score: 1 },
        { text: "사회 질서를 위해 일정한 제한이 필요하다.", score: 0 }
      ]
    },
    {
      text: "기업의 사회적 책임에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "매우 중요하다. 기업도 사회 구성원이다.", score: 2 },
        { text: "어느 정도 필요하다.", score: 1 },
        { text: "이익을 내는 것이 우선이다.", score: 0 }
      ]
    },
    {
      text: "정치인의 과거 행적에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "과거보다 현재와 미래가 중요하다.", score: 2 },
        { text: "참고는 하되, 현재 정책을 우선 봐야 한다.", score: 1 },
        { text: "과거 행적이 매우 중요하다.", score: 0 }
      ]
    },
    {
      text: "청소년의 정치 참여에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "적극 권장해야 한다.", score: 2 },
        { text: "교육을 통해 점진적으로 참여하면 좋다.", score: 1 },
        { text: "성인이 된 후에 참여하는 것이 좋다.", score: 0 }
      ]
    },
    {
      text: "인공지능 기술 발전에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "인간의 일자리를 보호하는 것이 우선이다.", score: 2 },
        { text: "발전과 보호의 균형을 맞춰야 한다.", score: 1 },
        { text: "기술 발전이 우선이다.", score: 0 }
      ]
    },
    {
      text: "언론의 정부 비판에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "적극적으로 해야 한다. 감시 역할이 중요하다.", score: 2 },
        { text: "건설적인 비판이어야 한다.", score: 1 },
        { text: "과도하면 안 된다. 국가 안정이 중요하다.", score: 0 }
      ]
    },
    {
      text: "전통문화 보존에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "시대에 맞게 변화해야 한다.", score: 2 },
        { text: "좋은 것은 보존하고 나쁜 것은 바꿔야 한다.", score: 1 },
        { text: "있는 그대로 보존해야 한다.", score: 0 }
      ]
    },
    {
      text: "개인정보 보호에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "매우 중요하다. 개인의 권리다.", score: 2 },
        { text: "중요하지만 공익을 위해서는 어느 정도 공개할 수 있다.", score: 1 },
        { text: "사회 안전을 위해 필요하면 공개해야 한다.", score: 0 }
      ]
    },
    {
      text: "경제적 불평등에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "심각한 문제다. 정부가 적극 해결해야 한다.", score: 2 },
        { text: "개선이 필요하지만 시간이 걸린다.", score: 1 },
        { text: "어느 정도는 자연스러운 현상이다.", score: 0 }
      ]
    },
    {
      text: "시위와 집회에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "민주주의의 기본 권리다.", score: 2 },
        { text: "평화적으로 하면 괜찮다.", score: 1 },
        { text: "사회 질서를 해치면 안 된다.", score: 0 }
      ]
    },
    {
      text: "새로운 기술의 도입에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "사회적 영향을 충분히 검토해야 한다.", score: 2 },
        { text: "장단점을 고려해서 도입해야 한다.", score: 1 },
        { text: "빠르게 도입해서 경쟁력을 높여야 한다.", score: 0 }
      ]
    },
    {
      text: "국제 관계에서 가장 중요한 것은 무엇이라고 생각하시나요?",
      answers: [
        { text: "인권과 평화", score: 2 },
        { text: "상호 이익과 협력", score: 1 },
        { text: "국가 이익과 안보", score: 0 }
      ]
    },
    {
      text: "교육 제도에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "평등하고 공정해야 한다.", score: 2 },
        { text: "다양성을 인정하되 기본은 갖춰야 한다.", score: 1 },
        { text: "경쟁을 통해 실력을 키워야 한다.", score: 0 }
      ]
    },
    {
      text: "의료보험 제도에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "모든 사람이 무료로 이용할 수 있어야 한다.", score: 2 },
        { text: "기본적인 치료는 보장하되 고급 의료는 별도 부담해야 한다.", score: 1 },
        { text: "개인이 선택해서 가입하는 것이 좋다.", score: 0 }
      ]
    },
    {
      text: "가족의 형태에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "다양한 형태의 가족을 인정해야 한다.", score: 2 },
        { text: "시대에 따라 변화할 수 있다.", score: 1 },
        { text: "전통적인 가족 형태가 바람직하다.", score: 0 }
      ]
    },
    {
      text: "정부의 개인 생활 개입에 대해 어떻게 생각하시나요?",
      answers: [
        { text: "최소화해야 한다. 개인의 자유가 중요하다.", score: 2 },
        { text: "꼭 필요한 경우에만 개입해야 한다.", score: 1 },
        { text: "사회 질서를 위해 어느 정도 개입이 필요하다.", score: 0 }
      ]
    }
  ],
  en: [
    {
      text: "What do you think about imposing higher taxes on wealthy individuals?",
      answers: [
        { text: "I support it. It's necessary to reduce social inequality.", score: 2 },
        { text: "It depends on the situation. We need to find the right balance.", score: 1 },
        { text: "I oppose it. We shouldn't impose excessive taxes on money earned through personal effort.", score: 0 }
      ]
    },
    {
      text: "What do you think about expanding government welfare policies?",
      answers: [
        { text: "Strongly support. We should help those in need.", score: 2 },
        { text: "It's needed at an appropriate level.", score: 1 },
        { text: "I oppose it. Jobs should come before welfare for personal independence.", score: 0 }
      ]
    },
    {
      text: "What do you think about same-sex marriage?",
      answers: [
        { text: "I support it. We should respect individual choice.", score: 2 },
        { text: "I'm not sure. More discussion is needed.", score: 1 },
        { text: "I oppose it. We should maintain traditional family forms.", score: 0 }
      ]
    },
    {
      text: "What do you think about sacrificing some economic growth for environmental protection?",
      answers: [
        { text: "I support it. Environment is more important.", score: 2 },
        { text: "Both are important. We need balance.", score: 1 },
        { text: "I oppose it. Economic growth comes first.", score: 0 }
      ]
    },
    {
      text: "What do you think about accepting refugees?",
      answers: [
        { text: "We should actively accept them. It's a humanitarian responsibility.", score: 2 },
        { text: "We should carefully review and accept appropriately.", score: 1 },
        { text: "I oppose it. We should think of our own people first.", score: 0 }
      ]
    },
    {
      text: "What do you think about raising the minimum wage?",
      answers: [
        { text: "It should be raised significantly. Living costs are too high.", score: 2 },
        { text: "It should be raised gradually.", score: 1 },
        { text: "We should be cautious. Jobs might decrease.", score: 0 }
      ]
    },
    {
      text: "What do you think about free university education?",
      answers: [
        { text: "I support it. Educational opportunities should be equal.", score: 2 },
        { text: "Support should be based on income level.", score: 1 },
        { text: "I oppose it. Individuals should bear the cost.", score: 0 }
      ]
    },
    {
      text: "What do you think about gender quotas?",
      answers: [
        { text: "I support it. It's necessary for gender equality.", score: 2 },
        { text: "It depends on the field.", score: 1 },
        { text: "I oppose it. Evaluation should be based on ability only.", score: 0 }
      ]
    },
    {
      text: "What do you think about the death penalty?",
      answers: [
        { text: "It should be abolished. Life is precious.", score: 2 },
        { text: "I'm not sure. It's a difficult issue.", score: 1 },
        { text: "It should be maintained. Serious criminals should be severely punished.", score: 0 }
      ]
    },
    {
      text: "What do you think about government market intervention?",
      answers: [
        { text: "Active intervention is needed. Market alone has limitations.", score: 2 },
        { text: "Appropriate intervention as needed.", score: 1 },
        { text: "It should be minimized. Market should handle it.", score: 0 }
      ]
    },
    {
      text: "What do you think about military strengthening?",
      answers: [
        { text: "I oppose it. Peace is more important.", score: 2 },
        { text: "We should maintain an appropriate level.", score: 1 },
        { text: "I support it. Strong defense maintains peace.", score: 0 }
      ]
    },
    {
      text: "What do you think about the role of labor unions?",
      answers: [
        { text: "They're important. Workers' rights should be protected.", score: 2 },
        { text: "Necessary but within appropriate limits.", score: 1 },
        { text: "They can harm the economy. Limitations are needed.", score: 0 }
      ]
    },
    {
      text: "What do you think about religion's social role?",
      answers: [
        { text: "It's personal. It shouldn't interfere in society.", score: 2 },
        { text: "It has an appropriate role.", score: 1 },
        { text: "It's important. It provides moral values.", score: 0 }
      ]
    },
    {
      text: "What do you think about multicultural society?",
      answers: [
        { text: "I welcome it. Diversity enriches society.", score: 2 },
        { text: "It's good if we understand each other and live together.", score: 1 },
        { text: "I'm concerned. We should preserve our culture.", score: 0 }
      ]
    },
    {
      text: "What do you think about freedom of expression?",
      answers: [
        { text: "It should be guaranteed as much as possible.", score: 2 },
        { text: "It should be guaranteed within limits that don't harm others.", score: 1 },
        { text: "Some restrictions are needed for social order.", score: 0 }
      ]
    },
    {
      text: "What do you think about corporate social responsibility?",
      answers: [
        { text: "Very important. Companies are also members of society.", score: 2 },
        { text: "Somewhat necessary.", score: 1 },
        { text: "Making profit comes first.", score: 0 }
      ]
    },
    {
      text: "What do you think about politicians' past records?",
      answers: [
        { text: "Present and future are more important than past.", score: 2 },
        { text: "Should be considered, but current policies come first.", score: 1 },
        { text: "Past records are very important.", score: 0 }
      ]
    },
    {
      text: "What do you think about youth political participation?",
      answers: [
        { text: "Should be actively encouraged.", score: 2 },
        { text: "Gradual participation through education is good.", score: 1 },
        { text: "Better to participate after becoming adult.", score: 0 }
      ]
    },
    {
      text: "What do you think about AI technology development?",
      answers: [
        { text: "Protecting human jobs comes first.", score: 2 },
        { text: "Need balance between development and protection.", score: 1 },
        { text: "Technology development comes first.", score: 0 }
      ]
    },
    {
      text: "What do you think about media criticism of government?",
      answers: [
        { text: "Should be active. Watchdog role is important.", score: 2 },
        { text: "Should be constructive criticism.", score: 1 },
        { text: "Shouldn't be excessive. National stability is important.", score: 0 }
      ]
    },
    {
      text: "What do you think about preserving traditional culture?",
      answers: [
        { text: "Should change with the times.", score: 2 },
        { text: "Preserve good things, change bad things.", score: 1 },
        { text: "Should be preserved as is.", score: 0 }
      ]
    },
    {
      text: "What do you think about personal information protection?",
      answers: [
        { text: "Very important. It's an individual right.", score: 2 },
        { text: "Important, but can be disclosed to some extent for public good.", score: 1 },
        { text: "Should be disclosed if necessary for social safety.", score: 0 }
      ]
    },
    {
      text: "What do you think about economic inequality?",
      answers: [
        { text: "It's a serious problem. Government should actively solve it.", score: 2 },
        { text: "Improvement is needed but takes time.", score: 1 },
        { text: "To some extent, it's a natural phenomenon.", score: 0 }
      ]
    },
    {
      text: "What do you think about protests and assemblies?",
      answers: [
        { text: "It's a basic right of democracy.", score: 2 },
        { text: "It's okay if done peacefully.", score: 1 },
        { text: "Shouldn't harm social order.", score: 0 }
      ]
    },
    {
      text: "What do you think about introducing new technology?",
      answers: [
        { text: "Social impact should be thoroughly reviewed.", score: 2 },
        { text: "Should be introduced considering pros and cons.", score: 1 },
        { text: "Should be quickly introduced to enhance competitiveness.", score: 0 }
      ]
    },
    {
      text: "What do you think is most important in international relations?",
      answers: [
        { text: "Human rights and peace", score: 2 },
        { text: "Mutual benefit and cooperation", score: 1 },
        { text: "National interest and security", score: 0 }
      ]
    },
    {
      text: "What do you think about the education system?",
      answers: [
        { text: "Should be equal and fair.", score: 2 },
        { text: "Should recognize diversity but maintain basics.", score: 1 },
        { text: "Should build skills through competition.", score: 0 }
      ]
    },
    {
      text: "What do you think about the health insurance system?",
      answers: [
        { text: "Everyone should be able to use it for free.", score: 2 },
        { text: "Basic treatment guaranteed, but premium care should be paid separately.", score: 1 },
        { text: "Individuals should choose and join.", score: 0 }
      ]
    },
    {
      text: "What do you think about family forms?",
      answers: [
        { text: "Various forms of family should be recognized.", score: 2 },
        { text: "Can change with the times.", score: 1 },
        { text: "Traditional family form is desirable.", score: 0 }
      ]
    },
    {
      text: "What do you think about government intervention in personal life?",
      answers: [
        { text: "Should be minimized. Individual freedom is important.", score: 2 },
        { text: "Should intervene only when absolutely necessary.", score: 1 },
        { text: "Some intervention is needed for social order.", score: 0 }
      ]
    }
  ],
  ja: [
    {
      text: "富裕層への高い税金の課税についてどう思いますか？",
      answers: [
        { text: "賛成です。社会的不平等を減らすために必要です。", score: 2 },
        { text: "状況によります。適切なレベルでバランスを取るべきです。", score: 1 },
        { text: "反対です。個人の努力で稼いだお金に過度な税金をかけるべきではありません。", score: 0 }
      ]
    },
    {
      text: "政府の福祉政策拡大についてどう思いますか？",
      answers: [
        { text: "積極的に賛成。困っている人を助けるべきです。", score: 2 },
        { text: "適切なレベルで必要です。", score: 1 },
        { text: "反対。個人の自立のために福祉より雇用が優先です。", score: 0 }
      ]
    },
    {
      text: "同性結婚についてどう思いますか？",
      answers: [
        { text: "賛成です。個人の選択を尊重すべきです。", score: 2 },
        { text: "よくわかりません。もっと議論が必要です。", score: 1 },
        { text: "反対です。伝統的な家族形態を守るべきです。", score: 0 }
      ]
    },
    {
      text: "環境保護のために経済成長を一部犠牲にすることについてどう思いますか？",
      answers: [
        { text: "賛成です。環境の方が重要です。", score: 2 },
        { text: "両方重要です。バランスを取るべきです。", score: 1 },
        { text: "反対です。経済成長が優先です。", score: 0 }
      ]
    },
    {
      text: "難民受け入れについてどう思いますか？",
      answers: [
        { text: "積極的に受け入れるべきです。人道主義的責任です。", score: 2 },
        { text: "慎重に検討して適切に受け入れるべきです。", score: 1 },
        { text: "反対です。自国民を最優先に考えるべきです。", score: 0 }
      ]
    },
    {
      text: "最低賃金の引き上げについてどう思いますか？",
      answers: [
        { text: "大幅に上げるべきです。生活費が高すぎます。", score: 2 },
        { text: "段階的に上げるべきです。", score: 1 },
        { text: "慎重であるべきです。雇用が減る可能性があります。", score: 0 }
      ]
    },
    {
      text: "大学教育の無償化についてどう思いますか？",
      answers: [
        { text: "賛成です。教育機会を平等にすべきです。", score: 2 },
        { text: "所得レベルに応じて支援すべきです。", score: 1 },
        { text: "反対です。個人が負担すべきです。", score: 0 }
      ]
    },
    {
      text: "ジェンダークォータ制についてどう思いますか？",
      answers: [
        { text: "賛成です。ジェンダー平等のために必要です。", score: 2 },
        { text: "分野によって異なります。", score: 1 },
        { text: "反対です。能力のみで評価すべきです。", score: 0 }
      ]
    },
    {
      text: "死刑制度についてどう思いますか？",
      answers: [
        { text: "廃止すべきです。生命は尊重されるべきです。", score: 2 },
        { text: "よくわかりません。難しい問題です。", score: 1 },
        { text: "維持すべきです。重罪者は厳罰に処すべきです。", score: 0 }
      ]
    },
    {
      text: "政府の市場介入についてどう思いますか？",
      answers: [
        { text: "積極的に介入すべきです。市場だけでは限界があります。", score: 2 },
        { text: "必要に応じて適切に介入すべきです。", score: 1 },
        { text: "最小限にすべきです。市場に任せるのが良いです。", score: 0 }
      ]
    },
    {
      text: "軍事力強化についてどう思いますか？",
      answers: [
        { text: "反対です。平和の方が重要です。", score: 2 },
        { text: "適切なレベルを維持すべきです。", score: 1 },
        { text: "賛成です。強い国防が平和を守ります。", score: 0 }
      ]
    },
    {
      text: "労働組合の役割についてどう思いますか？",
      answers: [
        { text: "重要です。労働者の権利を保護すべきです。", score: 2 },
        { text: "必要ですが適切な範囲で行うべきです。", score: 1 },
        { text: "経済に害を与える可能性があります。制限が必要です。", score: 0 }
      ]
    },
    {
      text: "宗教の社会的役割についてどう思いますか？",
      answers: [
        { text: "個人的なものです。社会に介入すべきではありません。", score: 2 },
        { text: "適切な役割はあります。", score: 1 },
        { text: "重要です。道徳的価値を提供します。", score: 0 }
      ]
    },
    {
      text: "多文化社会についてどう思いますか？",
      answers: [
        { text: "歓迎します。多様性が社会を豊かにします。", score: 2 },
        { text: "お互いを理解し合って共に生きていけば良いです。", score: 1 },
        { text: "心配です。我々の文化を守るべきです。", score: 0 }
      ]
    },
    {
      text: "表現の自由についてどう思いますか？",
      answers: [
        { text: "最大限保障すべきです。", score: 2 },
        { text: "他人に害を与えない範囲で保障すべきです。", score: 1 },
        { text: "社会秩序のために一定の制限が必要です。", score: 0 }
      ]
    },
    {
      text: "企業の社会的責任についてどう思いますか？",
      answers: [
        { text: "非常に重要です。企業も社会の一員です。", score: 2 },
        { text: "ある程度必要です。", score: 1 },
        { text: "利益を出すことが最優先です。", score: 0 }
      ]
    },
    {
      text: "政治家の過去の行動についてどう思いますか？",
      answers: [
        { text: "過去より現在と未来が重要です。", score: 2 },
        { text: "参考にはしますが、現在の政策を優先すべきです。", score: 1 },
        { text: "過去の行動が非常に重要です。", score: 0 }
      ]
    },
    {
      text: "青少年の政治参加についてどう思いますか？",
      answers: [
        { text: "積極的に奨励すべきです。", score: 2 },
        { text: "教育を通じて段階的に参加すれば良いです。", score: 1 },
        { text: "成人になってから参加する方が良いです。", score: 0 }
      ]
    },
    {
      text: "AI技術の発展についてどう思いますか？",
      answers: [
        { text: "人間の雇用を保護することが優先です。", score: 2 },
        { text: "発展と保護のバランスを取るべきです。", score: 1 },
        { text: "技術の発展が優先です。", score: 0 }
      ]
    },
    {
      text: "メディアの政府批判についてどう思いますか？",
      answers: [
        { text: "積極的に行うべきです。監視役割が重要です。", score: 2 },
        { text: "建設的な批判であるべきです。", score: 1 },
        { text: "過度であってはいけません。国の安定が重要です。", score: 0 }
      ]
    },
    {
      text: "伝統文化の保存についてどう思いますか？",
      answers: [
        { text: "時代に合わせて変化すべきです。", score: 2 },
        { text: "良いものは保存し、悪いものは変えるべきです。", score: 1 },
        { text: "そのまま保存すべきです。", score: 0 }
      ]
    },
    {
      text: "個人情報保護についてどう思いますか？",
      answers: [
        { text: "非常に重要です。個人の権利です。", score: 2 },
        { text: "重要ですが、公益のためにはある程度公開できます。", score: 1 },
        { text: "社会の安全のために必要であれば公開すべきです。", score: 0 }
      ]
    },
    {
      text: "経済的不平等についてどう思いますか？",
      answers: [
        { text: "深刻な問題です。政府が積極的に解決すべきです。", score: 2 },
        { text: "改善が必要ですが時間がかかります。", score: 1 },
        { text: "ある程度は自然な現象です。", score: 0 }
      ]
    },
    {
      text: "デモと集会についてどう思いますか？",
      answers: [
        { text: "民主主義の基本的権利です。", score: 2 },
        { text: "平和的に行えば大丈夫です。", score: 1 },
        { text: "社会秩序を害してはいけません。", score: 0 }
      ]
    },
    {
      text: "新技術の導入についてどう思いますか？",
      answers: [
        { text: "社会的影響を十分検討すべきです。", score: 2 },
        { text: "長所と短所を考慮して導入すべきです。", score: 1 },
        { text: "迅速に導入して競争力を高めるべきです。", score: 0 }
      ]
    },
    {
      text: "国際関係で最も重要なことは何だと思いますか？",
      answers: [
        { text: "人権と平和", score: 2 },
        { text: "相互利益と協力", score: 1 },
        { text: "国家利益と安保", score: 0 }
      ]
    },
    {
      text: "教育制度についてどう思いますか？",
      answers: [
        { text: "平等で公正であるべきです。", score: 2 },
        { text: "多様性を認めつつ基本は備えるべきです。", score: 1 },
        { text: "競争を通じて実力を伸ばすべきです。", score: 0 }
      ]
    },
    {
      text: "医療保険制度についてどう思いますか？",
      answers: [
        { text: "すべての人が無料で利用できるべきです。", score: 2 },
        { text: "基本的な治療は保障し、高級医療は別途負担すべきです。", score: 1 },
        { text: "個人が選択して加入するのが良いです。", score: 0 }
      ]
    },
    {
      text: "家族の形についてどう思いますか？",
      answers: [
        { text: "多様な形の家族を認めるべきです。", score: 2 },
        { text: "時代によって変化することがあります。", score: 1 },
        { text: "伝統的な家族形態が望ましいです。", score: 0 }
      ]
    },
    {
      text: "政府の個人生活への介入についてどう思いますか？",
      answers: [
        { text: "最小限にすべきです。個人の自由が重要です。", score: 2 },
        { text: "必要な場合にのみ介入すべきです。", score: 1 },
        { text: "社会秩序のためにある程度の介入が必要です。", score: 0 }
      ]
    }
  ]
};
