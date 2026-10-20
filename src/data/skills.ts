export interface SkillGroup {
  label: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
  { label: 'Frontend', items: ['React', 'React Native', 'Astro'] },
  { label: 'Backend', items: ['Node.js'] },
  { label: 'Testing', items: ['Jest', 'Storybook'] },
  { label: 'AI tools', items: ['Claude Code', 'OpenCode', 'Codex', 'Figma MCP', 'Engram'] },
];

export default skillGroups;
