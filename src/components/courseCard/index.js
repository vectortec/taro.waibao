/*
 * @Author: 蔡江旭
 * @Description: 课程卡片组件
 * @props {Array} course 课程卡片的数据
 * 
 * @props {function} onClick (course) 点击触发的事件
 * @LastEditors: 蔡江旭
 * @Date: 2019-04-08 10:02:25
 * @LastEditTime: 2019-04-09 15:05:06
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'

export default class CourseCard extends Component {
    state = {
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps: ', nextProps);
    }

    /**
     * @Description: 卡片点击事件
     * @params {Object} course
     * @return: 
     * @LastEditors: 蔡江旭
     * @LastEditTime: Do not edit
     * @Date: 2019-04-09 14:35:27
     */
    cardClick = (course) => {
        const { onClick } = this.props;
        if (typeof onClick === 'function') {
            onClick(course);
        }
    }

    render () {
        const { className, style, course = {} } = this.props;
        const newClassName = classNames(styles.courseCard, className);

        return (
            <View
              className={newClassName}
              style={style}
              onClick={() => this.cardClick(course)}
            >
                <View className={styles.imageBox}>
                    <Image
                      mode='widthFix'
                      className={styles.img}
                      src={course.coverPicture}
                    />
                </View>
                {/* 相关信息区域 */}
                <View className={styles.detailBox}>
                    <View className={styles.title}>
                        {course.name}
                    </View>
                    <View className={styles.descBox}>
                        <Text>{course.totalBuyCount}人学过</Text>
                        <Text className={styles.teacherBox}>{course.teacherName}老师</Text>
                    </View>
                    <View className={styles.tagPriceBox}>
                        <View className={styles.tag}>{course.activiteTypeName}</View>
                        <Text className={styles.activePrice}>￥{course.activitePrice}</Text>
                        <Text className={styles.price}>￥{course.price}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
