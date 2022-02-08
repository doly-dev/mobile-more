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
    style: {
      color: '#1A7BF1'
    }
  },
  {
    label: '审核通过',
    value: Approve.Approve,
    style: {
      color: '#12C306'
    }
  },
  {
    label: '审核失败',
    value: Approve.Refused,
    style: {
      color: '#F11A1A'
    }
  }
];
