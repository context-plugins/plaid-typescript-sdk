import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationDocParsingConfigSchema,
  type IncomeVerificationDocParsingConfig,
} from "./income-verification-doc-parsing-config.js";

/** Identity object used to specify document upload */
export type LinkTokenCreateIdentity = {
  /** Used to specify whether the Link session is Identity Document Upload */
  isDocumentUpload?: boolean;
  /**
   * An array of `account_ids`. Currently can only contain one `account_id`. Must be populated if
   * using Document Upload.
   */
  accountIds?: string[];
  /**
   * An array of parsing configurations. Valid parsing configurations are `ocr` and `risk_signals`.
   * If parsing configurations are omitted, defaults to `ocr`
   */
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
