import { makeStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#fe5f1e',
    },
    secondary: {
      main: '#fe5f1e',
    },
  },
  typography: {
    fontFamily: 'Proxima Nova, Roboto, system-ui, Tahoma, sans-serif',
    fontSize: 16,
  },
});

export const useStyles = makeStyles((mainTheme) => ({
  mainRoot: {
    maxWidth: '100%',
    padding: '40px 20px',
    margin: '0 auto',
    minHeight: 1000,
  },
  root: {
    maxWidth: 1375,
    minHeight: 900,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  content: {
    maxWidth: 1350,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  headerWrapper: {
    padding: '40px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #f6f6f6',
  },
  logoContent: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 375,
  },
  shopButton: {
    borderRadius: '25px',
    width: 150,
    height: 50,
    backgroundColor: mainTheme.palette.primary.main,
    '&:hover': {
      backgroundColor: mainTheme.palette.primary.dark,
    },
  },

  buttonLayoutWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '20px 0',
  },

  buttons: {
    textAlign: 'center',
    fontWeight: 650,
    fontSize: 18,
    borderRadius: '25px',
    padding: '15px 25px',
    height: 50,
    marginRight: '7px',
    backgroundColor: '#e9e9e966',
    '&.MuiListItem-root.Mui-selected': {
      backgroundColor: '#282828',
      color: '#F9F9F9',
      '&:hover': {
        backgroundColor: '#282828',
      },
    },
    '&:hover': {
      backgroundColor: '#e9e9e9',
    },
  },

  orderLayoutWrapper: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: 18,
  },

  sortPopUpWrapper: {
    position: 'absolute',
    right: 140,
    top: 270,
    marginTop: '10px',
    background: '#ffffff',
    boxShadow: '0px 5px 15px rgba(0,0,0,0.09)',
    borderRadius: '10px',
    overflow: 'hidden',
    padding: '10px 0',
    width: '160px',
  },

  sortPopUpItem: {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 18,
    borderRadius: '10px',
    padding: '12px 20px',
    fontFamily: 'Proxima Nova, Roboto, system-ui, Tahoma, sans-serif',
    '&.Mui-selected': {
      backgroundColor: '#fe5f1e0d;',
      color: '#fe5f1e',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#fe5f1e0d;',
      },
    },
    '&:hover': {
      backgroundColor: '#fe5f1e0d',
    },
  },

  pizzaBlockSelector: {
    backgroundColor: '#f3f3f3',
    padding: '3px',
    borderRadius: '10px',
  },
  pizzaBlockSelectorFirstWrapper: {
    margin: '5px 2px 8px 2px',
  },
  pizzaBlockSelectorSecWrapper: {
    margin: '0px 2px 3px 2px',
  },

  pizzaBlockSelectorFirstRow: {
    padding: '8px',
    borderRadius: '5px',
    maxWidth: '50%',
    textTransform: 'none',
    fontFamily: 'Proxima Nova, Roboto, system-ui, Tahoma, sans-serif',
    fontWeight: 600,
    fontSize: '14px',

    '&.MuiListItem-root': {
      justifyContent: 'center',
    },
    '&.Mui-selected': {
      backgroundColor: '#fff;',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#fff',
      },
    },
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&.Mui-disabled': {
      opacity: 0.45,
    },
  },

  pizzaBlockSelectorSecondRow: {
    padding: '8px',
    borderRadius: '5px',
    maxWidth: '33%',
    textTransform: 'none',
    fontFamily: 'Proxima Nova, Roboto, system-ui, Tahoma, sans-serif',
    fontWeight: 600,
    fontSize: '14px',

    '&.MuiListItem-root': {
      justifyContent: 'center',
    },
    '&.Mui-selected': {
      backgroundColor: '#fff;',
      cursor: 'auto',
      '&:hover': {
        backgroundColor: '#fff',
      },
    },
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&.Mui-disabled': {
      opacity: 0.45,
    },
  },

  pizzaBlockBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  pizzaPrice: {
    fontWeight: 'bold',
    fontSize: '22px',
    lineHeight: '27px',
    letterSpacing: '0.015em',
  },

  pizzaButtonAdd: {
    textTransform: 'none',
    borderRadius: '30px',
    border: '1px solid transparent',
    backgroundColor: '#fff',
    color: '#fe5f1e',
    borderColor: '#fe5f1e',
    fontFamily: 'Proxima Nova, Roboto, system-ui, Tahoma, sans-serif',
    padding: '8px 18px',
    '&:hover': {
      backgroundColor: '#fe5f1e',
      color: '#fff',
      '& i': {
        backgroundColor: '#fff',
        color: '#fe5f1e',
      },
    },
    '& i': {
      borderRadius: '30px',
      backgroundColor: '#fe5f1e',
      color: '#fff',
      fontWeight: 600,
      width: '22px',
      height: '22px',
      fontStyle: 'normal',
      fontSize: '13px',
      lineHeight: '22px',
      position: 'relative',
      left: '5px',
    },

    '& span': {
      fontWeight: 500,
      fontSize: '17px',
      marginBottom: '1px',
    },
  },

  cartClearButton: {
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    fontFamily: 'Proxima Nova, Roboto, system-ui, Tahoma',
    transition: 'all .15s ease-in-out',
    fontSize: '22px',
    textTransform: 'none',
    backgroundColor: '#fff',
    cursor: 'pointer',
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
      backgroundColor: '#fff',
    },
  },

  totalPrice: {
    color: '#fe5f1e',
  },

  paymentButton: {
    textTransform: 'none',
    borderRadius: '30px',
    minWidth: '100px',
    border: '1px solid transparent',
    backgroundColor: '#fe5f1e',
    color: '#fff',
    borderColor: '#fe5f1e',
    fontFamily: 'Proxima Nova, Roboto, system-ui, Tahoma, sans-serif',
    padding: '16px 30px',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#fe5f1e',
    },
    '& span': {
      fontWeight: 700,
      fontSize: '17px',
      marginBottom: '1px',
    },
  },

  cartBackButton: {
    textAlign: 'center',
    opacity: 0.45,
    fontWeight: 600,
    fontSize: 18,
    borderRadius: '30px',
    border: '1px solid #cccccc',
    //borderColor: '#cccccc',
    minWidth: '100px',
    fontSize: '18px',
    padding: '16px 30px',
    fontFamily: 'Proxima Nova, Roboto, system-ui, Tahoma, sans-serif',
    textTransform: 'none',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#000',
      color: '#fff',
    },
  },

  cartItemImageWrapper: {
    maxWidth: '140px',
  },
  cartItemNameWrapper: {
    width: '100%',
    maxWidth: '300px',
    fontFamily: mainTheme.typography.fontFamily,
    '& .MuiTypography-body1:first-child': {
      fontWeight: 'bold',
      fontSize: '22px',
      lineHeight: '27px',
      letterSpacing: '0.01em',
    },
    '& .MuiTypography-body1:nth-child(2)': {
      fontSize: '18px',
      color: '#8d8d8d',
    },
  },
  cartItemButtonsWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '200px',

    '& .MuiTypography-root': {
      fontFamily: mainTheme.typography.fontFamily,
      fontWeight: 'bold',
      fontSize: '22px',
      lineHeight: '27px',
      letterSpacing: '0.01em',
    },

    '& .MuiButton-root': {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      width: '36px',
      height: '36px',
      minWidth: '32px',
      padding: 0,

      border: '2px solid transparent',
      backgroundColor: '#fff',
      borderColor: '#fe5f1e',
      borderRadius: '30px',

      color: '#fe5f1e',
      fontSize: '22px',
      fontWeight: '400',
      '&:first-child': {
        marginRight: 10,
      },
      '&:last-child': {
        marginLeft: 10,
      },
      '&:hover': {
        backgroundColor: '#fe5f1e',
        color: '#fff',
      },
    },
  },
  cartItemPriceWrapper: {
    width: '30%',
    maxWidth: '75px',
    '& .MuiTypography-root': {
      fontFamily: mainTheme.typography.fontFamily,
      fontWeight: 'bold',
      fontSize: '22px',
      lineHeight: '27px',
      letterSpacing: '0.01em',
    },
  },
  cartItemDeleteButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    maxWidth: '75px',

    '& .MuiButton-root': {
      width: '32px',
      height: '32px',
      minWidth: '32px',
      padding: 0,

      border: '2px solid transparent',
      backgroundColor: '#fff',
      borderColor: '#ddd',
      borderRadius: '30px',

      color: '#ddd',
      fontSize: '18px',
      fontWeight: '600',

      '&:hover': {
        backgroundColor: '#2a2a2a',
        borderColor: '#2a2a2a',
        color: '#fff',
      },
    },
  },

  cartItemImage: {
    width: '100%',
    height: '100%',
  },
  wrapperEmptyCart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  titleEmptyCart: {
    marginTop: '90px',
    marginBottom: '20px',
    fontFamily: mainTheme.typography.fontFamily,
    textAlign: 'center',
    fontSize: '34px',
    fontWeight: 'bold',
  },

  textEmptyCart: {
    marginTop: '10px',
    fontFamily: mainTheme.typography.fontFamily,
    textAlign: 'center',
    fontSize: '24px',
  },

  linkEmptyCart: {
    textDecoration: 'none',
    marginTop: '45px',
  },
  buttonEmptyCart: {
    fontFamily: mainTheme.typography.fontFamily,
    fontSize: '18px',
    padding: '12px 0 14px',
    width: '230px',
    fontWeight: '600',
    backgroundColor: '#232323',
    color: '#fff',
    border: '1px solid transparent',
    borderColor: '#232323',
    borderRadius: '30px',

    '&:hover': {
      backgroundColor: '#fff',
      borderColor: '#232323',
      color: '#232323',
    },
  },
}));
