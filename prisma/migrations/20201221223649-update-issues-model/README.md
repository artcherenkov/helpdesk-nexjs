# Migration `20201221223649-update-issues-model`

This migration has been generated by Artem Cherenkov at 12/21/2020, 10:36:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Issues" DROP COLUMN "name",
ADD COLUMN "topic" text  NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201221222134-created-users..20201221223649-update-issues-model
--- datamodel.dml
+++ datamodel.dml
@@ -3,15 +3,15 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Issues {
   id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
-  name      String
+  topic      String
 }
 model Users {
   id          Int      @id @default(autoincrement())
```

