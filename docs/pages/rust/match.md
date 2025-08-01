## match

1. 从上往下依次匹配分支, 一旦匹配到分支就会停止后续匹配并执行该分支代码(之后的分支将不会被检查或执行)
2. 必须穷尽, 使用自定义变量 或者 `_` 来匹配所有情况

## if let

属于 match 的语法糖

if 的条件类型是 bool 表达式, 而 `if let` 的条件类型是模式匹配结构

```rs

```

### `@绑定`

```rs
enum Message {
    Hello { id: i32 },
}

let msg = Message::Hello { id: 5 };

match msg {
    // 创建一个存放值的变量的同时测试其值是否匹配模式。
    Message::Hello { id: id_variable @ 3..=7 } => {
        println!("Found an id in range: {}", id_variable)
    },
    Message::Hello { id: 10..=12 } => {
        println!("Found an id in another range")
    },
    Message::Hello { id } => {
        println!("Found some other id: {}", id)
    },
}
```
