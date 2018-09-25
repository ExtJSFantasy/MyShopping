<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell" style="display: block;" v-for="(itemList,index) in cLists" :key="index">
				<view class="uni-list-cell-navigate" style="background-color:rgb(240,239,245) !important;" :style="[index == 0 ? 'color: rgb(82, 174, 149)' : 'color: rgb(169,169,169)']"
				 v-text="itemList.title"></view>
				<view class="uni-list">
					<view class="uni-list-cell" v-for="(innerItem,inIndex) in itemList.data" :key="inIndex">
						<view class="uni-list-cell-navigate uni-navigate-right" @click="onClickIntention(innerItem)">
							<!-- <view><text v-text="innerItem.subName"></text><text v-text="innerItem.startDate"></text>-<text v-text="innerItem.endTime"></text></view> -->
							<text :style="[index == 0 ? 'color: rgb(82, 174, 149)' : 'color: #000000']" v-text="innerItem.subName"></text>
							<text class="uni-badge" style="margin-right: 20upx;background-color: transparent;font-size: 32upx;" v-text="innerItem.startDate+'-'+innerItem.endTime"></text>
						</view>
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
				cLists: [{
						id: 1,
						title: '2018-09-20 周四',
						data: [{
								id: 1,
								groupId: 1,
								subName: '平安寿险',
								startDate: '18:00',
								endTime: '20:00'
							},
							{
								id: 2,
								groupId: 1,
								subName: 'CVTE',
								startDate: '19:00',
								endTime: '21:00'
							},
							{
								id: 3,
								groupId: 1,
								subName: '思科',
								startDate: '19:00',
								endTime: '21:00'
							},
							{
								id: 4,
								groupId: 1,
								subName: '今日头条',
								startDate: '19:00',
								endTime: '20:00'
							}
						]
					},
					{
						id: 2,
						title: '2018-09-21 周五',
						data: [{
								id: 1,
								groupId: 2,
								subName: '寒武纪科技',
								startDate: '18:00',
								endTime: '20:00'
							},
							{
								id: 2,
								groupId: 2,
								subName: '拼多多',
								startDate: '19:00',
								endTime: '21:00'
							},
							{
								id: 3,
								groupId: 2,
								subName: 'BOSS直聘',
								startDate: '19:00',
								endTime: '21:00'
							},
							{
								id: 4,
								groupId: 2,
								subName: '深信服',
								startDate: '19:00',
								endTime: '20:00'
							}
						]
					},
					{
						id: 3,
						title: '2018-09-22 周六',
						data: [{
								id: 1,
								groupId: 3,
								subName: '努比亚',
								startDate: '18:00',
								endTime: '20:00'
							},
							{
								id: 2,
								groupId: 3,
								subName: '网易互娱',
								startDate: '19:00',
								endTime: '21:00'
							}
						]
					}
				]
			}
		},
		onNavigationBarButtonTap(e) {
			//console.log(`您点击了${JSON.stringify(e)}`);
			uni.showToast({
				title: "哈哈。。。",
				mask: true,
				duration: 1500
			})
		},
		methods: {
			onClickIntention(data) {
				/* uni.showToast({
					title: `${data.subName}`,
					icon:'success',
					mask: true,
					duration: 1500
				}) */
				const path = '/pages/home/';
				let url = `${path}wcalendar/listDetails?groupId=${data.groupId}&listId=${data.id}`;
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style>
	@import '../../../common/uni.css';
</style>
