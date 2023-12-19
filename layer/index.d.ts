import type { be_atom_triple_T } from '@ctx-core/nanostores'
import type { Ctx } from 'ctx-core/be'
export declare const [
	layer_a$_,
	layer_a_,
	layer_a__set,
]:be_atom_triple_T<Layer[]>
export { layer_a$_ as layer_a__ }
export declare function layer_a__push(ctx:Ctx, ...in_layer_a:Layer[]):void
export declare function layer_a__unshift(ctx:Ctx, ...in_layer_a:Layer[]):void
export declare function layer_a__remove(ctx:Ctx, ...in_layer_a:Layer[]):void
export interface Layer {
	zIndex:number
}
export type layer_T = Layer
/**
 * Returns a new layer.
 */
export declare function layer__new<Obj>(obj?:Obj):Obj&Layer
