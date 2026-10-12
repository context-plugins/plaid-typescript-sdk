import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authSupportedMethodsSchema, type AuthSupportedMethods } from "./auth-supported-methods.js";

/** Metadata that captures information about the Auth features of an institution. */
export type AuthMetadata = {
  /** Metadata specifically related to which auth methods an institution supports. */
  supportedMethods: AuthSupportedMethods | null;
};

export const authMetadataSchema: Schema<AuthMetadata> = s.object<AuthMetadata>({
  supportedMethods: s.nullable(s.lazy(() => authSupportedMethodsSchema)),
  _keysMap: {
    supportedMethods: "supported_methods",
  },
});
