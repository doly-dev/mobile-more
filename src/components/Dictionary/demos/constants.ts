// 审核状态
// 1-审核中 2-审核通过 3-审核不通过
export enum Approve {
  Processing = 1,
  Approve,
  Refused
}

// 审核状态选项
export const ApproveOptions = [
  {
    label: '审核中',
    value: Approve.Processing,
    // props: {
    //   style: {
    //     color: '#1A7BF1'
    //   }
    // }
    tagProps: {
      color: 'primary'
    }
  },
  {
    label: '审核通过',
    value: Approve.Approve,
    props: {
      style: {
        color: '#12C306'
      }
    },
    tagProps: {
      color: 'success'
    }
  },
  {
    label: '审核失败',
    value: Approve.Refused,
    props: {
      style: {
        color: '#F11A1A'
      }
    },
    tagProps: {
      color: 'danger'
    }
  }
];
