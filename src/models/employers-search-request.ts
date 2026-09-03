import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EmployersSearchRequest = {
  clientId?: string;
  secret?: string;
  query: string;
  products: string[];
};

export const employersSearchRequestSchema: Schema<EmployersSearchRequest> = s.object<EmployersSearchRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  query: s.string(),
  products: s.array(s.string()),
  _keysMap: {
    clientId: "client_id",
  },
});
