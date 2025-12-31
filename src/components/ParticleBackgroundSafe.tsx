import React, { Suspense } from 'react';
import ParticleBackgroundFallback from './ParticleBackgroundFallback';

// Lazy load the 3D component to handle potential errors
const ParticleBackground3D = React.lazy(() => 
  import('./ParticleBackground3D').catch(() => ({
    default: ParticleBackgroundFallback
  }))
);

const ParticleBackgroundSafe: React.FC = () => {
  return (
    <Suspense fallback={<ParticleBackgroundFallback />}>
      <ParticleBackground3D />
    </Suspense>
  );
};

export default ParticleBackgroundSafe;