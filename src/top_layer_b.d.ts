import { Readable$ } from '@ctx-core/store';
import { Layer, layer_a1_Ctx } from './layer_a1_b';
export interface top_layer_Ctx extends layer_a1_Ctx {
    top_layer?: Readable$<Layer | undefined>;
}
export declare const top_layer_b: import("@ctx-core/object").Be<top_layer_Ctx, "top_layer", Readable$<Layer | undefined>>;
