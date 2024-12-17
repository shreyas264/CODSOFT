import React from 'react'

const Certification = () => {
  return (
    <section id='certification' >
      <h2 className='certification-heading'>Certificates</h2>
      <div className='certificate-container'>
        <div className='certificate'>
          <img src='/src/assets/img/cybersecurityCertificate.png' alt='cybersecurity Certificate' />
          <p>CyberSecurity Basics By IBM</p>
        </div>
        <div className='certificate'>
          <img src='/src/assets/img/pytonCertificate.jpg' alt='Python Certificate' />
          <p>Python Basics for DataScience</p>
        </div>
        <div className='certificate'>
          <img src='/src/assets/img/sqlCertificate.jpg' alt='SQL Certificate' />
          <p>Introduction to SQL</p>
        </div>
        </div>

    </section>
  )
}

export default Certification
