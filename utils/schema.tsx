import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const aiOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    FormData: varchar('formData'),
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt')
})