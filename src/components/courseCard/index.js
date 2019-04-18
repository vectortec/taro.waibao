/*
 * @Author: 蔡江旭
 * @Description: 课程卡片组件
 * @props {Array} course 课程卡片的数据
 * 
 * @props {function} onClick (course) 点击触发的事件
 * @LastEditors: 蔡江旭
 * @Date: 2019-04-08 10:02:25
 * @LastEditTime: 2019-04-16 18:32:49
 */
import isValidElement from 'nervjs'
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
        const { className, style, course = {}, cardTitle = '', coverImage, children } = this.props;
        const newClassName = classNames(styles.courseCard, className);

        let titleProps = {};
        let titleChild = [];
        console.log('cardTitle', cardTitle);

        if (Array.isArray(cardTitle)) {
            titleChild = cardTitle;
        } else {
            titleProps = {
                dangerouslySetInnerHTML: { __html: cardTitle }
            };
        }
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
                      src={coverImage}
                    />
                </View>
                {/* 相关信息区域 */}
                <View className={styles.detailBox}>
                    <View
                      className={styles.title}
                      // eslint-disable-next-line taro/no-spread-in-props
                      {...titleProps}
                    >{titleChild}</View>
                    {children}
                </View>
            </View>
        )
    }
}
