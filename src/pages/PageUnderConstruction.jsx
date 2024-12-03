import React from 'react';

const PageUnderConstruction = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
    },
    message: {
      textAlign: 'center',
      color: '#333',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '1rem',
      animation: 'fadeIn 2s ease-in-out',
    },
    paragraph: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
      animation: 'fadeIn 2s ease-in-out 0.5s',
    },
    loader: {
      border: '4px solid #ccc',
      borderTop: '4px solid #007bff',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      animation: 'spin 1s linear infinite',
      margin: '0 auto',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.message}>
        <h1 style={styles.heading}>🚧 Página en preparación 🚧</h1>
        <p style={styles.paragraph}>
          Estamos trabajando para brindarte la mejor experiencia.
        </p>
        <div style={styles.loader}></div>
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default PageUnderConstruction;