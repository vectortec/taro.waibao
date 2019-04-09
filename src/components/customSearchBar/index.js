/*
 * @Author: 蔡江旭
 * @Description: 自定义的搜索条组件
 * @props {Array} value 课程卡片的数据
 * 
 * @props {function} onChange (inputValue) 输入框改变时触发的事件
 * @props {function} onFocus () 输入框聚焦时触发的事件
 * @props {function} onBlur () 输入框失去焦点时触发的事件
 * @props {function} onSubmit () 输入框按下完成键时触发的事件
 * @props {function} onCancel () 取消按钮点击时触发的事件
 * 
 * @LastEditors: 蔡江旭
 * @Date: 2019-04-08 10:02:25
 * @LastEditTime: 2019-04-09 17:31:27
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Form } from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'


function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
      return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}

export default class CustomSearchBar extends Component {
    state = {
        inputValue: '',
        focus: false,
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps: ', nextProps);
        if ('value' in nextProps && nextProps.value !== this.state.inputValue) {
            this.setState({
                inputValue: nextProps.value,
            })
        }
    }

    /**
     * @Description: 输入框改变事件
     * @params {event} e
     * @return: 
     * @LastEditors: 蔡江旭
     * @LastEditTime: Do not edit
     * @Date: 2019-04-09 16:32:01
     */
    searchChange = (e) => {
        const inputValue = e.target.value;
        console.log('searchChange', inputValue);

        this.setState({
            inputValue,
        });

        if (this.props.onChange) {
            this.props.onChange(inputValue);
        }
    }

    /**
     * @Description: input获取焦点事件
     * @params: 
     * @return: 
     * @LastEditors: 蔡江旭
     * @LastEditTime: Do not edit
     * @Date: 2019-04-09 16:51:45
     */
    onFocus = () => {
        this.setState({
            focus: true,
        });

        if (this.props.onFocus) {
            this.props.onFocus();
        }
    }

    /**
     * @Description: input失焦事件
     * @params {event} e
     * @return: 
     * @LastEditors: 蔡江旭
     * @LastEditTime: Do not edit
     * @Date: 2019-04-09 16:52:09
     */
    onBlur = (e) => {
        console.log('onBlur');
        this.onBlurTimeout = onNextFrame(() => {
            if (document.activeElement !== e.target) {
                this.setState({
                    focus: false,
                });
            }
        });

        if (this.props.onBlur) {
          this.props.onBlur();
        }
    }

    /**
     * @Description: 清空input的输入值
     * @params {Boolean} focus
     * @return: 
     * @LastEditors: 蔡江旭
     * @LastEditTime: Do not edit
     * @Date: 2019-04-09 16:52:40
     */
    clearInput = (focus = true) => {
        console.log('clearInput');

        this.setState({
            inputValue: '',
            focus,
        });
        if (this.props.onChange) {
            this.props.onChange('');
        }
    }

    /**
     * @Description: input框回车事件
     * @params: 
     * @return: 
     * @LastEditors: 蔡江旭
     * @LastEditTime: Do not edit
     * @Date: 2019-04-09 16:59:07
     */
    onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit', this.state.inputValue);

        if (this.props.onSubmit) {
          this.props.onSubmit(this.state.inputValue || '');
        }
    }

    /**
     * @Description: 取消按钮点击事件
     * @params: 
     * @return: 
     * @LastEditors: 蔡江旭
     * @LastEditTime: Do not edit
     * @Date: 2019-04-09 17:08:47
     */
    onCancel = () => {
        if (this.props.onCancel) {
            this.props.onCancel(this.state.inputValue || '');
        } else {
            this.clearInput(false);
        }
    }


    render () {
        const { inputValue, focus } = this.state;
        const { className, style } = this.props;
        const newClassName = classNames(styles.customSearchBar, className);

        return (
            <View
              className={newClassName}
              style={style}
            >
                <Form
                  onSubmit={this.onSubmit}
                  className={styles.searchForm}
                >
                    <View className={styles.searchInputBox}>
                        <View className={classNames('search-bar-icon', styles.searchIcon)}>
                            <Text className={styles.icon}></Text>
                        </View>
                        <Input
                          ref={el => (this.inputRef = el)}
                          className={styles.searchInput}
                          value={inputValue}
                          onInput={this.searchChange}
                          type='text'
                          placeholder='输入内容'
                          onFocus={this.onFocus}
                          onBlur={this.onBlur}
                          focus={focus}
                        />
                        <View
                          className={classNames('search-bar-icon', styles.searchClear)}
                          style={{ display: focus && inputValue && inputValue.length ? 'block' : '' }}
                          onClick={this.clearInput}
                        ></View>
                    </View>
                    <View className={styles.searchBtn} onClick={this.onCancel}>
                        <Text>取消</Text>
                    </View>
                </Form>
            </View>
        )
    }
}
