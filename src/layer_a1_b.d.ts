import { Writable } from '@ctx-core/store';
export declare const layer_a1_b: import("@ctx-core/object").Be<layer_a1_type, object>;
export interface Layer {
    zIndex: number;
}
export declare type $layer_a1_type = Layer[];
export interface layer_a1_type extends Writable<$layer_a1_type> {
    push_layer_a1: (...in_layer_a1: $layer_a1_type) => void;
    unshift_layer_a1: (...in_layer_a1: $layer_a1_type) => void;
    remove_layer_a1: (...in_layer_a1: $layer_a1_type) => void;
}
export { layer_a1_b as b__a1__layer };
