import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferMetricsGetAuthorizationUsageSchema,
  type TransferMetricsGetAuthorizationUsage,
} from "./transfer-metrics-get-authorization-usage.js";
import {
  transferMetricsGetReturnRatesSchema,
  type TransferMetricsGetReturnRates,
} from "./transfer-metrics-get-return-rates.js";

export type TransferMetricsGetResponse = {
  requestId: string;
  dailyDebitTransferVolume: string;
  dailyCreditTransferVolume: string;
  monthlyTransferVolume: string;
  monthlyDebitTransferVolume: string;
  monthlyCreditTransferVolume: string;
  isoCurrencyCode: string;
  returnRates?: TransferMetricsGetReturnRates | null;
  authorizationUsage?: TransferMetricsGetAuthorizationUsage | null;
};

export const transferMetricsGetResponseSchema: Schema<TransferMetricsGetResponse> =
  s.object<TransferMetricsGetResponse>({
    requestId: s.string(),
    dailyDebitTransferVolume: s.string(),
    dailyCreditTransferVolume: s.string(),
    monthlyTransferVolume: s.string(),
    monthlyDebitTransferVolume: s.string(),
    monthlyCreditTransferVolume: s.string(),
    isoCurrencyCode: s.string(),
    returnRates: s.optionalNullable(s.lazy(() => transferMetricsGetReturnRatesSchema)),
    authorizationUsage: s.optionalNullable(s.lazy(() => transferMetricsGetAuthorizationUsageSchema)),
    _keysMap: {
      requestId: "request_id",
      dailyDebitTransferVolume: "daily_debit_transfer_volume",
      dailyCreditTransferVolume: "daily_credit_transfer_volume",
      monthlyTransferVolume: "monthly_transfer_volume",
      monthlyDebitTransferVolume: "monthly_debit_transfer_volume",
      monthlyCreditTransferVolume: "monthly_credit_transfer_volume",
      isoCurrencyCode: "iso_currency_code",
      returnRates: "return_rates",
      authorizationUsage: "authorization_usage",
    },
  });
