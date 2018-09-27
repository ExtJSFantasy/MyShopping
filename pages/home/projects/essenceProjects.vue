<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(project,key) in projects" :key="key" @click="onClickGoDetails">
				<view class="uni-media-list">
					<view class="uni-media-list-logo">
						<!-- <image v-if="showImg" :src="project.img"></image> -->
						<image class="image" :class="{lazy:!project.show}" :data-index="key" @load="onLoad" :src="project.show?project.src:''" />
						<image class="image defaul" :class="{loaded:project.loaded}" :src="defaultSrc" />
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top uni-ellipsis" style="font-size: 32upx;">{{project.title}}</view>
						<view class="uni-icon uni-icon-person uni-media-list-text-bottom uni-ellipsis" style="font-size: 28upx;">热度:&nbsp;&nbsp;36200</view>
						<view class="uni-icon uni-icon-refresh uni-media-list-text-bottom uni-ellipsis" style="font-size: 28upx;">题目数量:&nbsp;&nbsp;72</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showImg: false,
				// show: false,
				windowHeight: 0,
				defaultSrc: '../../../static/60x60.png',
				projects: [{
						id: 1,
						title: "前端面试经典题目合集（HTML+CSS）",
						hot: "36200",
						titleNum: "72",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					},
					{
						id: 2,
						title: "剑指Offer",
						hot: "2828759",
						titleNum: "66",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					},
					{
						id: 3,
						title: "2017校招真题编程练习",
						hot: "36200",
						titleNum: "72",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					},
					{
						id: 4,
						title: "2016校招真题编程练习",
						hot: "36200",
						titleNum: "72",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					},
					{
						id: 5,
						title: "数据库SQL实战(新增16道)",
						hot: "36200",
						titleNum: "72",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					},
					{
						id: 6,
						title: "leetcode在线编程训练",
						hot: "36200",
						titleNum: "148",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					},
					{
						id: 7,
						title: "JS能力测评",
						hot: "135492",
						titleNum: "61",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					},
					{
						id: 8,
						title: "前端面试经典题目合集（HTML+CSS）",
						hot: "36200",
						titleNum: "72",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					},
					{
						id: 9,
						title: "前端面试经典题目合集（HTML+CSS）",
						hot: "36200",
						titleNum: "72",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					},
					{
						id: 10,
						title: "前端面试经典题目合集（HTML+CSS）",
						hot: "36200",
						titleNum: "72",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					},
					{
						id: 11,
						title: "前端面试经典题目合集（HTML+CSS）",
						hot: "36200",
						titleNum: "72",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					},
					{
						id: 12,
						title: "前端面试经典题目合集（HTML+CSS）",
						hot: "36200",
						titleNum: "72",
						src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						show: false,
						loaded: false
					}
				]
			}
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 3000)
			console.log(`下拉刷新`);
		},
		onLoad:function(){
			/* uni.startPullDownRefresh();
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},500) */
		},
		/* 页面卸载 */
		onUnload:function(){
		},
		mounted:function(){
			uni.startPullDownRefresh();
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},500)
		},
		methods: {
			load() {
				uni.createSelectorQuery().selectAll('.lazy').boundingClientRect((images) => {
					images.forEach((image, index) => {
						if (image.top <= this.windowHeight) {
							this.projects[image.dataset.index].show = true
						}
					})
				}).exec()
			},
			onLoad(e) {
				this.projects[e.target.dataset.index].loaded = true
			},
			onClickGoDetails(){
				uni.navigateTo({
					url:'/pages/home/projects/essenceProjectsItemDetails'
				})
			}
		},
		/* onLoad() {
			setTimeout(() => {
				this.showImg = true;
			}, 400)
		} */
		onLoad() {
			this.windowHeight = uni.getSystemInfoSync().windowHeight
		},
		onShow() {
			if (!this.show) {
				this.show = true
				setTimeout(() => {
					this.load()
				}, 100)
			}
		},
		onPageScroll() {
			this.load()
		}
	}
</script>

<style>
	@import '../../../common/uni.css';
	@import '../../../common/icon.css';

	.uni-icon-person:before {
		font-size: 32upx;
		margin-right: 10upx;
	}

	.uni-icon-refresh:before {
		font-size: 32upx;
		margin-right: 10upx;
	}

	.uni-media-list-logo {
		height: 130upx;
		width: 200upx;
	}

	.uni-media-list-body {
		height: 130upx;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		overflow: hidden;
	}

	.defaul {
		opacity: 1;
		transition: opacity 0.4s linear;
	}

	.defaul.loaded {
		opacity: 0;
	}
</style>
