import { Injectable } from '@angular/core';
import {
  FutureSkill,
  LegalTopic,
  MarketImpact,
  Pillar,
  Profession,
} from '../models/content.model';

@Injectable({ providedIn: 'root' })
export class ContentService {
  getPillars(): readonly Pillar[] {
    return [
      {
        title: 'Internet das Coisas (IoT)',
        description: 'Sensores e dispositivos conectados gerando dados em tempo real para decisões inteligentes.',
        icon: '🌐',
      },
      {
        title: 'Big Data & Analytics',
        description: 'Processamento massivo de dados para extrair padrões, tendências e previsões.',
        icon: '📊',
      },
      {
        title: 'Inteligência Artificial',
        description: 'Modelos de ML que automatizam decisões, personalizam serviços e detectam fraudes.',
        icon: '🤖',
      },
      {
        title: 'Computação em Nuvem',
        description: 'Infraestrutura elástica, escalável e sob demanda para sistemas distribuídos.',
        icon: '☁️',
      },
      {
        title: 'Cibersegurança',
        description: 'Proteção de dados, integridade e privacidade em um mundo hiperconectado.',
        icon: '🛡️',
      },
      {
        title: 'Automação & Robótica',
        description: 'Processos autônomos que aumentam produtividade e reduzem erros operacionais.',
        icon: '⚙️',
      },
    ];
  }

  getProfessions(): readonly Profession[] {
    return [
      {
        title: 'Desenvolvedor(a) Full Stack',
        summary: 'Constrói aplicações web e mobile, do front-end ao back-end, integrando APIs e nuvem.',
        skills: ['Angular/React', 'Node.js', 'APIs REST/GraphQL', 'DevOps', 'Testes automatizados'],
        impact: 'Cria plataformas digitais escaláveis que conectam pessoas, empresas e serviços.',
      },
      {
        title: 'Engenheiro(a) de Dados',
        summary: 'Projeta pipelines, modela dados e garante a qualidade em escala para analytics e IA.',
        skills: ['SQL/NoSQL', 'ETL/ELT', 'Spark', 'Airflow', 'Data Warehouse'],
        impact: 'Sustenta decisões estratégicas baseadas em evidências e dados confiáveis.',
      },
      {
        title: 'DBA (Administrador de Banco de Dados)',
        summary: 'Garante disponibilidade, performance, segurança e integridade das bases críticas.',
        skills: ['PostgreSQL', 'Oracle', 'Tuning', 'Backup/Recovery', 'LGPD/GDPR'],
        impact: 'Protege dados sensíveis e garante conformidade com LGPD e regulações de privacidade.',
      },
      {
        title: 'Cientista de Dados',
        summary: 'Aplica estatística e ML para resolver problemas de negócio complexos.',
        skills: ['Python', 'Pandas', 'Scikit-learn', 'Deep Learning', 'Visualização'],
        impact: 'Modelos preditivos que otimizam operações e geram vantagem competitiva.',
      },
      {
        title: 'Especialista em Cibersegurança',
        summary: 'Identifica vulnerabilidades, responde a incidentes e fortalece controles de segurança.',
        skills: ['Pentest', 'SIEM', 'Zero Trust', 'Criptografia', 'ISO 27001'],
        impact: 'Mantém sistemas confiáveis, resilientes e protegidos contra ameaças digitais.',
      },
      {
        title: 'Arquiteto(a) de Software / Cloud',
        summary: 'Desenha sistemas escaláveis, resilientes e seguros, priorizando custo e qualidade.',
        skills: ['AWS/Azure/GCP', 'Microsserviços', 'Kubernetes', 'DDD', 'Observabilidade'],
        impact: 'Arquiteturas modernas que suportam alta demanda com custo otimizado.',
      },
    ];
  }

