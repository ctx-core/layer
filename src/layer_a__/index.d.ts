import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
export declare const layer_a__:Be<WritableAtom_<Layer[]>>
export { layer_a__ as layer_a$_ }
export declare function layer_a__push(ctx:Ctx, ...in_layer_a:Layer[]):void
export declare function layer_a__unshift(ctx:Ctx, ...in_layer_a:Layer[]):void
export declare function layer_a__remove(ctx:Ctx, ...in_layer_a:Layer[]):void
export interface Layer {
	zIndex:number
}
