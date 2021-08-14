---
title: NodeJS
---

## 源码安装NodeJS

### 安装 gcc、gcc-c++

```shell script
yum -y install gcc gcc-c++ kernel-devel
```

如果版本号低于4.9.4，请先升级`gcc`，因为`nodejs8.7.0`编译时gcc版本已经要求在4.9.4+了。否则后续编译源码时会失败！！！

### 下载源码

```shell script
wget https://nodejs.org/dist/v15.14.0/node-v15.14.0.tar.gz
```

### 解压源码

```shell script
tar -zxvf node-v15.14.0.tar.gz -C /usr/local
```

### 编译源码

```shell script
cd /usr/local/node-v15.14.0
make
```

### 安装

```shell script
make install
```

### 验证

```shell script
node -v
npm -v
```