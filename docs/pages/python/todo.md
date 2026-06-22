# TODO

## 虚拟环境

```sh
python -m venv myvenv
source myvenv/bin/activate
# 退出
deactivate
```

## Package Manager

pip不支持完善的项目虚拟环境管理和严格的依赖锁定, 使用uv管理python版本和虚拟环境

```sh
uv venv myvenv2

# 指定python版本
uv venv --python 3.12 venv312

# 安装当前目录下 `pyproject.toml` 文件中的依赖
uv pip install .

# 查看依赖
nv tree
```

## tips

### f-string

使用现代化的`f`格式化字符串字面量, 不要使用古老的 `.format()`或者`+`拼接

```py
name = "张三"
age = 18

# 使用 f-string
# 输出：你好，我叫 张三，今年 18 岁。
print(f"你好，我叫 {name}，今年 {age} 岁。")

# 传统的做法（麻烦且容易漏掉空格或加号）
print("你好，我叫 " + name + "，今年 " + str(age) + " 岁。")
print("你好，我叫 {}，今年 {} 岁。".format(name, age))
```

不仅能放变量, 还可以在`{}`中运行表达式

```py
user_name = "tony"

# 输出：大写名字: TONY
print(f"大写名字: {user_name.upper()}")
```

用于debug, 同时打印变量名字和它的值

```py
x = 10
y = 20

# 输出：x=10, y=20
print(f"{x=}, {y=}")
```
