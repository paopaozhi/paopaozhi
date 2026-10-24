FROM node:22-alpine AS builder

# 设置工作目录
WORKDIR /app

# 安装pnpm
RUN npm install -g pnpm

# 先只拷贝依赖文件，利用docker缓存层（改代码不重新装包）
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 安装依赖
RUN pnpm install --frozen-lockfile

# 拷贝全部源码
COPY . .

# Nuxt4 生产构建，输出到 .output
RUN pnpm run build


FROM node:22-alpine AS runner

WORKDIR /app

# 创建非root用户，不要用root跑服务
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nuxt

# 从构建阶段拷贝产物，只拷贝 .output，不拷贝源码、依赖
COPY --from=builder --chown=nuxt:nodejs /app/.output /app/.output

# 切换用户
USER nuxt

# Nuxt 默认端口 3000
EXPOSE 3000

# 环境变量：Nuxt 服务端口
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# 启动 nuxt 服务
CMD ["node", ".output/server/index.mjs"]
