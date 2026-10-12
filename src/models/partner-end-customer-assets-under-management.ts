import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Assets under management for the given end customer. Required for end customers with monthly
 * service commitments.
 */
export type PartnerEndCustomerAssetsUnderManagement = {
  amount: number;
  isoCurrencyCode: string;
};

export const partnerEndCustomerAssetsUnderManagementSchema: Schema<PartnerEndCustomerAssetsUnderManagement> =
  s.object<PartnerEndCustomerAssetsUnderManagement>({
    amount: s.float64(),
    isoCurrencyCode: s.string(),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
    },
  });
