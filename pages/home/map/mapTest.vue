<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map id="map" :latitude="latitude" :longitude="longitude" :polyline="pxds" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}],
				pxds: [{
					points: [{
						latitude: 39.909,
						longitude: 116.39742
					}, {
						latitude: 39.90,
						longitude: 116.39
					}],
					color: '#000000AA',
					width: 2,
					dottedLine: false
				}]
			}
		},
		methods: {

		},
		mounted: function() {
			
		}
	}
</script>
<style>
	map {
		width: 100%;
		height: 600upx;
	}
</style>
