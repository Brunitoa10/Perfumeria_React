const styles = {
  navbarContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,

    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '15px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '0 20px',
  },
  navbarTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 'bold',
    color: 'white',
    fontSize: '24px',
    letterSpacing: '1px',
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#000000',
  },
  navbarButton: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 500,
    borderRadius: '4px',
    padding: '8px 16px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'scale(1.1)',
    },
    '&:focus': {
      outline: '#007bff',
      boxShadow: '#007bff',
    },
  },
  iconButton: {
    color: '#fff',
    fontSize: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  menuButton: {
    color: 'white',
  },
  '@media (max-width: 800px)': {
    navbarContainer: {
      padding: '10px 5px',
    },
    toolbar: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    navbarButton: {
      marginTop: '10px',
      width: '100%',
      textAlign: 'center',
    },
    iconButton: {
      fontSize: '35px',
    },
  },
};

export default styles;
