---
outline: deep
---

# 生命周期

> [!important]

## 静态生命周期

`'static` : 受影响的引用可以在整个程序的生命周期内存在

```rust
let s: &'static str = "I have a static lifetime.";
```

所有字符串字面量的生命周期默认是 `'static` 存在于真个程序的生命周期内
