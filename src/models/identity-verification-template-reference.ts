import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityVerificationTemplateReference = {
  id: string;
  version: number;
};

export const identityVerificationTemplateReferenceSchema: Schema<IdentityVerificationTemplateReference> =
  s.object<IdentityVerificationTemplateReference>({
    id: s.string(),
    version: s.number(),
  });
