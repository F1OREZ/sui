// Copyright (c) 2022, Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import type { SuiAddress } from '@mysten/sui.js';
import type { BasePayload } from '_messages/payloads/BasePayload';

export interface GetAccountResponse extends BasePayload {
    type: 'get-account-response';
    accounts: SuiAddress[];
}
