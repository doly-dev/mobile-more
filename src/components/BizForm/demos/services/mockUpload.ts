import { sleep } from 'ut2';

const upload = async (file: File) => {
  console.log(file);
  await sleep();
  return {
    url: URL.createObjectURL(file),
    fssId: Math.random().toString(16).substring(2)
  };
};

export default upload;
