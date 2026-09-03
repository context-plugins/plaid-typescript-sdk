import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferConfigurationGetResponse = {
  requestId: string;
  maxSingleTransferAmount: string;
  maxSingleTransferCreditAmount: string;
  maxSingleTransferDebitAmount: string;
  maxDailyCreditAmount: string;
  maxDailyDebitAmount: string;
  maxMonthlyAmount: string;
  maxMonthlyCreditAmount: string;
  maxMonthlyDebitAmount: string;
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
