import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { layer_Ctx } from './layer_Ctx';
declare const key = "layer_a$";
export declare const layer_a$_b: B<layer_Ctx, typeof key>;
export interface Layer {
    zIndex: number;
}
export declare type layer_a_T = Layer[];
export interface layer_a$_T extends Writable$<layer_a_T> {
    push_layer_a: (...in_layer_a: layer_a_T) => void;
    unshift_layer_a: (...in_layer_a: layer_a_T) => void;
    remove_layer_a: (...in_layer_a: layer_a_T) => void;
}
export { layer_a$_b as b__a1__layer };
