export interface UxPillar {
  title: string;
  description: string;
}

export const uxLead =
  'I work between design and engineering: Figma becomes components that look right, feel right and work for everyone.';

export const uxPillars: UxPillar[] = [
  {
    title: 'Design systems',
    description: 'Tokens and components shared by web and mobile, kept in sync with Figma.',
  },
  {
    title: 'Accessibility',
    description:
      'WCAG 2.2 AA as the baseline: semantic HTML, keyboard support, screen reader labels and contrast checks.',
  },
  {
    title: 'Interaction & motion',
    description: 'Motion that explains what changed and respects reduced-motion settings.',
  },
  {
    title: 'Verified in the browser',
    description: 'Interaction tests and visual checks against the design before anything ships.',
  },
];
