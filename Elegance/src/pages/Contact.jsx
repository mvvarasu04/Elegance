import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = 'https://formspree.io/f/yourFormID'; // Replace this

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', mobile: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Heading */}
      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>ELEGANCEGEOINFOTECH</h1>
        <p style={styles.subheading}>
          Connect with us for software development, training programs, or placement services. Our team is ready to assist with your inquiries and collaboration proposals.
        </p>
      </div>

      {/* Main Section */}
      <div style={styles.contactWrapper}>
        <div style={styles.cardContainer}>
          {/* Left Card */}
          <div style={styles.cardLeft}>
            <h2 style={styles.cardHeading}>Get in Touch</h2>
            <p style={styles.cardText}>
              We’d love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            <div style={styles.contactDetails}>
              <div><strong>📍 Address:</strong><br />EleganceGeoInfoTech, Thippampatti, Dharmapuri, Tamilnadu, India</div>
              <div><strong>📞 Phone:</strong><br />
                <a href="tel:+916369126125" style={styles.link}>+91 6369126125</a><br />
                <a href="tel:+919500821438" style={styles.link}>+91 9500821438</a>
              </div>
              <div><strong>📧 Email:</strong><br />
                <a href="mailto:@gmail.com" style={styles.link}>EleganceGeoInfoTech@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Right Card (Form) */}
          <div style={styles.cardRight}>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Mobile Number</label>
                <input type="tel" name="mobile" required pattern="[0-9]{10}" maxLength={10} value={formData.mobile} onChange={handleChange} style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea name="message" required rows="4" value={formData.message} onChange={handleChange} style={{ ...styles.input, height: '120px', resize: 'vertical' }}></textarea>
              </div>
              {status === 'success' && <div style={styles.success}>Message sent successfully!</div>}
              {status === 'error' && <div style={styles.error}>Something went wrong. Try again.</div>}
              <button
                type="submit"
                disabled={loading}
                style={{
                  ...styles.button,
                  backgroundColor: loading ? '#9CA3AF' : '#2563EB',
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// 🎨 Styles
const styles = {
  headingContainer: {
    textAlign: 'center',
    padding: '40px 20px 10px',
    background: 'linear-gradient(to right, #3B82F6, #2563EB)',
    color: 'white',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '18px',
    maxWidth: '600px',
    margin: '0 auto',
    color: '#E5E7EB',
  },
  contactWrapper: {
    minHeight: '100vh',
    backgroundColor: '#F3F4F6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  cardLeft: {
    flex: '1 1 50%',
    backgroundColor: '#2563EB',
    color: 'white',
    padding: '40px',
    minWidth: '300px',
  },
  cardRight: {
    flex: '1 1 50%',
    padding: '40px',
    minWidth: '300px',
    backgroundColor: '#ffffff',
  },
  cardHeading: {
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  cardText: {
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  contactDetails: {
    fontSize: '15px',
    lineHeight: '1.8',
  },
  link: {
    color: '#FCD34D',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#111827',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    boxSizing: 'border-box',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  button: {
    width: '100%',
    padding: '14px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    color: 'white',
    fontSize: '15px',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
  },
  success: {
    color: 'green',
    marginBottom: '10px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

// Add animation style globally
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes fadeInScale {
    0% { opacity: 0; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1); }
  }

  a:hover {
    color: #fff176 !important;
  }

  @media (max-width: 768px) {
    .cardContainer {
      flex-direction: column !important;
    }
  }
`;
document.head.appendChild(styleTag);

export default Contact;
