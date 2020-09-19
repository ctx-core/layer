import { Writable } from 'svelte/store';
export interface Layer {
    zIndex: number;
}
export interface type__a1__layer extends Writable<Layer[]> {
    push__a1__layer: (...a1__layer__: Layer[]) => void;
    unshift__a1__layer: (...a1__layer__: Layer[]) => void;
    remove__a1__layer: (...a1__layer__: Layer[]) => void;
}
export declare const b__a1__layer: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__a1__layer;
export declare const __a1__layer: type__a1__layer;
export declare const push__a1__layer: (...a1__layer__: Layer[]) => void, unshift__a1__layer: (...a1__layer__: Layer[]) => void, remove__a1__layer: (...a1__layer__: Layer[]) => void;
export declare const b__top__layer: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => import("svelte/store").Readable<import("@ctx-core/function").maybe<Layer, undefined>>;
export declare const __top__layer: import("svelte/store").Readable<import("@ctx-core/function").maybe<Layer, undefined>>;
export declare const b__zIndex__top__layer: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => import("svelte/store").Readable<unknown>;
export declare const __zIndex__top__layer: import("svelte/store").Readable<unknown>;
