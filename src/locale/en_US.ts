const localeValues = {
  form: {
    common: {
      inputPlaceholder: 'Please enter ',
      selectPlaceholder: 'Please select ',
      uploadPlaceholder: 'Please upload ',
      inputRequired: 'Please enter ${label}',
      selectRequired: 'Please select ${label}',
      uploadRequired: 'Please upload ${label}',
      ok: 'OK',
      cancel: 'Cancel',
      nodata: 'no data'
    },
    date: {
      unit: {
        second: '',
        minute: '',
        hour: '',
        day: '',
        week: '',
        month: '',
        quarter: '',
        year: ''
      },
      weekday(num: number) {
        switch (num) {
          case 1:
            return 'Mon';
          case 2:
            return 'Tue';
          case 3:
            return 'Wed';
          case 4:
            return 'Thu';
          case 5:
            return 'Fri';
          case 6:
            return 'Sat';
          case 7:
            return 'Sun';
          default:
            return num;
        }
      }
    },
    input: {
      invalid: 'Please enter correct ${label}'
    },
    upload: {
      fileTypeMessage: 'Only %s files are supported',
      fileSizeMessage: 'Please select files less than %sM',
      deleteTiptext: 'Confirm deletion'
    }
  },
  captcha: {
    initText: 'Get Verification Code',
    runText: 'Reacquired after %ss',
    resetText: 'Get Verification Code Again',
    loadingText: 'Sending'
  },
  scrollLoadView: {
    default: 'Scroll bottom to load more',
    loading: 'Loading',
    done: 'All loaded',
    error: 'Fail to load'
  }
};

export default localeValues;
