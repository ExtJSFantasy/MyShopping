<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map id="map" :latitude="latitude" :longitude="longitude" :polyline="pxds" :markers="covers">
				</map>
			</view>
		</view>
		<!-- <view class="body-view">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db" v-model="openOff"></view>
				<switch @change="switchChange"/>
			</view>
		</view> -->
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db" v-text="openOff"></view>
				<switch @change="switchChange" />
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
				testSrc: '',
				openOff: '关闭',
				timer: null,
				top:'30upx'
			}
		},
		onLoad: function() {

		},
		/* 界面卸载时清除轮询器 */
		onUnload: function() {
			if (this.timer) {
				clearInterval(this.timer);
				this.timer = null;
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
				let _this = this;
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
			},
			switchChange: function(e) {
				console.log('switch1 发生 change 事件，携带值为' + e.detail.value);
				if (e.detail.value) {
					this.openOff = '打开';
					this.timer = setInterval(function() {
						uni.vibrateLong({
							success: function() {
								console.log('success');
							}
						});
						clearInterval();
					}, 1000)
				} else {
					this.openOff = '关闭';
					if (this.timer) {
						clearInterval(this.timer);
						this.timer = null;
					}
				}
			},
			switch2Change: function(e) {
				console.log('switch2 发生 change 事件，携带值为' + e.detail.value)
			}

		},
		mounted: function() {
			let list = [{
				a: 1
			}, {
				b: 2
			}];
			for (let a of list)

			{

				console.log(JSON.stringify(a));

			}
		}
	}
</script>
<style>
	@import '../../../common/uni.css';

	map {
		width: 100%;
		height: 600upx;
		margin-top: var(top);
	}
</style>
