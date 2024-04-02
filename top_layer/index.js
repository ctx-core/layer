import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { layer_a_ } from '../layer/index.js'
export const [
	top_layer$_,
	top_layer_,
] = id_be_memo_pair_(
	'top_layer',
	ctx=>layer_a_(ctx)[layer_a_(ctx).length - 1])
export { top_layer$_ as top_layer__ }
