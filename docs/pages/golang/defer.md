# defer

## LIFO

Last-In, First-Out

```go:line-numbers {6}
func func1() {
    fmt.Println("A")
}

func func2() {
    fmt.Println("B")
}
// [!code focus:4]
func func3() {
    fmt.Println("C")
}

func main() {
    defer func1() // [!code warning:2]
    defer func2()
    defer func3()
}
// result:
// C
// B
// A
```

> [!CAUTION]
> 行为可能带来的负面影响。
