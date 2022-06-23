// Copyright (c) 2022, Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import type { BasePayload } from '_messages/payloads/BasePayload';

export interface GetAccount extends BasePayload {
    type: 'get-account';
}