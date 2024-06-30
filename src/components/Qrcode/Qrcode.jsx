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
