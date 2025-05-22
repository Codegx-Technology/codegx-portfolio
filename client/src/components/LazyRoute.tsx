import React, { Suspense, ComponentType, LazyExoticComponent } from 'react';
import ErrorBoundary from './ErrorBoundary';

// Loading component with skeleton UI
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse space-y-4">
      <div className="h-12 w-48 bg-gray-200 rounded"></div>
      <div className="h-4 w-64 bg-gray-200 rounded"></div>
      <div className="h-4 w-56 bg-gray-200 rounded"></div>
      <div className="h-4 w-60 bg-gray-200 rounded"></div>
    </div>
  </div>
);

interface LazyRouteProps {
  component: LazyExoticComponent<ComponentType<any>>;
  props?: Record<string, any>;
}

/**
 * A wrapper component for lazy-loaded routes that includes error boundary and suspense
 */
export const LazyRoute: React.FC<LazyRouteProps> = ({ component: Component, props = {} }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyRoute;
