# Migration `20200810154608-added-creator-in-todos`

This migration has been generated by Aryansh Mahato at 8/10/2020, 9:16:08 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Todo" ADD COLUMN "creator" text  NOT NULL DEFAULT E'annonymus';
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200810154608-added-creator-in-todos
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,15 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+model Todo {
+  id    Int     @default(autoincrement()) @id
+  title String
+  done  Boolean @default(false)
+  creator String @default("annonymus")
+}
```


