import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useSelector } from 'react-redux';
import "./Certificate.css";
import QrCode from '../components/Qrcode/Qrcode'; 
import Logo from "../assets/smitLogo.jpg"

const Certificate = React.forwardRef((props, ref) => (
    <div ref={ref} className="certificate">
        <h1>Saylani Mass Training Program</h1>
        <hr />
        <h2>(Under the Education Department of Saylani Welfare International Trust)</h2>
        <img className='ribbon' src="https://pngfile.net/public/uploads/preview/15-golden-ribbon-png-01-11566414431qdyx915puo.png" alt="" />
        <p>This certifies that</p>
        <h3 className="name">{props.studentName}</h3>
        <p>has successfully completed</p>
        <h3>{props.courseName}</h3>
        <h3>Batch: {props.batch}</h3> 
        <p>Duration of Training Course: <strong>08 Months</strong></p>
        <p>From <strong>June 2023</strong> to <strong>Jan 2024</strong></p>
        <img className='logo' src={Logo} alt="Logo" />
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
        <QrCode value={props.studentName} width={120} height={120} /> 
        </div>

    </div>
));

const CertificateComponent = () => {
    const certificateRef = useRef();

    const formData = useSelector((state) => state.form.formData);

    const handlePrint = useReactToPrint({
        content: () => certificateRef.current,
    });

    const handleDownload = async () => {
        const element = certificateRef.current;
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'pt',
            format: [canvas.width, canvas.height],
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('certificate.pdf');
    };

    return (
        <div className='certificateDiv' >
            <Certificate 
                ref={certificateRef} 
                studentName={formData.name || "Ashfaq Ahmed"} 
                courseName={formData.course || "Mern stack Web-development"}
                batch={formData.batch || "Morning Batch"} // Pass the batch prop here
            />
            <div className='btnDiv' style={{ padding: "20px" }}>
                <button className="btn" onClick={handlePrint}>Print</button>
                <button className='btn' onClick={handleDownload}>Download PDF</button>
            </div>
        </div>
    );
};

export default CertificateComponent;
