import { be_computed_pair_ } from '@ctx-core/nanostores'
import { nullish__none_ } from 'ctx-core/nullish'
import { top_layer$_ } from '../top_layer/index.js'
export const [
	top_layer_zIndex$_,
	top_layer_zIndex_,
] = be_computed_pair_(
	ctx=>top_layer$_(ctx),
	top_layer=>nullish__none_([top_layer], ()=>
		top_layer ? top_layer.zIndex : null),
	{ id: 'top_layer_zIndex' })
export { top_layer_zIndex$_ as top_layer_zIndex__ }
