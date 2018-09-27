<template>
	<view class="container">
		<!-- overflow:scroll; overflow-x:hidden; -webkit-overflow-scrolling : touch; /*解决ios上滑动不流畅*/ -->
		<!-- <swiper :indicator-dots="false" :autoplay="false" :interval="3000" :duration="1000" style="height: 100%;">
			<swiper-item style="height: 100%;" v-for="(detailList,index) in detailLists" :key="index">
				<view class="swiper-item" style="height: 100%;">
					<view>
						<view><text style="padding-left: 15upx;padding-right: 20upx;">前端面试经典题目合集（HTML+CSS）</text><text style="position: absolute;right: 10upx;color: rgb(82, 174, 149);">{{index+1}}/72</text></view>
						<view class="uni-card" style="margin-left: 0;margin-right: 0;">
							<view style="padding-left: 15upx;padding-right: 20upx;color: rgb(82, 174, 149);">(问答题)</view>
							<view style="padding-left: 15upx;padding-right: 20upx;">浏览器页面有哪三层构成，分别是什么，作用是什么?</view>
							<view style="padding-left: 15upx;padding-right: 20upx;">
								<text class="uni-icon uni-icon-checkmarkempty">参考答案</text>
								<view>构成：结构层、表示层、行为层</view>
								<view>分别是：HTML、CSS、JavaScript</view>
								<view>作用：HTML实现页面结构，CSS完成页面的表现与风格，JavaScript实现一些客户端的功能与业务</view>
							</view>
						</view>
						<button style="background-color: #F8F8F8;color: rgb(82, 174, 149);">查看解析和讨论</button>
					</view>
				</view>
			</swiper-item>
		</swiper> -->
		<view class="content" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" :style="[mLeft > 0 ? {'margin-left': mLeft + 'px'} : {'margin-right': mLeft + 'px'}]">
			<view class="md-content-detail">
				<view><text style="padding-left: 15upx;padding-right: 20upx;">前端面试经典题目合集（HTML+CSS）</text><text style="position: absolute;right: 10upx;color: rgb(82, 174, 149);">{{index}}/72</text></view>
				<view class="uni-card" style="margin-left: 0;margin-right: 0;padding-bottom: 60upx;padding-top: 15upx;">
					<view style="padding-left: 15upx;padding-right: 20upx;color: rgb(82, 174, 149);">(问答题)</view>
					<view style="padding-left: 15upx;padding-right: 20upx;">浏览器页面有哪三层构成，分别是什么，作用是什么?</view>
					<view style="padding-left: 15upx;padding-right: 20upx;">
						<text class="uni-icon uni-icon-checkmarkempty" style="padding-top: 30upx;">参考答案</text>
						<view style="padding-top: 30upx;">构成：结构层、表示层、行为层</view>
						<view style="padding-top: 30upx;">分别是：HTML、CSS、JavaScript</view>
						<view style="padding-top: 30upx;">作用：HTML实现页面结构，CSS完成页面的表现与风格，JavaScript实现一些客户端的功能与业务</view>
					</view>
				</view>
				<button style="background-color: #F8F8F8;color: rgb(82, 174, 149);">查看解析和讨论</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollWithAnimation: true,
				upperThreshold: 100,
				owerThreshold: 100,
				detailLists: [{
						id: 1
					},
					{
						id: 2
					},
					{
						id: 3
					},
					{
						id: 4
					},
					{
						id: 5
					},
					{
						id: 6
					},
					{
						id: 7
					},
					{
						id: 8
					},
					{
						id: 19
					},
					{
						id: 10
					},
					{
						id: 11
					},
					{
						id: 12
					},
					{
						id: 13
					}
				],
				startX: 0,
				startY: 0,
				endX: 0,
				endY: 0,
				deviceInfo: {},
				index: 1,
				mLeft: '0'
			}
		},
		onLoad: function() {
			let _this = this;
			_this.getSystemInfo(function(data) {
				_this.deviceInfo = data;
				console.log(JSON.stringify(_this.deviceInfo));
			});
			uni.startPullDownRefresh();
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 500)
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 3000)
			console.log(`下拉刷新:${this.index}`);
		},
		methods: {
			onTouchStart(e) {
				//console.log(`起始位置:${JSON.stringify(e)}`);
				this.startX = e.touches[0].pageX;
				this.startY = e.touches[0].clientY;
			},
			onTouchMove(e) {
				//console.log(`滑动:${JSON.stringify(e)}`);
				//e.preventDefault();
				//当屏幕有多个touch或者页面被缩放过，就不执行move操作
				if (e.touches.length > 1 || e.scale && e.scale !== 1) return;
				this.endX = e.touches[0].pageX;
				this.endY = e.touches[0].pageY;
				this.mLeft = this.endX - this.startX;
			},
			onTouchEnd(e) {
				console.log(`结束位置:${JSON.stringify(e)}`);
				let distanceX = this.endX - this.startX,
					distanceY = this.endY - this.startY;
				let ws = null;
				//移动端设备的屏幕宽度
				//var clientHeight = document.documentElement.clientHeight;
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				ws = page.$getAppWebview();
				let clientWidth = ws.clientWidth;
				//console.log(JSON.stringify(ws));
				//判断是否横向滑动了，而不是屏幕上单击了
				if (this.startX != Math.abs(distanceX)) {
					//在滑动的距离超过屏幕高度的20%时，做某种操作
					if (Math.abs(distanceX) > this.deviceInfo.windowWidth * 0.3) {
						e.preventDefault(); //阻止触摸事件的默认行为，即阻止滚屏
						//手指向右滑动为负值，向左为正值
						console.log(distanceX);
						distanceX < 0 ? this.nextSubject() : this.upSubject();
						console.log('结束');
					}
				}
				//判断是否纵向滑动了，而不是屏幕上单击了
				if (this.startY != Math.abs(distanceY)) {
					//在滑动的距离超过屏幕高度的20%时，做某种操作
					if (Math.abs(distanceY) > this.deviceInfo.windowHeight * 0.2) {
						//向下滑实行函数downRefresh，向上滑实行函数upRefresh
						//手指向右滑动为负值，向左为正值
						console.log(distanceY);
						distanceY < 0 ? this.upRefresh() : this.downRefresh();
						console.log('结束');
					}
				}
				this.startX = this.startY = this.endX = this.endY = 0;
				this.mLeft = 0;
			},
			//向左滑动
			nextSubject() {
				console.log(`下一题`);
				this.index++
				/* uni.showLoading({
					title:`加载中...`,
					mask: true,
					success:function(){
						//uni.hideToast();
					}
				}),
				setTimeout(function(){
					uni.hideLoading();
				},1000) */
				uni.startPullDownRefresh();
				setTimeout(function() {
					uni.stopPullDownRefresh()
				}, 500)
			},
			//向右滑动
			upSubject() {
				if (this.index > 1) {
					this.index--;
					uni.startPullDownRefresh();
					setTimeout(function() {
						uni.stopPullDownRefresh()
					}, 500)
				}
				console.log(`上一题`)
			},
			//向下滑动
			downRefresh() {
				console.log(`下拉`)
			},
			//向上滑动
			upRefresh() {
				console.log(`上滑`)
			},
			getSystemInfo(callback) {
				uni.getSystemInfo({
					success: function(res) {
						callback(res)
					},
					fail: function(e) {
						uni.showToast({
							title: `获取失败&{e}`,
							duration: 1500,
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	@import '../../../common/uni.css';
	@import '../../../common/icon.css';

	/* 预编译语言不支持  #ifdef  */
	.uni-list-cell-left {
		padding: 0 !important;
	}

	.container {
		height: 100%;
		box-sizing: border-box;

		.content {
			height: 100%;

			.md-content-detail {
				width: 740upx;
				position: relative;
				margin: auto;
			}
		}
	}

	.uni-icon-checkmarkempty:before {
		font-size: 48upx;
		color: rgb(82, 174, 149);
	}

	.uni-list-cell-hover {
		background-color: tanceparent;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		height: 300upx;
		/* line-height: 300upx;
		text-align: center;
		font-size: 36upx; */
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		/* height: 300upx;
		text-align: center; 
		font-size: 36upx;*/
	}
</style>
