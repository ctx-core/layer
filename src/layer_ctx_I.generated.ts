import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { layer_a1_T } from './layer_a1_b'
import { layer_a1_b } from './layer_a1_b'
import type { top_layer_T } from './top_layer_b'
import { top_layer_b } from './top_layer_b'
import type { top_layer_zIndex_T } from './top_layer_zIndex_b'
import { top_layer_zIndex_b } from './top_layer_zIndex_b'
export interface layer_ctx_I {
	layer_a1?:layer_a1_T
	top_layer?:top_layer_T
	top_layer_zIndex?:top_layer_zIndex_T
	layer_b_h?:layer_b_h_T
}
export interface layer_b_h_T {
	get layer_a1():layer_a1_T
	get top_layer():top_layer_T
	get top_layer_zIndex():top_layer_zIndex_T
}
export function layer_b_h_b(ctx:layer_ctx_I):B<layer_ctx_I, 'layer_b_h'> {
	return _b('layer_b_h', ()=>{
		return {
			get layer_a1() { return layer_a1_b(ctx) },
			get top_layer() { return top_layer_b(ctx) },
			get top_layer_zIndex() { return top_layer_zIndex_b(ctx) }
		}
	})
}