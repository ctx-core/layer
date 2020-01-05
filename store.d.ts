import { Writable } from 'svelte/store';
export interface Layer {
    zIndex: number;
}
export interface Writable__a1__layer extends Writable<Layer[]> {
    push__a1__layer: (...a1__layer__: Layer[]) => void;
    unshift__a1__layer: (...a1__layer__: Layer[]) => void;
    remove__a1__layer: (...a1__layer__: Layer[]) => void;
}
export declare const b__a1__layer: (ctx?: any, opts?: any) => Writable__a1__layer;
export declare const __a1__layer: Writable__a1__layer;
export declare const push__a1__layer: (...a1__layer__: Layer[]) => void, unshift__a1__layer: (...a1__layer__: Layer[]) => void, remove__a1__layer: (...a1__layer__: Layer[]) => void;
export declare const b__top__layer: (ctx?: any, opts?: any) => import("svelte/store").Readable<any>;
export declare const __top__layer: import("svelte/store").Readable<any>;
export declare const b__zIndex__top__layer: (ctx?: any, opts?: any) => import("svelte/store").Readable<any>;
export declare const __zIndex__top__layer: import("svelte/store").Readable<any>;