  getMarketImpacts(): readonly MarketImpact[] {
    return [
      {
        title: 'Profissões tradicionais em transformação',
        description:
          'Funções repetitivas e operacionais estão sendo automatizadas. Cargos se redesenham ao redor de dados, software e tomada de decisão assistida por IA.',
        icon: '🔄',
      },
      {
        title: 'Novas carreiras em ascensão',
        description:
          'Surgem papéis antes inexistentes — engenheiro de prompt, MLOps, especialista em ética de IA, arquiteto de dados — exigindo formação contínua.',
        icon: '🚀',
      },
      {
        title: 'Habilidades digitais como padrão',
        description:
          'Profissionais buscam requalificação em lógica, dados, cloud e segurança para permanecerem competitivos em um mercado cada vez mais técnico.',
        icon: '🎯',
      },
      {
        title: 'Automação de atividades repetitivas',
        description:
          'RPA, scripts e agentes de IA substituem tarefas manuais, liberando tempo humano para análise crítica, criatividade e resolução de problemas complexos.',
        icon: '⚡',
      },
      {
        title: 'Trabalho híbrido e distribuído',
        description:
          'Times remotos e globais dependem de plataformas colaborativas, DevOps e cloud — redefinindo gestão, comunicação e entrega de software.',
        icon: '🌎',
      },
      {
        title: 'Ética, segurança e proteção de dados',
        description:
          'Cresce a demanda por profissionais que dominem LGPD, GDPR, privacidade por design e governança responsável da IA.',
        icon: '⚖️',
      },
    ];
  }

  getFutureSkills(): readonly FutureSkill[] {
    return [
      {
        name: 'Lógica de programação e algoritmos',
        category: 'Técnica',
        description: 'Base para qualquer profissional de ADS construir soluções eficientes.',
      },
      {
        name: 'Banco de dados e modelagem',
        category: 'Técnica',
        description: 'SQL, NoSQL e design de dados para sistemas escaláveis e íntegros.',
      },
      {
        name: 'Cloud computing e DevOps',
        category: 'Técnica',
        description: 'Entrega contínua em AWS, Azure ou GCP com automação de infraestrutura.',
      },
      {
        name: 'Análise de dados e IA',
        category: 'Analítica',
        description: 'Extrair valor de grandes volumes de dados e aplicar modelos preditivos.',
      },
      {
        name: 'Pensamento crítico',
        category: 'Analítica',
        description: 'Questionar resultados de IA, validar dados e identificar vieses.',
      },
      {
        name: 'Segurança e privacidade',
        category: 'Técnica',
        description: 'Aplicar boas práticas de criptografia, autenticação e LGPD.',
      },
      {
        name: 'Aprendizado contínuo',
        category: 'Comportamental',
        description: 'Reciclar conhecimento diante da evolução acelerada das tecnologias.',
      },
      {
        name: 'Comunicação e colaboração',
        category: 'Comportamental',
        description: 'Trabalhar em times multidisciplinares, remotos e ágeis.',
      },
      {
        name: 'Resolução de problemas complexos',
        category: 'Comportamental',
        description: 'Decompor desafios e propor soluções técnicas viáveis.',
      },
    ];
  }

  getLegalTopics(): readonly LegalTopic[] {
    return [
      {
        title: 'LGPD — Lei Geral de Proteção de Dados',
        description:
          'Define como dados pessoais devem ser coletados, tratados e armazenados no Brasil. Impacta diretamente o desenvolvimento de sistemas e a modelagem de bancos de dados.',
        reference: 'Lei nº 13.709/2018',
      },
      {
        title: 'Marco Civil da Internet',
        description:
          'Estabelece princípios, garantias, direitos e deveres para uso da internet no país, incluindo neutralidade da rede e guarda de registros.',
        reference: 'Lei nº 12.965/2014',
      },
      {
        title: 'Regulação da Inteligência Artificial',
        description:
          'Projetos de lei em tramitação no Brasil (PL 2338/2023) e regulamentações internacionais (EU AI Act) exigem transparência, auditoria e mitigação de vieses em modelos de IA.',
        reference: 'PL 2338/2023 · EU AI Act',
      },
      {
        title: 'Segurança da informação',
        description:
          'Normas como ISO 27001 e frameworks como NIST guiam a proteção de ativos digitais contra ameaças crescentes no cenário da Indústria 4.0.',
        reference: 'ISO/IEC 27001 · NIST CSF',
      },
    ];
  }
}
