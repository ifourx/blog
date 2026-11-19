# Instructions

Instructions are written in natural language with Markdown format.

Typically include:

- Project overview, including it's purpose, goals, and any relevant background information.
- Program architecture, standards and conventions
- Security requirements and checklists
- Performance optimization priorities
- Team-specific preferences and style guides
- Language-specific review criteria

Project initialization for Copilot:
use `copilot init`, or `/init`, when you start a new project, or when you start using Copilot CLI in an existing repository.

Priority: Personal instructions > Repository instructions > Organization instructions

For more information, see [Adding custom instructions for GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions).

## Examples

### Repository-wide instructions

Applies to all code in the repository.

定义代码与项目规范 (技术栈、架构、全局代码风格等)

Ex: `.github/copilot-instructions.md`

```md
## Security

- Validate input sanitization practices.
- Search for risks that might expose user data.
- Prefer loading configuration and content from the database instead of hard coded content. If absolutely necessary, load it from environment variables or a non-committed config file.

## Code Quality

- Use consistent naming conventions.
- Try to reduce code duplication.
- Prefer maintainability and readability over optimization.
- If a method is used a lot, try to optimize it for performance.
- Prefer explicit error handling over silent failures.
```

```md
## Overview

## Development Environment

## Program architecture

- The website users are the students and teachers. Make sure the user experience is simple.
- Do not make additional apps or services.
- Do not make command line tools.
- Do not create a long single file application. Always use an easy-to-understand directory structure.
- Only use HTML, CSS, Javascript, and Python. No other languages.

## Documentation

- Always update the README file to explain how to use the program. Assume the user will quickly forget so good documentation is important.
- Once the readme gets too long, start organizing it into a docs directory.

## Code Quality

## Security considerations
```

### Path-specific instructions

Applies to specific files to create focused criteria for different parts of your codebase.

对指定的文件类型或目录补充专属逻辑 (通过`applyTo`关键字指定)

Ex: `.github/instructions/**/*.instructions.md`

```md
---
applyTo: "tests/**/**,docs/*.md"
---

# Testing Guidelines ...
```

```md
---
applyTo: "docs/*.md,README.md"
---

# Documentation Guidelines ...
```
