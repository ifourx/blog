## Installation

官方文档: [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

> [!tip]
> 授权非 root 用户使用 docker 命令 [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/)

### Docker daemon代理

> Docker daemon (dockerd) 进程是由 systemd 管理，普通的 `export http_proxy` 对它不起作用。此代理只会影响dockerd拉取镜像(docker pull), 连接registry等操作.

创建 Docker 服务的 systemd 配置目录

```sh
sudo mkdir -p /etc/systemd/system/docker.service.d
```

创建或编辑 `http-proxy.conf` 文件

`sudo vim /etc/systemd/system/docker.service.d/http-proxy.conf`

```ini
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:7890"
Environment="HTTPS_PROXY=http://127.0.0.1:7890"
Environment="NO_PROXY=localhost,127.0.0.0/8"
```

重启

```sh
sudo systemctl daemon-reload
sudo systemctl restart docker
sudo systemctl status docker
```

### Docker CLI 代理

编辑`~/.docker/config.json`文件, 当 CLI 发起容器 build、run、create 操作时，CLI 会自动注入这些环境变量到容器内部.

Clash需要开启允许局域网模式(allow lan mode),ip需要替换为宿主机(比如wsl)的ip, 如果wsl配置了`networkingMode=mirrored`,ip也可以是windows的ip.

::: tip
如果container是 `--net=host` 可以用 `127.0.0.1:7890`
:::

```json
{
  "proxies": {
    "default": {
      "httpProxy": "http://192.168.50.125:7890",
      "httpsProxy": "http://192.168.50.125:7890",
      "noProxy": "localhost,127.0.0.1,192.168.*,10.*,172.*"
    }
  }
}
```

## Dockerfile

[Dockerfile reference](https://docs.docker.com/reference/dockerfile/)

> [!TIP]
>
> 1. 使用多阶段的方式构建镜像。
> 2. 测试阶段建议使用多个 RUN，这样构建效率高点，测试完成后再把多个 run 命令合并。

> [!IMPORTANT]
>
> 镜像缓存问题。比如 git clone 最新代码时需要在 build 阶段加上 `--no-cache` 参数，不然不会重新 clone 代码(因为你的仓库名字是一样的，构建时 docker 认为这一层没变化，不会重新构建)

## 镜像保存与加载

保存

```sh
docker save <image_id> | gzip > myimage_latest.tar.gz
```

加载

```sh
docker load < myimage_latest.tar.gz
```

## 后台运行

不执行 container 中的 CMD 或 entrypoint,直接进入 container

没有 `sleep infinity` 用 `tail -f /dev/null`

```sh
docker run -d --name debian debian:stable /bin/sh -c "sleep infinity"

```

替代镜像中的 entrypoint 命令，并让镜像以守护态运行

```sh
docker run -d --name snell --entrypoint /bin/sh snelltest:1.0.0 -c "sleep infinity"

```

## CMD & ENTRYPOINT

使用 `exec form` 不要使用 `shell form`

```dockerfile
ENTRYPOINT ["/bin/bash", "-c", "echo hello"]
CMD ["sh", "-c", "echo $HOME"]
```

```dockerfile
ENTRYPOINT ["bin/rpc_server"]
CMD [ "--address=:14700" ]
```

## Troubleshooting

### devcontainer proxy

VSCode 在启动 devcontainer 时会把当前 shell 的环境变量传递给容器, 但在container内部, `127.0.0.1`指向容器本身

编辑`devcontainer.json`文件, 配置所有请求不走代理

```json
{
  "remoteEnv": {
    "NO_PROXY": "*"
  }
}
```

或者使用`--net=host`模式

```json
{
  "runArgs": ["--net=host"]
}
```
