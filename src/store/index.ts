import {create, type UseBoundStore} from "zustand/react";
import type {StoreApi} from "zustand/vanilla";

interface MacbookStoreType {
    color: string;
    setColor: (color: string) => void;
    scale: number;
    setScale: (scale: number) => void;
    texture: string;
    setTexture: (texture: string) => void;
    reset: () => void;
}

const useMacBookStore: UseBoundStore<StoreApi<MacbookStoreType>> = create((set) => ({
    color: '#2e2c2e',
    setColor: (color: string) => set({color}),
    scale: 0.08,
    setScale: (scale: number) => set({scale}),

    texture: '/videos/feature-1.mp4',
    setTexture: (texture: string) => set({texture}),

    reset: () => set({color: '#2e2c2e', scale: 0.08, texture: '/videos/feature-1.mp4'})
}));
export default useMacBookStore;