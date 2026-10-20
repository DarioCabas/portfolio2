import {
  siArduino,
  siAstro,
  siBootstrap,
  siClaude,
  siCmake,
  siCss,
  siFigma,
  siHtml5,
  siJavascript,
  siJest,
  siJquery,
  siModelcontextprotocol,
  siMui,
  siNodedotjs,
  siOpencode,
  siOpencv,
  siPostgresql,
  siPython,
  siReact,
  siRos,
  siRubyonrails,
  siStorybook,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from 'simple-icons';

export interface TechIcon {
  path: string;
  /** Brand color shown on hover, or null when it is too dark for the night background */
  hoverColor: string | null;
}

// Real logos from simple-icons; technologies without one render as text only
const iconsByName: Record<string, SimpleIcon> = {
  Arduino: siArduino,
  Astro: siAstro,
  Bootstrap: siBootstrap,
  'Claude Code': siClaude,
  CMake: siCmake,
  CSS: siCss,
  'Figma MCP': siFigma,
  HTML: siHtml5,
  JavaScript: siJavascript,
  Jest: siJest,
  jQuery: siJquery,
  MCP: siModelcontextprotocol,
  MUI: siMui,
  'Node.js': siNodedotjs,
  OpenCode: siOpencode,
  OpenCV: siOpencv,
  PostgreSQL: siPostgresql,
  Python: siPython,
  React: siReact,
  'React Native': siReact,
  ROS: siRos,
  'Ruby on Rails': siRubyonrails,
  Storybook: siStorybook,
  TypeScript: siTypescript,
  Vercel: siVercel,
};

function relativeLuminance(hex: string) {
  const channels = [0, 2, 4].map((offset) => {
    const value = parseInt(hex.slice(offset, offset + 2), 16) / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

// Non-text graphics need 3:1 against the chip surface (#1e2240, luminance ≈ 0.018)
const surfaceLuminance = 0.018;
const minimumContrast = 3;

export function iconFor(name: string): TechIcon | null {
  const icon = iconsByName[name];
  if (!icon) return null;
  const contrast = (relativeLuminance(icon.hex) + 0.05) / (surfaceLuminance + 0.05);
  return { path: icon.path, hoverColor: contrast >= minimumContrast ? `#${icon.hex}` : null };
}
