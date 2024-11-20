/*
 * Copyright (c) 2023-Present Jonathan MASSUCHETTI.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { setHttpClientLogger } from '@cbjsdev/http-client';
import { pino, stdTimeFunctions } from 'pino';

import { appConfig } from 'src/config.js';
import { setLogger } from 'src/logger.js';

export const testLogger = pino({
  enabled: appConfig.LOG_ENABLED,
  level: appConfig.LOG_LEVEL,
  timestamp: stdTimeFunctions.isoTime,
  transport: {
    target: 'pino/file',
    options: {
      destination: `vitest-pino.log`,
      mkdir: true,
      append: true,
      sync: true,
    },
  },
});

setLogger(testLogger);
setHttpClientLogger(testLogger);