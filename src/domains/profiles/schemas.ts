import { type } from 'arktype';

import { arkUserDocument } from 'src/database/models/user.js';

export const arkApiUserProfileOutput = type({
  profile: arkUserDocument.pick('username', 'bio', 'image').merge({
    'following?': 'boolean',
  }),
});

export type ApiUserProfileOutput = typeof arkApiUserProfileOutput.infer;
