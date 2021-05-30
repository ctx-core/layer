/*
 * This file was generated by `npm run generate_ctx_I_file` in @ctx-core/dev-tools
*/
import { _b } from '@ctx-core/object'
import type { layer_Ctx } from './layer_Ctx'
import type { layer_a$_T } from './layer_a$_b'
import { layer_a$_b } from './layer_a$_b'
import type { top_layer$_T } from './top_layer$_b'
import { top_layer$_b } from './top_layer$_b'
import type { top_layer_zIndex$_T } from './top_layer_zIndex$_b'
import { top_layer_zIndex$_b } from './top_layer_zIndex$_b'
export interface layer_ctx_I {
	layer_a$?:layer_a$_T
	top_layer$?:top_layer$_T
	top_layer_zIndex$?:top_layer_zIndex$_T
	layer_b_h?:layer_b_h_T
}
export interface layer_b_h_T {
	get layer_a$():layer_a$_T
	get top_layer$():top_layer$_T
	get top_layer_zIndex$():top_layer_zIndex$_T
}
export function layer_b_h_b(ctx:layer_Ctx):layer_b_h_T {
	return _b<layer_Ctx, 'layer_b_h'>('layer_b_h', ()=>{
		return {
			get layer_a$() { return layer_a$_b(ctx) },
			get top_layer$() { return top_layer$_b(ctx) },
			get top_layer_zIndex$() { return top_layer_zIndex$_b(ctx) }
		}
	})(ctx)
}