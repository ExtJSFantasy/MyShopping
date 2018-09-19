<template>
	<view>
		<view class="uni-list" style="height: 260upx;display: flex;justify-content: center;background-color: rgb(61,68,76);">
			<view class="uni-list-cell" style="display: block;">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<view class="uni-media-list">
						<view class="uni-media-list-logo">
							<image v-if="myInfo.myPhoto" style="border-radius: 50%;" :src="myInfo.myPhoto"></image>
						</view>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top" style="color:rgb(82, 174, 149)">{{myInfo.myName}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis" style="color: #F8F8F8;">{{myInfo.myUniversity}}</view>
						</view>
					</view>
				</view>
				<view style="display: flex;">
					<view style="flex: 1;text-align: right;font-size: 32upx;color: #F8F8F8;padding-right: 20upx;border-right: solid 1upx rgb(82, 174, 149);"
					 class="uni-icon uni-icon-star-filled">关注了0人</view>
					<!-- <view style="height: 100%;width: 1upx;background-color: red;"></view> -->
					<view style="flex: 1;text-align: left;font-size: 32upx;color: #F8F8F8;padding-left: 20upx;" class="uni-icon uni-icon-person-filled">关注者0人</view>
				</view>
			</view>
		</view>
		<view class="uni-card md-center md-card md-card-resize">
			<view class="md-my-work-item-center item-center">
				<view>54</view>
				<view class="md-my-work-font">成就值</view>
			</view>
			<view class="md-my-work-item-center item-center">
				<view>0</view>
				<view class="md-my-work-font">被采纳</view>
			</view>
			<view class="md-my-work-item-center item-center">
				<view>0</view>
				<view class="md-my-work-font">获赞</view>
			</view>
			<view class="md-my-work-item-center item-center">
				<view>54</view>
				<view class="md-my-work-font">答对题</view>
			</view>
			<view class="md-my-work-item-center item-center">
				<view>0</view>
				<view class="md-my-work-font">编程通过</view>
			</view>
		</view>
		<view class="uni-card md-card-resize">
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in fArea" :key="index">
					<view class="uni-list-cell-navigate uni-navigate-right">
						{{item.des}}
					</view>
				</view>
			</view>
		</view>
		<view class="uni-card md-card-resize">
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in sArea" :key="index">
					<view class="uni-list-cell-navigate uni-navigate-right">
						{{item.des}}
						<text class="uni-badge" style="background-color: transparent;margin-right: 20upx;" v-text="item.num"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-card md-card-resize">
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in tArea" :key="index">
					<view class="uni-list-cell-navigate uni-navigate-right">
						{{item.des}}
						<text class="uni-badge" style="background-color: transparent;margin-right: 20upx;" v-text="item.num"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-card md-card-resize">
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in foArea" :key="index">
					<view class="uni-list-cell-navigate uni-navigate-right">
						{{item.des}}
						<text class="uni-badge" style="background-color: transparent;margin-right: 20upx;" v-text="item.num"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-card md-card-resize">
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in fiArea" :key="index">
					<view class="uni-list-cell-navigate uni-navigate-right">
						{{item.des}}
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
				myInfo: {
					id: 1,
					myPhoto: '../../static/shuijiao.jpg',
					myName: 'Running snail',
					myUniversity: '郑州大学',
					myFocus: '',
					beFocus: '',
				},
				fArea: [{
						id: 1,
						icon: '',
						des: '错题练习'
					},
					{
						id: 2,
						icon: '',
						des: '错题浏览'
					}
				],
				sArea: [{
						id: 1,
						icon: '',
						des: '练习试卷',
						num: 16
					},
					{
						id: 2,
						icon: '',
						des: '回答问题',
						num: 0
					},
					{
						id: 3,
						icon: '',
						des: '发表帖子',
						num: 0
					}
				],
				tArea: [{
						id: 1,
						icon: '',
						des: '收藏题目',
						num: 2
					},
					{
						id: 2,
						icon: '',
						des: '收藏帖子',
						num: 3
					}
				],
				foArea: [{
					id: 1,
					icon: '',
					des: '我的打卡',
					num: 10
				}],
				fiArea: [{
					id: 1,
					icon: '',
					des: '设置'
				}]
			}
		}
	}
</script>

<style>
	@import "../../common/uni.css";
	@import "../../common/icon.css";

	.uni-icon-star-filled:before {
		color: rgb(82, 174, 149);
	}

	.uni-icon-person-filled:before {
		color: rgb(82, 174, 149);
	}

	.uni-list:before {
		background-color: transparent;
	}

	.md-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.md-card-resize {
		margin-top: 0 !important;
		padding-left: 0 !important;
		margin-left: 0 !important;
		padding-right: 0 !important;
		margin-right: 0 !important;
	}

	.md-grid-img {
		height: 70upx !important;
		width: 60upx !important;
	}

	.md-grid-text {
		padding-top: 30upx;
	}

	.md-my-work {
		flex: 2;
		height: 100%;
		background-color: rgb(82, 174, 149);
		border-top-right-radius: 80upx;
		border-bottom-right-radius: 80upx;
	}

	.md-my-work-clock {
		font-size: 36upx;
		color: #F8F8F8;
	}



	.item-center {
		text-align: center;
	}

	.md-my-work-item-center {
		flex: 1;
	}

	.md-my-work-font {
		font-size: 24upx;
		color: #929292;
	}

	.md-card {
		height: 120upx;
	}
</style>
