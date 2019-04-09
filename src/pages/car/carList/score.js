import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
const score= (props)=>{
    return props.scoreList.map((item,index)=>{
        return(
            <View key={item.id}>
                {item.title}
            </View>
        )
    })
}
export default score
