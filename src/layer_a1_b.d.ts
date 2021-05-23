import { Writable$ } from '@ctx-core/store';
import type { layer_Ctx } from './layer_Ctx';
export declare const layer_a1_b: import("@ctx-core/object").Be<layer_Ctx, "layer_a1", layer_a1_T>;
export interface Layer {
    zIndex: number;
}
export declare type $layer_a1_T = Layer[];
export interface layer_a1_T extends Writable$<$layer_a1_T> {
    push_layer_a1: (...in_layer_a1: $layer_a1_T) => void;
    unshift_layer_a1: (...in_layer_a1: $layer_a1_T) => void;
    remove_layer_a1: (...in_layer_a1: $layer_a1_T) => void;
}
export { layer_a1_b as b__a1__layer };
