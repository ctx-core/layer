import type { Layer, layer_a1_T } from './layer_a1_b';
import type { Readable$ } from '@ctx-core/store';
import type { top_layer_zIndex_T } from './top_layer_zIndex_b';
export interface layer_Ctx {
    layer_a1?: layer_a1_T;
    top_layer?: Readable$<Layer | undefined>;
    top_layer_zIndex?: top_layer_zIndex_T;
}
