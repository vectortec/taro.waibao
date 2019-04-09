import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import { add, minus, asyncAdd } from '@/actions/counter'
import Loading from '@/components/loading'
import SearchBar from '@/components/customSearchBar'
import SortFilterBar from '@/components/sortFilterBar'
import CourseCard from '@/components/courseCard'

import styles from './index.module.scss'


// @connect(state => state.counter, {add, minus, asyncAdd})
class CourseList extends Component {

  config = {
    navigationBarTitleText: 'CourseList'
  }

  state = {
    loading: false,
    sortOptions: [{
      name: '综合',
      value: 1,
    }, {
      name: '最热',
      value: 2,
      canOrder: true,
    }, {
      name: '最新',
      value: 3,
      canOrder: true,
    }, {
      name: '价格',
      value: 4,
      canOrder: true,
    }],
    filterOptions: [
      [{
        name: '全部价格',
        value: 0,
      }, {
        name: '付费',
        value: 1,
      }, {
        name: '免费',
        value: 2,
      }],
      [{
        name: '全部状态',
        value: 0,
      }, {
        name: '秒杀',
        value: 1,
      }, {
        name: '抢购',
        value: 2,
      }, {
        name: '积分',
        value: 3,
      }]
    ],
    course: {
      "activiteId": 3,
      "activitePoint": 10000,
      "activitePrice": 99,
      "activitePublishStatus": 2,
      "activiteStatus": 2,
      "activiteType": 1,
      "activiteTypeName": "积分",
      "activityEndTime": "2019-04-09 00:00:00",
      "activityRepertory": 72,
      "basicBuyCount": 66,
      "buyCount": 1,
      "buyPrice": 0,
      "courseId": 2007,
      "coverPicture": "http://hq-expert.oss-cn-shenzhen.aliyuncs.com/hangjia/image/DDoDAwq8c8e6twaEvfAbBKrZuGBX.jpg",
      "dynamicCoverType": 1,
      "evaluateCount": 0,
      "evaluatePoint": 0,
      "goodsCategoryId": 8,
      "goodsCategoryName": "",
      "id": 16,
      "introduction": "<p>课程简介：</p>\n<p><span lang=\"EN-US\">&nbsp;</span></p>\n<p>本课程主要讲解会计初入职场：包括入职流程、快速上手财务工作、开启良好职场习惯。</p>\n<p><span lang=\"EN-US\">&nbsp;</span></p>\n<p>课程特色：</p>\n<p><span lang=\"EN-US\">&nbsp;</span></p>\n<p>本课程采用微课精讲和真景实操相结合形式讲解会计初入职场！</p>\n<p><span lang=\"EN-US\">&nbsp;</span></p>\n<p>其中微课精讲：着重详细介绍会计初入职场相关知识点！</p>\n<p><span lang=\"EN-US\">&nbsp;</span></p>\n<p>其中真景实操：采用全面拍摄现实工作场景以及工作内容来感受会计初入职场的真实工作体验！</p>\n<p><span lang=\"EN-US\">&nbsp;</span></p>\n<p>本课程老师经验丰富，授课幽默生动，颜值爆表！</p>\n<p><span lang=\"EN-US\">&nbsp;</span></p>\n<p>本课程只讲干货，并且轻松易懂，学会无压力！</p>",
      "isAudition": false,
      "isCollection": 0,
      "isRecommend": 0,
      "issueStatus": 1,
      "issueTime": null,
      "keyframes": ["http://hq-expert.oss-cn-shenzhen.aliyuncs.com/hangjia/image/rKlAUaL66-ljcUd9G9Ok1RTyqUFl.jpg", "http://hq-expert.oss-cn-shenzhen.aliyuncs.com/hangjia/image/1xgowWbEqmB3bhGi-62p9aFLqUTI.jpg", "http://hq-expert.oss-cn-shenzhen.aliyuncs.com/hangjia/image/8Oh9N3NwyeQUpfrfIgtnKrN93f3w.jpg", "http://hq-expert.oss-cn-shenzhen.aliyuncs.com/hangjia/image/f1I1GTsWQujO6MVz0ZXiMoUjDRS8.jpg", "http://hq-expert.oss-cn-shenzhen.aliyuncs.com/hangjia/image/BrCoSoyRHYGBzswZX-r42VTl8km0.jpg", "http://hq-expert.oss-cn-shenzhen.aliyuncs.com/hangjia/image/wsdrUtuX7AAZJ8X0CEn4W3CHlcn0.jpg"],
      "name": "“会计入门+出纳变形记”之初入职场技能",
      "pointDescribe": "",
      "price": 0,
      "rootCategoryId": 5,
      "rootCategorySort": 1,
      "stockCount": 999999993,
      "sysDate": null,
      "teacherIds": "4",
      "teacherName": "",
      "teacherNames": "",
      "teachers": [],
      "totalBuyCount": 67,
      "type": 2,
      "validityDate": -1,
      "videoUrl": "",
      "weightValue": 0
    }

  }

  // 慎用
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    console.log(Taro.getEnv())
    console.log(Taro.ENV_TYPE)
  }
  render () {
    const { sortOptions, filterOptions, course } = this.state;
    if (this.state.loading) {
      return <Loading />
    }

    return (
      <View className={styles.courseList}>
        <SearchBar />
        <SortFilterBar
          className={styles.sortFilterBox}
          sortOptions={sortOptions}
          filterOptions={filterOptions}
          onChange={console.log}
        />
        <View className={styles.courseList}>

        </View>
        <CourseCard course={course} />
      </View>
    )
  }
}

export default CourseList
