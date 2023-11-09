import * as React from 'react';

import { ExpoMoengageViewProps } from './ExpoMoengage.types';

export default function ExpoMoengageView(props: ExpoMoengageViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
