# H-UI 面板

使用 [h-ui 面板](https://github.com/jonssonyan/h-ui)

## docker 部署 {#docker-deployment}

> [!TIP]
> 可以使用 [shell 脚本](https://github.com/jonssonyan/h-ui?tab=readme-ov-file#deployment)一键部署,也是 h-ui 作者推荐的方式

> port default 8081
>
> 额外映射 `/h-ui/my_acme_dir` 目录

```sh
docker run -d --cap-add=NET_ADMIN \
  --name h-ui --restart always \
  --network=host \
  -e TZ=Asia/Shanghai \
  -v /h-ui/bin:/h-ui/bin \
  -v /h-ui/data:/h-ui/data \
  -v /h-ui/export:/h-ui/export \
  -v /h-ui/logs:/h-ui/logs \
  -v /h-ui/my_acme_dir:/h-ui/my_acme_dir \
  jonssonyan/h-ui \
  ./h-ui -p 8081
```

### docker uninstall

```sh
# 删除container
docker rm -f h-ui
# 删除image
docker rmi jonssonyan/h-ui
# 删除本地映射
rm -rf /h-ui
```

## nginx 反向代理{#nginx-reverse-proxy}

实现访问泛域名(不加端口号)跳转到 vps 上指定端口上的服务

**需要替换变量 `${example.com}`**

`vim /etc/nginx/sites-available/${example.com}`

```sh
server {
    server_name ${example.com};

    location / {
        proxy_pass https://localhost:8081;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;

    }

    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    ssl_certificate /h-ui/my_acme_dir/certificates/acme-v02.api.letsencrypt.org-directory/${example.com}/${example.com}.crt;
    ssl_certificate_key /h-ui/my_acme_dir/certificates/acme-v02.api.letsencrypt.org-directory/${example.com}/${example.com}.key;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

}

# http 自动跳转 https
server {
    listen 80 ;
    listen [::]:80 ;
    server_name ${example.com};

    return 301 https://$host$request_uri;
}
```

### nginx reload

```sh
# 软链
sudo ln -s /etc/nginx/sites-available/${example.com} /etc/nginx/sites-enabled/

# reload
sudo nginx -t
sudo systemctl reload nginx
```
