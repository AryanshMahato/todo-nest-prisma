CREATE TABLE "public"."Todo" {
    id SERIAL PRIMARY KEY NOT NULL
    title VARCHAR(255)
    done BOOLEAN NOT NULL DEFAULT false
}