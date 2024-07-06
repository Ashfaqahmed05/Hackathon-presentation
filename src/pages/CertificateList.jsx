import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

function CertificateList() {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(false); // Add loading state
    const { id } = useParams();

    useEffect(() => {
        const fetchCertificates = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:8000/certificate/certificates?userId=${id}`);
                setCertificates(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching certificates:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCertificates();
    }, [id]);

    const handleDownload = async (certId, contentType, imageData) => {
        try {
            const blob = await fetch(`data:${contentType};base64,${imageData}`).then(res => res.blob());
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `certificate.png`;
            link.click();
        } catch (error) {
            console.error('Error downloading certificate:', error);
        }
    };

    return (
        <Layout>
            <div>
                <h1>Certificates</h1>
                {loading ? (
                    <p>Loading certificates...</p>
                ) : certificates.length === 0 ? (
                    <div>
                        <h2>No certificates found</h2>
                    </div>
                ) : (
                    <ul>
                        {certificates.map(cert => (
                            <li key={cert._id}>
                                <img src={`data:${cert.image.contentType};base64,${cert.image.data}`} alt="Certificate" />
                                <button className='mt-5' onClick={() => handleDownload(cert._id, cert.image.contentType, cert.image.data)}>Download</button>
                            </li>
                        ))}
                    </ul>
                )}
                
            </div>
        </Layout>
    );
}

export default CertificateList;
