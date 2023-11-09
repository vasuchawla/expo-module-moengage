import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoMoengageViewProps } from './ExpoMoengage.types';

const NativeView: React.ComponentType<ExpoMoengageViewProps> =
  requireNativeViewManager('ExpoMoengage');

export default function ExpoMoengageView(props: ExpoMoengageViewProps) {
  return <NativeView {...props} />;
}
