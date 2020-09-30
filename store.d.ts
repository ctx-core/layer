import { Writable, Readable } from '@ctx-core/store';
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
export declare const b__top__layer: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => any;
export declare const __top__layer: any;
export declare type $zIndex__top__layer = number;
export declare type zIndex__top__layer = Readable<$zIndex__top__layer>;
export declare const b__zIndex__top__layer: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => zIndex__top__layer;
export declare const __zIndex__top__layer: zIndex__top__layer;
