import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountProductAccessNullableSchema,
  type AccountProductAccessNullable,
} from "./account-product-access-nullable.js";

export type AccountAccess = {
  uniqueId: string;
  authorized?: boolean | null;
  accountProductAccess?: AccountProductAccessNullable | null;
};

export const accountAccessSchema: Schema<AccountAccess> = s.object<AccountAccess>({
  uniqueId: s.string(),
  authorized: s.optionalNullable(s.boolean()),
  accountProductAccess: s.optionalNullable(s.lazy(() => accountProductAccessNullableSchema)),
  _keysMap: {
    uniqueId: "unique_id",
    accountProductAccess: "account_product_access",
  },
});
