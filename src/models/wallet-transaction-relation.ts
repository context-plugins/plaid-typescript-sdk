import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

export type WalletTransactionRelation = {
  id?: string;
  type?: Type4;
};

export const walletTransactionRelationSchema: Schema<WalletTransactionRelation> =
  s.object<WalletTransactionRelation>({
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type4Schema)),
  });
