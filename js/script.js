window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pdfUrl = urlParams.get('pdf');
    if (pdfUrl) {
        document.getElementById('pdfEmbed').src = pdfUrl;
    } else {
        document.body.innerHTML = '<p>No PDF file specified</p>';
    }

    // Function to highlight the active resume link
    function highlightActiveLink() {
        if (pdfUrl) {

            document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
                item.classList.remove('active');
            });

            // Remove active class from all links
            document.querySelectorAll('.dropdown-item').forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to the corresponding link
            if (pdfUrl.includes('doc/clarrison RESUME.pdf')) {
                document.getElementById('resumeEnglish').classList.add('active');
                document.querySelector('.nav-link[href="resume.html"]').classList.add('active');
            } else if (pdfUrl.includes('doc/kiwahili RESUME.pdf')) {
                document.getElementById('resumeKiswahili').classList.add('active');
                document.querySelector('.nav-link[href="resume.html"]').classList.add('active');
            } else if (pdfUrl.includes('doc/Kalenjin.pdf')) {
                document.getElementById('resumeIndigenous').classList.add('active');
                document.querySelector('.nav-link[href="resume.html"]').classList.add('active');
            }
        }
    }

    // Call the function on page load
    highlightActiveLink();
}