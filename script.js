document.getElementById('verificationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const certificateId = document.getElementById('certificateId').value;
    const resultSection = document.getElementById('result');

    fetch('certificates.json')
       
    
    
    .then(response => response.json())
        .then(certificates => {
            const certificate = certificates.find(cert => cert.id === certificateId);
            if (certificate) {
                resultSection.innerHTML = `
                    <h2>Certificate Found</h2>
                    <p>Name: ${certificate.name}</p>
                    <p>Course: ${certificate.course}</p>
                    <p>Date: ${certificate.date}</p>
                `;
            } else {
                resultSection.innerHTML = '<h2>Certificate Not Found</h2>';
            }
        })
        .catch(error => {
            console.error('Error fetching certificates:', error);
            resultSection.innerHTML = '<h2>Error Fetching Certificates</h2>';
        });
});
