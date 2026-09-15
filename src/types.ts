export type TabType = 'gesture' | 'webar' | 'hologram' | 'blueprint';

export interface ColorRange {
  name: string;
  colorHex: string;
  hMin: number;
  hMax: number;
  sMin: number;
  sMax: number;
  vMin: number;
  vMax: number;
}

export interface TrackingPoint {
  x: number;
  y: number;
  radius: number;
  detected: boolean;
  rawCount: number;
}

export interface GestureEvent {
  type: 'hover' | 'click' | 'swipe_left' | 'swipe_right' | 'swipe_up' | 'swipe_down';
  x: number;
  y: number;
  timestamp: number;
}

export interface HologramPreset {
  id: string;
  name: string;
  category: string;
  description: string;
  scaleMetres: number;
  rimColor: string;
}

export interface KeystoneCorners {
  topLeft: { x: number; y: number };
  topRight: { x: number; y: number };
  bottomRight: { x: number; y: number };
  bottomLeft: { x: number; y: number };
}
