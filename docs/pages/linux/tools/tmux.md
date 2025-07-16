# tmux

新建一个名称为 demo 的 session

```sh
tmux new -s demo
```

查看所有 session

```sh
tmux ls
```

进入到名称为 demo 的 session

```sh
tmux a -t demo
```

关闭叫 demo 的 session

```sh
tmux kill-session -t demo
```

关闭服务器，所有 session 都将关闭

```sh
tmux kill-server
```

## 配置文件

配置文件
`~/.tmux.conf`

```
# xterm-256color
set -g default-terminal "xterm-256color"

# window 编号从 1 开始
set -g base-index 1

# pane 编号从 1 开始
set -g pane-base-index 1
```

## 常用快捷键

| shortcut keys    | introduction                                 |
| :--------------- | :------------------------------------------- |
| **session**      | -                                            |
| `<prefix> w`     | 按键 x 关闭某个 session 或 window            |
| `<prefix> d`     | 断开当前会话，会话在后台运行                 |
| `<prefix> $`     | 重命名 session                               |
| **window**       | -                                            |
| `<prefix> c`     | 新建窗口                                     |
| `<prefix> &`     | 关闭当前的窗口                               |
| `<prefix> ,`     | 重命名当前窗口                               |
| `<prefix> [0-9]` | 切换窗口                                     |
| **pane**         | -                                            |
| `<prefix> %`     | 右侧新建面板                                 |
| `<prefix> "`     | 下侧新建面板                                 |
| `<prefix> x`     | 关闭当前面板                                 |
| `<prefix> z`     | 最大化当前面板                               |
| `<prefix> q`     | 在编号消失前输入对应的数字可切换到相应的面板 |
| `<prefix> z`     | 最大化当前面板                               |
