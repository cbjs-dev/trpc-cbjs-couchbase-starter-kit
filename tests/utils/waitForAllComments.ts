import { QueryScanConsistency } from '@cbjsdev/cbjs';

import { ConduitScopeBlog } from 'src/database/ConduitClusterTypes.js';

/**
 * We query the collection with RequestPlus to ensure every document has been indexed.
 * This makes sure that queries make during our tests see all the documents, even if they are not
 * performed without RequestPlus.
 */
export async function waitForAllComments(cb: ConduitScopeBlog) {
  await cb.query('SELECT * FROM comments WHERE articleId IS NOT MISSING', {
    scanConsistency: QueryScanConsistency.RequestPlus,
  });
}
