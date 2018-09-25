<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map id="map" :latitude="latitude" :longitude="longitude" :polyline="pxds" :markers="covers">
				</map>
			</view>
		</view>
		<button @click="getCaputure">截屏</button>
		<image :src="testSrc"></image>
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
				}],
				testSrc: ''
			}
		},
		methods: {
			getCaputure() {
				let ws = null;
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				//#ifdef APP-PLUS
				//ws = plus.webview.currentWebview();	//这是首页的view
				ws = page.$getAppWebview();
				this.drowCaputure(ws)
				//#endif
			},
			//绘制截屏
			drowCaputure(ws) {
				var _this = this;
				let bitmap = null;
				bitmap = new plus.nativeObj.Bitmap('test');
				//将webview内容绘制到Bitmap对象中
				ws.draw(bitmap, function() {
					console.log(`成功`);
					console.log();
					_this.testSrc = bitmap.toBase64Data();
				}, function(e) {
					console.log(`失败${JSON.stringify(e)}`);
				})
			}

		},
		mounted: function() {
			let list = [{a:1},{b:2}];
			for(let a of list)

			{

				console.log(JSON.stringify(a));

			}
		}
	}
</script>
<style>
	map {
		width: 100%;
		height: 600upx;
	}
</style>
