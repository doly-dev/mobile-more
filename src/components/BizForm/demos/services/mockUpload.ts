import { waitTime } from 'util-helpers';

const upload = async (file: File) => {
  console.log(file);
  await waitTime();
  return {
    url: URL.createObjectURL(file),
    fssId: Math.random().toString(16).substring(2)
  };
};

export default upload;
