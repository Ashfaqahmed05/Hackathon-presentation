import React, { useRef, useEffect, useCallback } from 'react';
import html2canvas from 'html2canvas';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout/Layout';
import QrCode from '../components/Qrcode/Qrcode';
import Logo from "../assets/smitLogo.jpg";
import Ribbon from '../assets/ribbon.png';
import './Certificate.css';

const Certificate = React.forwardRef(({ studentName, courseName, batch, userId }, ref) => (
    <div ref={ref} className="certificate">
        <h1>Saylani Mass Training Program</h1>
        <hr />
        <h2>(Under the Education Department of Saylani Welfare International Trust)</h2>
        <img className="ribbon" src={Ribbon} alt="ribbon" />
        <p>This certifies that</p>
        <h3 className="name">{studentName}</h3>
        <p>has successfully completed</p>
        <h3>{courseName}</h3>
        <h3>Batch: {batch}</h3>
        <p>Duration of Training Course: <strong>08 Months</strong></p>
        <p>From <strong>June 2023</strong> to <strong>Jan 2024</strong></p>
        <img className="logo" src={Logo} alt="Logo" />
        <div className="signatures">
            <div>
                <p>Chairperson</p>
                <p>Saylani Welfare International Trust</p>
            </div>
            <div>
                <p>Head of Department</p>
                <p>Saylani Welfare International Trust</p>
            </div>
        </div>
        <div className="qr-code">
            <QrCode value={`https://hackathon-presentation.vercel.app//myCertificate/${userId}`} width={120} height={120} />
        </div>
    </div>
));

const CertificateComponent = () => {
    const certificateRef = useRef();
    const { id } = useParams();
    const { user } = useSelector((state) => state.auth);

    const handleDownload = useCallback(async () => {
        try {
            const element = certificateRef.current;
            const canvas = await html2canvas(element);

            const imgBlob = await new Promise((resolve, reject) => {
                canvas.toBlob(blob => {
                    if (blob) resolve(blob);
                    else reject(new Error('Failed to generate Blob.'));
                }, 'image/png');
            });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(imgBlob);
            link.download = 'certificate.png';
            link.click();

            const formData = new FormData();
            formData.append('certificateImage', imgBlob, 'certificate.png');
            formData.append('userId', user._id);

            const response = await axios.post('http://localhost:8000/certificate/saveCertificateImage', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.status === 201) {
                console.log('Certificate image saved successfully!');
            } else {
                console.error('Failed to save certificate image:', response.status);
            }
        } catch (error) {
            console.error('Error saving certificate image:', error);
        }
    }, [user._id]);

    return (
        <Layout>
            <div className="certificateDiv">
                <Certificate
                    ref={certificateRef}
                    studentName={user.fullName || "Ashfaq Ahmed"}
                    courseName={user.course || "Mern stack Web-development"}
                    batch={user.batch || "Morning Batch"}
                    userId={id}
                />
                <div className="btnDiv" style={{ padding: "20px" }}>
                    <button className="btn" onClick={handleDownload}>Download Picture</button>
                </div>
            </div>
        </Layout>
    );
};

export default CertificateComponent;
