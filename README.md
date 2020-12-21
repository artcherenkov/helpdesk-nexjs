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
7) `prisma introspect`
8) `prisma generate`

Все, теперь модель (таблица) доступна в базе данных.

```
model Issues {
  id            Int      @default(autoincrement()) @id
  createdAt     DateTime @default(now())
  topic         String
  client        String
  type          String
  product       String
  department    String
  responsible   String
  status        String
  dueDate       String
  actualDueDate String
  lastAnswer    String
  priority      String
  isExpired     String
  description   String
}

model Users {
  id            Int      @default(autoincrement()) @id
  createdAt     DateTime @default(now())
  name      String
  surname   String
  password  String
}
```
