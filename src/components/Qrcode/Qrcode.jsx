<<<<<<< HEAD
import React from 'react';
import { QRCode } from 'antd';

const QrCode = ({ value, width = 128, height = 100 }) => {
  return (
    <QRCode 
      value={value || '-'} 
      style={{ width: `${width}px`, height: `${height}px` }} 
    />
  );
};

export default QrCode;
=======
import React from 'react';
import { QRCode } from 'antd';

const QrCode = ({ value, width = 128, height = 100 }) => {
  return (
    <QRCode 
      value={value || '-'} 
      style={{ width: `${width}px`, height: `${height}px` }} 
    />
  );
};

export default QrCode;
>>>>>>> 8f30ee90b351a4d5d388d83cef02cc77953d738d
