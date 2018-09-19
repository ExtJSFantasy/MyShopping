<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell" v-for="(community,index) in communitys" :key="index">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<view class="uni-icon md-community-title" :class="['uni-icon-'+community.type]" v-text="community.title"></view>
					<view class="md-community-badge">
						<view v-if="community.imgSrc" class="md-community-badge-cicle"></view>
						<image class="md-community-badge" :src="community.imgSrc" />
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
				communitys: [{
						id: 1,
						title: '讨论区',
						type: 'weixin',
						imgSrc: '../../static/shuijiao.jpg'
					},
					{
						id: 2,
						title: '排行榜',
						type: 'paperplane'
					},
					{
						id: 3,
						title: '打卡动态',
						type: 'starhalf',
						imgSrc: '../../static/shuijiao.jpg'
					},
					{
						id: 4,
						title: '热门校招企业推荐',
						type: 'star-filled'
					},
					{
						id: 5,
						title: '领资料',
						type: 'star-filled'
					}
				]
			}
		}
	}
</script>

<style>
	@import "../../common/uni.css";
	@import "../../common/icon.css";

	.md-community-title:before {
		font-size: 36upx;
		padding-right: 20upx;
	}

	.md-community-badge {
		position: relative;
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		margin-right: 20upx;
	}

	.md-community-badge-cicle {
		position: absolute;
		width: 10upx;
		height: 10upx;
		top: -3upx;
		right: 0upx;
		background-color: red;
		border-radius: 100%;
	}

	/* 用于适应大屏幕pad */
	@media screen and (max-width:400px) {
		.md-community-title {
			font-size: 32upx;
		}
	}
</style>
