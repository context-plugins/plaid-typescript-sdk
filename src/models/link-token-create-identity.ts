import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationDocParsingConfigSchema,
  type IncomeVerificationDocParsingConfig,
} from "./income-verification-doc-parsing-config.js";

export type LinkTokenCreateIdentity = {
  isDocumentUpload?: boolean;
  accountIds?: string[];
  parsingConfigs?: IncomeVerificationDocParsingConfig[];
};

export const linkTokenCreateIdentitySchema: Schema<LinkTokenCreateIdentity> =
  s.object<LinkTokenCreateIdentity>({
    isDocumentUpload: s.optional(s.boolean()),
    accountIds: s.optional(s.array(s.string())),
    parsingConfigs: s.optional(s.array(s.lazy(() => incomeVerificationDocParsingConfigSchema))),
    _keysMap: {
      isDocumentUpload: "is_document_upload",
      accountIds: "account_ids",
      parsingConfigs: "parsing_configs",
    },
  });
