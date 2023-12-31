import React, { lazy, Suspense } from 'react';

function LessonComponentLoader({ componentName }) {
  const LazyLessonComponent = lazy(() =>
    import(`./lessons/${componentName}`)
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyLessonComponent />
    </Suspense>
  );
}

export default LessonComponentLoader;
