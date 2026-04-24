export interface Pillar {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface Profession {
  readonly title: string;
  readonly summary: string;
  readonly skills: readonly string[];
  readonly impact: string;
}

export interface MarketImpact {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface FutureSkill {
  readonly name: string;
  readonly category: 'Técnica' | 'Analítica' | 'Comportamental';
  readonly description: string;
}

export interface LegalTopic {
  readonly title: string;
  readonly description: string;
  readonly reference: string;
}
