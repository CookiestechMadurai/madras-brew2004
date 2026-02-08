import { z } from 'zod';
import { insertInquirySchema, insertMenuItemSchema, menuItems, inquiries } from './schema';

export const api = {
  menu: {
    list: {
      method: 'GET' as const,
      path: '/api/menu' as const,
      responses: {
        200: z.array(z.custom<typeof menuItems.$inferSelect>()),
      },
    },
  },
  inquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/inquiries' as const,
      input: insertInquirySchema,
      responses: {
        201: z.custom<typeof inquiries.$inferSelect>(),
        400: z.object({ message: z.string() }),
      },
    },
  },
};
