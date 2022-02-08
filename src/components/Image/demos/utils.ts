export function transformBase64(base64: string) {
  return `data:image/png;base64,${base64}`;
  // return base64.replace(/data:image\/(png|jpg|jpeg|gif);base64,/, '');
}
