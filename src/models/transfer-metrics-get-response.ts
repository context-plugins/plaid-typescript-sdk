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

/** Defines the response schema for `/transfer/metrics/get` */
export type TransferMetricsGetResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * Sum of dollar amount of debit transfers in last 24 hours (decimal string with two digits of
   * precision e.g. "10.00").
   */
  dailyDebitTransferVolume: string;
  /**
   * Sum of dollar amount of credit transfers in last 24 hours (decimal string with two digits of
   * precision e.g. "10.00").
   */
  dailyCreditTransferVolume: string;
  /**
   * Sum of dollar amount of credit and debit transfers in current calendar month (decimal string
   * with two digits of precision e.g. "10.00").
   *
   * @deprecated
   */
  monthlyTransferVolume: string;
  /**
   * Sum of dollar amount of debit transfers in current calendar month (decimal string with two
   * digits of precision e.g. "10.00").
   */
  monthlyDebitTransferVolume: string;
  /**
   * Sum of dollar amount of credit transfers in current calendar month (decimal string with two
   * digits of precision e.g. "10.00").
   */
  monthlyCreditTransferVolume: string;
  /** The currency of the dollar amount, e.g. "USD". */
  isoCurrencyCode: string;
  /** Details regarding return rates. */
  returnRates?: TransferMetricsGetReturnRates | null;
  /** Details regarding authorization usage. */
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
