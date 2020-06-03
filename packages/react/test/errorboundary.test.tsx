import * as React from 'react';

import { ErrorBoundary } from '../src/errorboundary';

describe('ErrorBoundary', () => {
  it('Does not fail', () => {
    function Bomb() {
      return <h1>{new Error('💥 CABOOM 💥')}</h1>;
    }

    create(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    );
  });
});