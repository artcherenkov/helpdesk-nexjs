## Как пользоваться prisma

1) Важно установить версию клиента и cli @2.1
2) `prisma init`
3) В файле .env прописать url до базы данных
4) Создать модель в файле `schema.prisma` например:
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Issues {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  name      String
}

```

5) `npx prisma migrate save --experimental`
6) `npx prisma migrate up --experimental`

Все, теперь модель (таблица) доступна в базе данных.
