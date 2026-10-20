export interface AiPractice {
  title: string;
  description: string;
}

export const aiLead =
  'I build agent workflows that ship production code: spec first, specialized agents, verified output.';

export const aiPractices: AiPractice[] = [
  {
    title: 'Agent orchestration',
    description: 'Planner, builder, QA and reviewer agents, each with one job and clear handoffs.',
  },
  {
    title: 'Skills & MCP',
    description:
      'Reusable skills and MCP servers that give agents real context: the design system, Figma, Jira.',
  },
  {
    title: 'Quality gates',
    description:
      'Claude and Codex review each other’s work, plus automated iOS and Android QA and Figma fidelity checks.',
  },
];
