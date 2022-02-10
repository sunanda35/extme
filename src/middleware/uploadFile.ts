import multer from 'multer';

const uploadFile = (destination: any) => {
  return multer({ dest: destination });
};

export default uploadFile;
