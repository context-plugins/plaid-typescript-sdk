import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/transfer/configuration/get` */
export type TransferConfigurationGetResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * The max limit of dollar amount of a single transfer (decimal string with two digits of
   * precision e.g. "10.00").
   *
   * @deprecated
   */
  maxSingleTransferAmount: string;
  /**
   * The max limit of dollar amount of a single credit transfer (decimal string with two digits of
   * precision e.g. "10.00").
   */
  maxSingleTransferCreditAmount: string;
  /**
   * The max limit of dollar amount of a single debit transfer (decimal string with two digits of
   * precision e.g. "10.00").
   */
  maxSingleTransferDebitAmount: string;
  /**
   * The max limit of sum of dollar amount of credit transfers in last 24 hours (decimal string with
   * two digits of precision e.g. "10.00").
   */
  maxDailyCreditAmount: string;
  /**
   * The max limit of sum of dollar amount of debit transfers in last 24 hours (decimal string with
   * two digits of precision e.g. "10.00").
   */
  maxDailyDebitAmount: string;
  /**
   * The max limit of sum of dollar amount of credit and debit transfers in one calendar month
   * (decimal string with two digits of precision e.g. "10.00").
   *
   * @deprecated
   */
  maxMonthlyAmount: string;
  /**
   * The max limit of sum of dollar amount of credit transfers in one calendar month (decimal string
   * with two digits of precision e.g. "10.00").
   */
  maxMonthlyCreditAmount: string;
  /**
   * The max limit of sum of dollar amount of debit transfers in one calendar month (decimal string
   * with two digits of precision e.g. "10.00").
   */
  maxMonthlyDebitAmount: string;
  /** The currency of the dollar amount, e.g. "USD". */
  isoCurrencyCode: string;
};

export const transferConfigurationGetResponseSchema: Schema<TransferConfigurationGetResponse> =
  s.object<TransferConfigurationGetResponse>({
    requestId: s.string(),
    maxSingleTransferAmount: s.string(),
    maxSingleTransferCreditAmount: s.string(),
    maxSingleTransferDebitAmount: s.string(),
    maxDailyCreditAmount: s.string(),
    maxDailyDebitAmount: s.string(),
    maxMonthlyAmount: s.string(),
    maxMonthlyCreditAmount: s.string(),
    maxMonthlyDebitAmount: s.string(),
    isoCurrencyCode: s.string(),
    _keysMap: {
      requestId: "request_id",
      maxSingleTransferAmount: "max_single_transfer_amount",
      maxSingleTransferCreditAmount: "max_single_transfer_credit_amount",
      maxSingleTransferDebitAmount: "max_single_transfer_debit_amount",
      maxDailyCreditAmount: "max_daily_credit_amount",
      maxDailyDebitAmount: "max_daily_debit_amount",
      maxMonthlyAmount: "max_monthly_amount",
      maxMonthlyCreditAmount: "max_monthly_credit_amount",
      maxMonthlyDebitAmount: "max_monthly_debit_amount",
      isoCurrencyCode: "iso_currency_code",
    },
  });
