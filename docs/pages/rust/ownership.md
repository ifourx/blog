---
outline: deep
---

# 所有权

> [!IMPORTANT]
>
> - rust 中每个值都有一个所有者
> - 一次只能拥有一个所有者
> - 当所有者超出作用域时, 值将被丢弃

## move(移动)

rust 隐含的设计: **永远不会创建数据的"深层"副本**

```rust
let s1 = String::from("hello");
let s2 = s1; // move: s1被移动(move)到s2; s1 失效

// 编译失败: s1 变量失效
println!("{s1}, world!");
```

`let s1 = String::from("hello");`=> s1 在堆栈上分配,由 3 部分组成(ptr,len,cap)

- ptr: 一个指向(存储字符串内容的)内存的指针.
- len: 当前实际存储的长度.
- cap: 底层分配的最大长度.

`let s2 = s1;`=> 当把 s1 赋值给 s2 时,数据被复制,此处复制的是栈数据(s1 的 ptr,len,cap),而不是复制 ptr 所指向的堆上的数据.2.然后,rust 会使变量 s1 失效(所以这不是浅拷贝,因为 s1 失效),失效也就意味着不需要释放任何东西.

以上过程被称为`移动(move)`

## 作用域和赋值

将一个全新的值赋给一个已存在的变量时，Rust 会立即调用 `drop`函数并释放原始值的内存。(将原始值的内存返还给分配器)

```rust
let mut s = String::from("hello");
s = String::from("ahoy");

println!("{s}, world!");
```

## 引用和借用

引用（&T, &mut T）本身是简单的指针，大小固定，本质是简单类型，但所引用的数据可能是复杂类型。

问: 既然引用是简单类型,所以可以多个(&T),但为什么不能多个(&mut T),

答: 因为 rust 就是这么设计的, 用来防止数据竞争. **“在任意时间，要么有多个不可变引用 (&T)，要么只能有一个可变引用 (&mut T)。”**

### 可变引用

重要的限制：如果你有一个指向值的可变引用，那么你不能有其他任何指向该值的引用。

带来的好处: rust 拒绝编译存在数据竞争的代码来避免数据竞争带来的问题

```rust
let mut s = String::from("hello");

let r1 = &s; // no problem
let r2 = &s; // no problem
println!("{r1} and {r2}"); // 这行如果被注释,将不能通过编译.rust不允许发生这种情况:(不可变引用的用户r1,r2的值在某一时刻突然发生变化)
// Variables r1 and r2 will not be used after this point.

let r3 = &mut s; // no problem
println!("{r3}");

```
