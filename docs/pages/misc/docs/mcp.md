# MCP

[MCP (Model Context Protocol)](https://modelcontextprotocol.io/docs/getting-started/intro) is an open-source standard for connecting AI applications to external systems.

Connect models to the real world: [MCP Registry](https://github.com/mcp/)

## with GitHub Copilot

The [GitHub MCP Server](https://github.com/github/github-mcp-server) connects AI tools directly to GitHub's platform. This gives AI agents, assistants, and chatbots the ability to read repositories and code files, manage issues and PRs, analyze code, and automate workflows. All through natural language interactions.

📄**.vscode/mcp.json**

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/"
    }
  }
}
```

In the `.vscode/mcp.json` file, click the **Start** button and accept the prompt to authenticate with GitHub. This has just informed GitHub Copilot of the MCP server's capabilities.

> ![Static Badge](https://img.shields.io/badge/GitHub%20Copilot-Prompt-text?style=flat-square&logo=githubcopilot&labelColor=8250df&color=fbefff)
>
> ```text
> How many open issues are there on my repository?
> ```
>
> ```text
> #codebase Let's do the first one. Follow these steps:
> 1.  Checkout a new local branch for making our changes.
> 2.  Make the changes then confirm with me that they look correct.
> 3.  Push the changes and create a pull request.
> ```
