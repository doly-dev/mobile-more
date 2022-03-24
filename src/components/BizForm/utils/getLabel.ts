// 获取验证信息的 label 值
function getLabel(props: any): string {
  const { label, messageVariables = {} } = props;
  return messageVariables?.label || label;
}

export default getLabel;
