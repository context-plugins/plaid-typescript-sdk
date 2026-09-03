import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankStatementUploadAccountOwnerAddressSchema,
  type CreditBankStatementUploadAccountOwnerAddress,
} from "./credit-bank-statement-upload-account-owner-address.js";

export type CreditBankStatementUploadAccountOwner = {
  name: string | null;
  address: CreditBankStatementUploadAccountOwnerAddress;
};

export const creditBankStatementUploadAccountOwnerSchema: Schema<CreditBankStatementUploadAccountOwner> =
  s.object<CreditBankStatementUploadAccountOwner>({
    name: s.nullable(s.string()),
    address: creditBankStatementUploadAccountOwnerAddressSchema,
  });
