import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankStatementUploadAccountOwnerAddressSchema,
  type CreditBankStatementUploadAccountOwnerAddress,
} from "./credit-bank-statement-upload-account-owner-address.js";

/**
 * An object containing data about the owner of the bank account for the uploaded bank statement.
 */
export type CreditBankStatementUploadAccountOwner = {
  /** The name of the account owner */
  name: string | null;
  /** Address on the uploaded bank statement */
  address: CreditBankStatementUploadAccountOwnerAddress;
};

export const creditBankStatementUploadAccountOwnerSchema: Schema<CreditBankStatementUploadAccountOwner> =
  s.object<CreditBankStatementUploadAccountOwner>({
    name: s.nullable(s.string()),
    address: creditBankStatementUploadAccountOwnerAddressSchema,
  });
