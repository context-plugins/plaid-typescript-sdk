import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authSupportedMethodsSchema, type AuthSupportedMethods } from "./auth-supported-methods.js";

export type AuthMetadata = {
  supportedMethods: AuthSupportedMethods | null;
};

export const authMetadataSchema: Schema<AuthMetadata> = s.object<AuthMetadata>({
  supportedMethods: s.nullable(s.lazy(() => authSupportedMethodsSchema)),
  _keysMap: {
    supportedMethods: "supported_methods",
  },
});
