import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferBalanceTypeSchema, type TransferBalanceType } from "./transfer-balance-type.js";

export type TransferBalanceGetRequest = {
  clientId?: string;
  originatorClientId?: string | null;
  secret?: string;
  type?: TransferBalanceType;
};

export const transferBalanceGetRequestSchema: Schema<TransferBalanceGetRequest> =
  s.object<TransferBalanceGetRequest>({
    clientId: s.optional(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    secret: s.optional(s.string()),
    type: s.optional(s.lazy(() => transferBalanceTypeSchema)),
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
    },
  });
