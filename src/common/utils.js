const formatDate = function(time,format='yyyy-mm-dd HH:MM'){
  if(!time){
    return ''
  }
  const date = new Date(time);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month >=10 ? month : '0' + month;
  let day = date.getDate();
  day = day >=10 ? day : '0' + day;
  let hour = date.getHours();
  hour = hour >=10 ? hour : '0' + hour;
  let minute = date.getMinutes();
  minute = minute >=10 ? minute : '0' + minute;
  let second = date.getSeconds();
  second = second >=10 ? second : '0' + second;
  const regAry = [
    {
      reg:/y+/,
      value:year
    },
    {
      reg:/m+/,
      value:month
    },
    {
      reg:/d+/,
      value:day
    },
    {
      reg:/H+/,
      value:hour
    },
    {
      reg:/M+/,
      value:minute
    }
  ]
  let formatDate = format;
  regAry.forEach(item=>{
    formatDate = formatDate.replace(item.reg,item.value);
  })
  return formatDate
}
const countTime = function(time){
  let now = new Date()
  time = new Date(time)
  if(now.getFullYear() - time.getFullYear() > 0){
      return now.getFullYear() - time.getFullYear() + "年前"
  }else if(now.getMonth() - time.getMonth() > 0){
      return now.getMonth() - time.getMonth() + "月前"
  }else if(now.getDate() - time.getDate() > 0){
      return now.getDate() - time.getDate() + "日前"
  }else if(now.getHours() - time.getHours() > 0){
      return now.getHours() - time.getHours() + "小时前"
  }else if(now.getMinutes() - time.getMinutes() > 0){
      return now.getMinutes() - time.getMinutes() + "分钟前"
  }else{
      return now.getSeconds() - time.getSeconds() + "秒前"
  }
}
export {
  formatDate,
  countTime
}
