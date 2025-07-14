# note

## cargo

```sh
# 初始化 rust 项目
cargo new hello_world

# update只会更新版本号 a.b.c 中的 c，c 只是修复了 bug
# 理论上执行 cargo update 不会影响项目本身
cargo update

# 查看是否能通过编译，在开发迭代中常用
cargo check

# 编译并运行。用于开发过程中的快速迭代
cargo run

# 编译
cargo build

# 这种模式会以更长的编译时间为代价来优化代码，从而使代码拥有
# 更好的运行时性能。用于构建交付给用户的最终程序
cargo build —release

# 在浏览器中打开项目所有依赖的文档
cargo doc —open

```

## 预导入

rust 的默认行为，Rust 会自动将标准库中一系列常用的条目导入每个程序中(默认导入一些常用包)，不在预导入模块中就需要用 use 显式导入
