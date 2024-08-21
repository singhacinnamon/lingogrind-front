import React, { lazy, Suspense } from 'react';

function LessonComponentLoader({ componentName, globUser}) {
  const LazyLessonComponent = lazy(() =>
    import(`./lessons/${componentName}`)
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyLessonComponent globUser={ globUser }/>
    </Suspense>
  );
}

export default LessonComponentLoader;
