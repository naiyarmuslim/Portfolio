// FIX: Import React to use React types like React.ComponentType.
import React from 'react';

export enum View {
  Home = 'Home',
  CsSystems = 'CS & Systems',
  Ethics = 'Digital Ethics Manifesto',
  Culinary = 'Culinary Arts',
  Guidance = 'Guidance Hub',
  Story = 'Life Story & Vision',
  Travel = 'Travel & Photography',
  Contact = 'Contact & Connect',
}

export type AccentColor = 'blue' | 'teal' | 'purple' | 'orange' | 'green' | 'yellow' | 'red' | 'indigo';

export interface ViewConfig {
  id: View;
  component: React.ComponentType<{ accentColor: AccentColor }>;
  accentColor: AccentColor;
}
