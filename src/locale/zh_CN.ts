const localeValues = {
  form: {
    common: {
      inputPlaceholder: '请输入',
      selectPlaceholder: '请选择',
      uploadPlaceholder: '请上传',
      inputRequired: '请输入${label}',
      selectRequired: '请选择${label}',
      uploadRequired: '请上传${label}',
      ok: '确认',
      cancel: '取消',
      nodata: '暂无数据'
    },
    date: {
      unit: {
        second: '秒',
        minute: '分',
        hour: '时',
        day: '日',
        week: '周',
        month: '月',
        quarter: '季',
        year: '年'
      },
      weekday(num: number) {
        switch (num) {
          case 1:
            return '周一';
          case 2:
            return '周二';
          case 3:
            return '周三';
          case 4:
            return '周四';
          case 5:
            return '周五';
          case 6:
            return '周六';
          case 7:
            return '周日';
          default:
            return num;
        }
      }
    },
    input: {
      invalid: '请输入正确的${label}'
    },
    upload: {
      fileTypeMessage: '只支持上传 %s 文件',
      fileSizeMessage: '请选择小于 %sM 的图片',
      deleteTiptext: '是否确认删除'
    }
  },
  captcha: {
    initText: '获取验证码',
    runText: '%s秒后重新获取',
    resetText: '重新获取验证码',
    loadingText: '获取中'
  },
  scrollLoadView: {
    default: '滚动底部加载更多',
    loading: '加载中',
    done: '全部加载完成',
    error: '加载失败'
  }
};

export default localeValues;
