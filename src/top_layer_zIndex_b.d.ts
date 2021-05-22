import { Readable$ } from '@ctx-core/store';
import { top_layer_Ctx } from './top_layer_b';
export interface top_layer_zIndex_Ctx extends top_layer_Ctx {
    top_layer_zIndex?: top_layer_zIndex_T;
}
export declare const top_layer_zIndex_b: import("@ctx-core/object").Be<top_layer_zIndex_Ctx, "top_layer_zIndex", top_layer_zIndex_T>;
export declare type $top_layer_zIndex_T = number;
export interface top_layer_zIndex_T extends Readable$<$top_layer_zIndex_T> {
}
