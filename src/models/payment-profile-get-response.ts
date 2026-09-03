import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentProfileStatusSchema, type PaymentProfileStatus } from "./payment-profile-status.js";

export type PaymentProfileGetResponse = {
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
  status: PaymentProfileStatus;
  requestId: string;
};

export const paymentProfileGetResponseSchema: Schema<PaymentProfileGetResponse> =
  s.object<PaymentProfileGetResponse>({
    updatedAt: s.dateTime(),
    createdAt: s.dateTime(),
    deletedAt: s.nullable(s.dateTime()),
    status: paymentProfileStatusSchema,
    requestId: s.string(),
    _keysMap: {
      updatedAt: "updated_at",
      createdAt: "created_at",
      deletedAt: "deleted_at",
      requestId: "request_id",
    },
  });
