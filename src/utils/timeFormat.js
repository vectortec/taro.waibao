/**
 * 
 * @param {Number} timestamp 
 * @description 资讯模块时间格式转换
 * @example 
 * 
 * timestampFormat(new Date().getTime())
 * 
 */
export function timestampFormat( timestamp ) {
  function zeroize( num ) {
      return (String(num).length === 1 ? '0' : '') + num;
  }

  let curTimestamp = parseInt(new Date().getTime()); //当前时间戳
  let timestampDiff = ( curTimestamp - timestamp ) / 1000; // 参数时间戳与当前时间戳相差秒数

  let tmDate = new Date( timestamp );  // 参数时间戳转换成的日期对象

  let Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();

  if ( timestampDiff < 5 * 60 ) { // 5分钟内
      return "刚刚";
  } else if( timestampDiff < 60 * 60 ) { // t分钟前
      return Math.floor( timestampDiff / 60 ) + "分钟前";
  }
  else if (timestampDiff < 24 * 60 * 60) { // t小时前
      return Math.floor( timestampDiff / (60 * 60))
  } else {
      return  `${Y} - ${zeroize(m)} - ${zeroize(d)}`
  }
}