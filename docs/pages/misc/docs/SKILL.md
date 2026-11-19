# Skills

Skills follow the open [Agent Skills specification](agentskills.io), making them portable across coding agent systems beyond GitHub Copilot.

> [!note] How do Agent Skills work?
> Agents load skills through **progressive disclosure**, in three stages:
>
> 1. **Discovery**: At startup, agents load only the name and description of each available skill, just enough to know when it might be relevant.
> 2. **Activation**: When a task matches a skill's description, the agent reads the full SKILL.md instructions into context.
> 3. **Execution**: The agent follows the instructions, optionally executing bundled code or loading referenced files as needed.

For **project skills**, specific to a single repository, create a `.github/skills`, `.claude/skills`, or `.agents/skills` directory in your repository.

For **personal skills**, shared across projects, create a `~/.copilot/skills` or `~/.agents/skills` directory in your local home directory.

Within the `skills` directory, create a subdirectory for your new skill. Each skill should have its own directory (for example, `.github/skills/webapp-testing`).

In your skill subdirectory, create a `SKILL.md` file(**MUST be "SKILL.md"**) containing your skill's instructions.

## Agent skills

- [LSP server](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/add-lsp-servers)

## Skills和MCP的区别

**MCP** connects agent to data.

**Skills** teach agent what to do with that data.

> skills能干大部分MCP的活, 但安全性和稳定性远不如MCP, skills适合轻量化的scripts, 大部分情况下是结合起来使用.
