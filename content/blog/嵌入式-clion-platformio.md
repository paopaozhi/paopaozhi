---
title: "clion 配置platformio环境"
description: 使用Clion配置platformio环境，使其可以更好的编辑嵌入式。
date: 2023-11-26
image: "https://th.bing.com/th/id/OIP.dEDpwXT7XGIAEmOQFw4xMgHaEK?w=297&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
minRead: 8
author:
  name: 赵志豪
  avatar:
    src: /picture.png
    alt: 赵志豪
---

## 安装

环境：conda环境

### 1. 创建新的虚拟环境

   ```bash
   conda create -n flushbonad python=3.10
   ```

### 2. 安装platformio

   ```python
   pip install platformio
   ```

### 3. 添加环境变量

![image-20231126122250466](/blog/embedded-clion/image-20231126122250466-1700972575031-1.png)

### 4. 安装 `platformio for clion`

![image-20231126122350111](/blog/embedded-clion/image-20231126122350111.png)

## 测试

新建项目

![image-20231126122454005](/blog/embedded-clion/image-20231126122454005.png)

!!! info
    自行选择对应的开发板，这里选择树莓派 pico

clion会自行构建，等待构建成功

![image-20231126122652452](/blog/embedded-clion/image-20231126122652452.png)
