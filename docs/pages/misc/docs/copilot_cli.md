---
layout: doc
---

# Copilot CLI

GitHub Copilot CLI is a **standalone terminal application** that brings the power of GitHub Copilot directly to your command line.

> ![Static Badge](https://img.shields.io/badge/Terminal-text?style=flat-square&logo=gnometerminal&labelColor=0969da&color=ddf4ff)
>
> ```sh
> copilot update
>
> copilot --allow-all --enable-all-github-mcp-tools
>
> copilot --resume
> ```

The `--enable-all-github-mcp-tools` flag enables all GitHub MCP (Model Context Protocol) tools, giving Copilot CLI access to GitHub features like creating issues, managing repositories, and more.

Depending on your Copilot CLI configuration (for example, if you don't use the `--allow-all` option), you may be prompted to enable certain features during the session. Respond yes to these prompts as well.

To reset previously approved tools, use:`/reset-allowed-tools`

## Customize your environment

**Supported locations (in order of discovery):**

| Location                                    | Scope                 |
| ------------------------------------------- | --------------------- |
| `~/.copilot/copilot-instructions.md`        | All sessions (global) |
| `.github/copilot-instructions.md`           | Repository            |
| `.github/instructions/**/*.instructions.md` | Repository (modular)  |
| `AGENTS.md` (in Git root or cwd)            | Repository            |
| `Copilot.md`, `GEMINI.md`, `CODEX.md`       | Repository            |

A community-created collection of custom agents, instructions, skills, hooks, workflows, and plugins to supercharge your GitHub Copilot experience.
[Awesome GitHub Copilot](https://github.com/github/awesome-copilot#whats-in-this-repo)

### Use your own model provider

Run `copilot help providers` for full setup instructions.

This allows the CLI to access any file path, use any tool, and access any URL without prompting for confirmation.
Use with caution, as it grants the CLI full access and automation capabilities.

## Plan mode

Press `Shift + Tab` to toggle between normal mode and plan mode.
Alternatively, you can use the `/plan` command in normal mode to achieve the same effect.

`/fleet`: 在 plan mode 生成 plan.md 后使用 `/fleet` 执行plan.

`ctrl`+`y`: 预览plan mode下生成的plan.md,可以编辑此文件添加更多细节.

### Monitoring progress

Use the `/tasks` slash command to see a list of background tasks relating to the current session. This will include any subtasks handled by subagents when you use the `/fleet` command.

## Hand-off task

- **Autopilot mode** runs locally in your CLI session.
- `/delegate` or `&` pushes the task to Copilot cloud agent on GitHub.

## Tips

### Enable remote control for a Copilot CLI session

Use the `/keep-alive` slash command to prevent your machine from going to sleep while you're away.

Enable remote control `/remote on`

## Connecting to VS Code

Managing the connection with the `/ide` slash command

To continue a CLI session in VS Code's integrated terminal, **right-click** the session in the Sessions view and choose **Resume in Terminal**. This is a quick way to pick up work from an external terminal window without losing any session context.

## Managing pull requests with the `/pr` command

[manage-pull-requests](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/manage-pull-requests)

## Automate with Actions

[Authenticate](https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/automate-with-actions#authenticate)

## Customize Copilot CLI

### Instructions

see [instructions.md](instructions.md)

### Hooks

For more information, see GitHub Copilot [hooks reference](https://docs.github.com/en/copilot/reference/hooks-reference)

- [Tool Guardian](https://awesome-copilot.github.com/hooks/#file=hooks%2Ftool-guardian%2FREADME.md)
- [Session Logger](https://awesome-copilot.github.com/hooks/#file=hooks%2Fsession-logger%2FREADME.md)
- [Secrets Scanner](https://awesome-copilot.github.com/hooks/#file=hooks%2Fsecrets-scanner%2FREADME.md)

### Skills

see [SKILL.md](SKILL.md)

### Plugins

Included with GitHub Copilot:

- copilot-plugins (GitHub: github/copilot-plugins)
- [awesome-copilot](https://awesome-copilot.github.com) (GitHub: github/awesome-copilot)

Installed path: `~/.copilot/installed-plugins/`

Github Copilot [CLI plugin reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference)

> ![Static Badge](https://img.shields.io/badge/GitHub_Copilot-Prompt-text?style=flat-square&logo=githubcopilot&labelColor=8250df&color=fbefff)
>
> ```sh
> /plugin marketplace list
>
> /plugin list
> /plugin install PLUGIN-NAME@MARKETPLACE-NAME
> /plugin uninstall PLUGIN-NAME
> ```

## Copilot CLI reference

### CLI command reference

Find commands and keyboard shortcuts to help you use Copilot CLI effectively: [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference)

`/experimental`: Toggle, set, or show experimental features.

`/undo`, `/rewind`: Rewind to a previous point(`double Esc` keypress), If there's text in the input area, pressing Esc twice in quick succession clears the text.

::: tip
Rewind is unavailable in the following situations:

- Files over 10 MB.
- More than 500 changed files.

:::

`/statusline`: Configure status line items.

`/theme`: View or set color mode.

#### Session

`/share`: Share the session to a Markdown file, interactive HTML file, or GitHub gist.

`/clear`, `/new`, `/reset`: Start a new conversation.

`/session files`: List files modified in this session.

`/rename`: Rename the current session (alias for `/session rename`).

`/resume`, `/continue`: Switch to a different session by choosing from a list (optionally specify a session ID).

#### Chronicle

generate standup reports, get personalized tips, and receive suggestions for improving your `.github/copilot-instructions.md` file.

- At the start of your day: Run `/chronicle standup last 3 days` to generate a reminder of what you worked on recently and the CLI session you were working in.

- Periodically, to level up: Run `/chronicle tips` every week or two to discover features and workflow improvements you might be missing.

- When Copilot keeps making the same mistake: Run `/chronicle improve` to identify the pattern and generate custom instructions to fix it.

- `/chronicle reindex`: Rebuilds the session store from your session history files.

#### Research

`/research`

使用 `ctrl + y` 查看生成的文件

### CLI configuration directory

Find information about the `~/.copilot` directory, where Copilot CLI stores configuration, session data, and customizations.

[GitHub Copilot CLI configuration directory](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference)

## Hands-on practice

[Take flight with GitHub Copilot](https://learn.github.com/skills#take-flight-with-github-copilot)

## prompt

git
`Create and push a new branch called 'create-calc-app'`

> [!IMPORTANT]
> If you have restarted your codespace you may need to run `copilot --allow-all --enable-all-github-mcp-tools` and then authenticate with GitHub again by running `/login` from within the Copilot CLI session.

::: tip Create
![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
Create a README template

```text
Create a README template for a new open-source project that includes sections for project description, installation instructions, usage examples, and contribution guidelines. Make it clear and easy to follow.
```

Triage and summarize repository activity

```text
Summarize activity in this repository over the past week. Highlight anything that looks blocked or urgent, and suggest what I should prioritize.
```

:::

::: tip Testing
![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)

Generating unit tests

```text
/tests Generate unit tests for this function. Validate both success and failure, and include edge cases.
```

Updating unit tests to match code changes

```text
Given the update to the `calculate_discount` function, update the unit tests that may fail or become outdated as a result.
```

Creating mock objects to abstract layers

```text
/tests Create a unit test to ensure the service is called correctly. Mock the service object.
```

Creating end-to-end tests for a webpage

```text
Using Playwright, generate an e2e test to ensure the product displays correctly.
```

:::

## Customization library

[Custom instructions](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions)

[Custom skills](https://docs.github.com/en/copilot/tutorials/customization-library/prompt-files)

[Custom agents](https://docs.github.com/en/copilot/tutorials/customization-library/custom-agents)
