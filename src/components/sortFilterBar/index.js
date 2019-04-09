/*
 * @Author: 蔡江旭
 * @Description: 
 * @props {Array} sortOptions 排序tag
 * @props {Array} filterOptions 过滤的tag
 * @props {Object} sortInfo  {} 默认排序的key和方式
 * @props {Array} filterInfo [0, 0] 默认选择的过滤tag
 * 
 * @props {function} onChange (sortInfo, filterInfo)点击触发的事件
 * @LastEditors: 蔡江旭
 * @Date: 2019-04-08 10:02:25
 * @LastEditTime: 2019-04-09 14:31:32
 */
import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'

export default class SortFilterBar extends PureComponent {
    state = {
        isShowFilter: false,
        sortInfo: {},
        filterInfo: [0, 0],
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps: ', nextProps);
        const newState = {};
        for (const key in this.state) {
            if (this.state.hasOwnProperty(key) && nextProps[key]) {
                const ele = nextProps[key];
                newState[key] = ele;
            }
        }

        this.setState(...newState);
    }
    /**
     * @Description: 排序条件触发
     * @params: 
     * @return: 
     * @LastEditors: 蔡江旭
     * @LastEditTime: Do not edit
     * @Date: 2019-04-08 15:05:40
     */
    sortClick = (item, order, index) => {
        console.log('sort click', item, order, index);
        const { filterInfo } = this.state;
        const sortInfo = {
            key: item.value,
            order,
        }
        this.setState({
            sortInfo,
        })
        this.onInternalChange(sortInfo, filterInfo);
    }

    /**
     * @Description: filter-tag点击事件
     * @params {Number} index 第几行的索引值
     * @params {Number} value tag的value值
     * @return: 
     * @LastEditors: 蔡江旭
     * @LastEditTime: Do not edit
     * @Date: 2019-04-09 09:09:06
     */
    selectFilterTag = (index, value) => {
        console.log('selectFilterTag', index, value);
        const { filterInfo, sortInfo } = this.state;

        filterInfo[index] = value;
        this.setState({
            filterInfo,
        })
        this.onInternalChange(sortInfo, filterInfo);
    }

    /**
     * @Description: 统一处理onChange回调
     * @params: {Array} ...args
     * @return: 
     * @LastEditors: 蔡江旭
     * @LastEditTime: Do not edit
     * @Date: 2019-04-08 15:23:33
     */
    onInternalChange = (...args) => {
        const { onChange } = this.props;
        if (typeof onChange === 'function') {
            onChange(...args);
        }
    }

    /**
     * @Description: 控制filter的显示
     * @params {Boolean} isShowFilter
     * @return: 
     * @LastEditors: 蔡江旭
     * @LastEditTime: Do not edit
     * @Date: 2019-04-09 08:44:04
     */
    showFilter = (isShowFilter) => {
        this.setState({
            isShowFilter,
        })
    }

    render () {
        const { className, style, isShowFilter, sortInfo, filterInfo } = this.state;
        const newClassName = classNames(styles.sortFilterBar, className);
        const { sortOptions = [], filterOptions = [] } = this.props;

        return (
            <View className={newClassName} style={style}>
                {/* 排序tag */}
                <View className={styles.sortList}>
                    {sortOptions.map((ele, index) => {
                        const isCurrnentSortItem = sortInfo && sortInfo.key === ele.value;
                        const toOrder = isCurrnentSortItem ? (sortInfo.order === 'desc' ? 'asc' : 'desc') : 'desc';
                        return (
                        <View className='sort-tag' key={index} onClick={() => this.sortClick(ele, toOrder, index)}>
                            <Text>{ele.name}</Text>
                            {ele.canOrder &&
                                <View className={'sort-order ' + (isCurrnentSortItem && sortInfo.order ? 'order-' + sortInfo.order : '')}>
                                    <Text className='sort-order-item asc'></Text>
                                    <Text className='sort-order-item desc'></Text>
                                </View>
                            }
                        </View>
                        )
                    }
                    )}
                    <View className='sort-tag filter-btn' onClick={() => this.showFilter(!isShowFilter)}>
                        <Text className='filter-icon'></Text>
                    </View>
                </View>
                {/* 过滤tag */}
                {isShowFilter && 
                    <View className={styles.filterBox}>
                        <View className={styles.filterList}>
                            {filterOptions.map((arr, index) => (
                                <View className={styles.filterItem} key={index}>
                                    {arr.map((item, itemIndex) => (
                                        <View
                                          className={'filter-tag' + (filterInfo && filterInfo[index] === item.value ? ' active' : '')}
                                          key={itemIndex}
                                          onClick={() => this.selectFilterTag(index, item.value)}
                                        >
                                            <Text>{item.name}</Text>
                                        </View>
                                    ))}
                                </View>
                            )
                            )}
                        </View>
                    </View>
                }
            </View>
        )
    }
}
