import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";
import {
  sandboxPublicTokenCreateRequestOptionsSchema,
  type SandboxPublicTokenCreateRequestOptions,
} from "./sandbox-public-token-create-request-options.js";

export type SandboxPublicTokenCreateRequest = {
  clientId?: string;
  secret?: string;
  institutionId: string;
  initialProducts: Products[];
  options?: SandboxPublicTokenCreateRequestOptions;
  userToken?: string;
  userId?: string;
};

export const sandboxPublicTokenCreateRequestSchema: Schema<SandboxPublicTokenCreateRequest> =
  s.object<SandboxPublicTokenCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    institutionId: s.string(),
    initialProducts: s.array(s.lazy(() => productsSchema)),
    options: s.optional(s.lazy(() => sandboxPublicTokenCreateRequestOptionsSchema)),
    userToken: s.optional(s.string()),
    userId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      institutionId: "institution_id",
      initialProducts: "initial_products",
      userToken: "user_token",
      userId: "user_id",
    },
  });
