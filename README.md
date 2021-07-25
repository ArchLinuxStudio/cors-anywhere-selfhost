# cors-anywhere-selfhost

A https based cors anywhere selfhost code.

More infomation please read the origin project [cors-anywhere](https://github.com/Rob--W/cors-anywhere) README.

## Usage

First apply for a certificate use [acme.sh](https://github.com/acmesh-official/acme.sh). It will generate several files, we only use `YOUR.DOMAIN.com.key` and `fullchain.cer`.

Second put the js file in your server.

Finally, run it.

```bash
nohup node cors-anywhere-selfhost.js &
```

## Renew

Normally it will automatically renew. If there is no automatic renewal, use the following command:

```bash
~/.acme.sh/acme.sh --force --issue --dns dns_cf -d YOUR.DOMAIN.com
```

---

Ref:

1. [ss-libev 插件 v2ray-plugin 的安装使用](https://gist.github.com/shuanghua/c9c448f9bd12ebbfd720b34f4e1dd5c6)
