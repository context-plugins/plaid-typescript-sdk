import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerEndCustomerAssetsUnderManagement = {
  amount: number;
  isoCurrencyCode: string;
};

export const partnerEndCustomerAssetsUnderManagementSchema: Schema<PartnerEndCustomerAssetsUnderManagement> =
  s.object<PartnerEndCustomerAssetsUnderManagement>({
    amount: s.number(),
    isoCurrencyCode: s.string(),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
    },
  });
