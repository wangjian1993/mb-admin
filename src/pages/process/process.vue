<template>
	<div id="app">
		<a-card :bordered="false" :bodyStyle="{padding:'15px'}"><div id="container"></div></a-card>
	</div>
</template>

<script>
// import {init,update} from './utils/g6Utils.min.js';
import G6 from '@antv/g6';
// import insertCss from 'insert-css'

export default {
	name: 'gpolyline',
	data() {
		return {};
	},
	methods: {},
	mounted() {
		const data = {
			nodes: [
				{
					id: 'node1',
					x: 100,
					y: 100,
					// size: [300, 60],
					label: '开始',
					anchorPoints: [[0.5, 1], [0, 0.5]]
				},
				{
					id: 'node2',
					x: 100,
					y: 200,
					label: '步骤1',
					anchorPoints: [[0.5, 0], [0.5, 1]]
				},
				{
					id: 'node3',
					x: 100,
					y: 300,
					label: '步骤2',
					anchorPoints: [[0.5, 0], [1, 0.5]]
				},
				{
					id: 'node4',
					x: 400,
					y: 300,
					label: '步骤3',
					anchorPoints: [[0, 0.5], [0.5, 1]]
				},
				{
					id: 'node5',
					x: 400,
					y: 400,
					label: '步骤4',
					anchorPoints: [[0.5, 0], [0.5, 1]]
				}
			],
			edges: [
				{
					source: 'node1',
					target: 'node2',
					type: 'line',
					sourceAnchor: 0,
					// 该边连入 target 点的第 0 个 anchorPoint，
					targetAnchor: 0
				},
				{
					source: 'node2',
					target: 'node3',
					type: 'line',
					sourceAnchor: 0,
					// 该边连入 target 点的第 0 个 anchorPoint，
					targetAnchor: 0
				},
				{
					source: 'node3',
					target: 'node4',
					type: 'line',
					sourceAnchor: 1,
					// 该边连入 target 点的第 0 个 anchorPoint，
					targetAnchor: 0
				},
				{
					source: 'node4',
					target: 'node5',
					sourceAnchor: 1,
					// 该边连入 target 点的第 0 个 anchorPoint，
					targetAnchor: 0
				}
			]
		};

		const width = document.getElementById('container').scrollWidth;
		// const height = document.getElementById('container').scrollHeight || 500;
		const graph = new G6.Graph({
			container: 'container',
			width,
			height: 700,
			modes: {
				// default: ['drag-canvas', 'zoom-canvas', 'click-select']
			},
			// 节点类型及样式
			defaultNode: {
				type: 'modelRect',
				size: [150, 50],
				style: {
					fill: '#DEE9FF',
					stroke: '#5B8FF9'
				}
			},
			// 连线类型及样式
			defaultEdge: {
				type: 'polyline',
				style: {
					stroke: '#F6BD16',
					offset: 25,
					endArrow: true,
					lineWidth: 5
				}
			}
		});
		graph.data(data);
		graph.render();
		// graph.on('click', ev => {
		// 	// const shape = ev.target;
		// 	// const item = ev.item;
		// 	// if (item) {
		// 	// 	const type = item.getType();
		// 	// 	console.log(type);
		// 	// }
		// });
	}
};
</script>

<style>
#container {
	width: 100%;
	height: 100%;
	/* border: 1px saddlebrown solid; */
}
</style>
