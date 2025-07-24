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

# [不常用]格式化当前包中的代码
cargo fmt

# [不常用]修复有明确修正方法的编译器警告
cargo fix

# 代码分析与检查
cargo clippy

# 编译时使用 `dev` profile, 默认 opt-level = 0
cargo build

# 编译时使用 `release` profile, 默认 opt-level = 3
# 这种模式会以更长的编译时间为代价来优化代码，从而使代码拥有
# 更好的运行时性能。用于构建交付给用户的最终程序
cargo build —release

# 在浏览器中打开项目所有依赖的文档
cargo doc —open

# 退役已发布的crate. 撤销一个版本可以防止新项目依赖于该版本
# 同时允许所有现有的依赖于它的项目继续使用。
cargo yank
```

## tools

安装 nightly 版本 rust

```sh
rustup toolchain list
rustup toolchain install nightly
```

## 预导入

rust 的默认行为，Rust 会自动将标准库中一系列常用的条目导入每个程序中(默认导入一些常用包)，不在预导入模块中就需要用 use 显式导入

## 其他

当一个变量超出作用域,rust 会自动调用`drop`函数清理该变量的堆内存

## 外部属性和内部属性

`#![allow(dead_code)]` : 内部属性, 写在模块或 crate 根文件内部顶部(覆盖整个模块或 crate)

`#[allow(dead_code)]` : 外部属性, 写在代码结构(如函数,模块,结构体)之前

### 典型属性宏

`#[derive(Debug, PartialEq, Copy, Clone)]`

`#[derive(...)]`: 让编译器自动实现 trait,比如 Debug,Copy 等

`Debug`: 让类型可以使用`{:?}`格式打印

`PartialEq`: 为类型生成 `==` 和 `!=`的比较支持

`Copy`: struct 或者 enum(纯字段无类型,或者字段是实现了 Copy 的类型) 中如果都是实现了 Copy 的类型,否则使用`Clone`

`Clone`: 只要有一个字段不是 Copy，整个 sturct 或 enum 就不能 Copy。如: String,Vec,Box

`#[allow(dead_code)]`: 用于禁止编译器对未使用代码发出警告.一般用于提前实现的函数或接口(备用)
``

## mod 和 use

`crate`的 2 种形式:

1. Binary crate: 带有 main 函数的可变以为可执行程序的文件,可以有多个(../src/bin/\*.rs)
2. Library crate: 提供各种 mod 的库,一般一个 cargo 包(package)下最多一个

`mod` : `当前作用域` 中的模块通过 mod 来`声明`(给编译器声明你需要编译的模块,编译器会去加载代码)

`use` : 1. `非当前作用域` 通过使用 use 来`引入`(导入模块或函数到作用域); 2. 也可以使用 use 引入`当前作用域`下的子模块(或子模块中的函数)来实现简写.

## marco

`unimplemented!();`: 占位,标记尚未实现的函数或代码块,保持编译通过,但运行时会`panic`

`#[cfg(test)]`:临时跳过未完成的逻辑

`todo!()` : 占位,标记计划实现的函数或代码块,推荐代替`unimplemented!()`
