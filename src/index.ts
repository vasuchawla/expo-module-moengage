import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoMoengage.web.ts
// and on native platforms to ExpoMoengage.ts
import ExpoMoengageModule from './ExpoMoengageModule';
import ExpoMoengageView from './ExpoMoengageView';
import { ChangeEventPayload, ExpoMoengageViewProps } from './ExpoMoengage.types';

// Get the native constant value.
export const PI = ExpoMoengageModule.PI;

export function hello(): string {
  return ExpoMoengageModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoMoengageModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoMoengageModule ?? NativeModulesProxy.ExpoMoengage);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoMoengageView, ExpoMoengageViewProps, ChangeEventPayload };
