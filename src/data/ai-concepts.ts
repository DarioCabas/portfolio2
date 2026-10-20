export interface AiConcept {
  name: string;
  definition: string;
}

export interface AiConceptGroup {
  id: string;
  label: string;
  concepts: AiConcept[];
}

export const aiConceptGroups: AiConceptGroup[] = [
  {
    id: 'core',
    label: 'Agent core',
    concepts: [
      {
        name: 'Agent loop',
        definition:
          'The cycle an agent repeats: read the context, decide, call a tool, observe the result, until the task is done.',
      },
      {
        name: 'Harness',
        definition:
          'The runtime around the model: tools, permissions, context management and the loop itself, like Claude Code.',
      },
      {
        name: 'Tool calling',
        definition:
          'The model asks for a structured function call; the harness runs it and returns the result.',
      },
      {
        name: 'System prompt',
        definition:
          'Standing instructions that set the role, rules and boundaries before the conversation starts.',
      },
      {
        name: 'Prompting',
        definition:
          'Clear, specific instructions with examples and constraints, so the output is predictable.',
      },
    ],
  },
  {
    id: 'context',
    label: 'Context & memory',
    concepts: [
      {
        name: 'Context window',
        definition: 'The tokens a model can see at once; anything outside it does not exist for the model.',
      },
      {
        name: 'Context engineering',
        definition:
          'Choosing what goes into the window (files, docs, memories, tool results) and what stays out.',
      },
      {
        name: 'Short-term memory',
        definition: 'What lives in the current session’s context and is lost when the session ends or is compacted.',
      },
      {
        name: 'Long-term memory',
        definition: 'Decisions and facts saved outside the session, like Engram, and recalled when relevant.',
      },
    ],
  },
  {
    id: 'capabilities',
    label: 'Capabilities',
    concepts: [
      {
        name: 'Skills',
        definition: 'Packaged instructions and scripts an agent loads on demand for a specific kind of task.',
      },
      {
        name: 'MCP',
        definition: 'Model Context Protocol: a standard way to connect agents to tools and data sources.',
      },
      {
        name: 'A2A',
        definition: 'Agent-to-Agent protocol: agents from different systems discover each other and delegate tasks.',
      },
    ],
  },
  {
    id: 'orchestration',
    label: 'Multi-agent',
    concepts: [
      {
        name: 'Orchestration',
        definition: 'Coordinating steps or agents so each one gets the right task, context and handoff.',
      },
      {
        name: 'Subagents',
        definition: 'Child agents with their own context window, spawned for a focused task; they report back a summary.',
      },
      {
        name: 'Multi-agent systems',
        definition: 'Specialized agents, such as planner, builder and reviewer, working toward one goal.',
      },
      {
        name: 'State graphs',
        definition: 'Workflows modeled as nodes and edges with explicit state, so every run is predictable.',
      },
      {
        name: 'Routing',
        definition: 'Sending each request to the right model, agent or tool based on its type or difficulty.',
      },
    ],
  },
  {
    id: 'reliability',
    label: 'Reliability & safety',
    concepts: [
      {
        name: 'Evals',
        definition: 'Repeatable tests that score agent output, so prompt or model changes can be measured.',
      },
      {
        name: 'Guardrails',
        definition: 'Checks on inputs and outputs that block unsafe, off-policy or malformed results.',
      },
      {
        name: 'Sandboxing',
        definition: 'Running agent actions in an isolated environment with limited files, network and permissions.',
      },
      {
        name: 'Human-in-the-loop',
        definition: 'A person approves risky steps and reviews the result before it ships.',
      },
      {
        name: 'Observability',
        definition: 'Tracing every prompt, tool call, token and cost, so failures can be debugged.',
      },
    ],
  },
  {
    id: 'workflow',
    label: 'Workflow',
    concepts: [
      {
        name: 'SDD',
        definition: 'Spec-Driven Development: agents follow a written spec through plan, tasks, code and verification.',
      },
      {
        name: 'ODD',
        definition: 'Organic-Driven Development: ship small, observe real use, then grow and refactor where needed.',
      },
      {
        name: 'Git worktrees',
        definition: 'Separate working directories on their own branches, so parallel agents never collide.',
      },
    ],
  },
];
