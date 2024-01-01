import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

const useStyles = () => {
    const theme = useTheme();
    return makeStyles({
        appBar: {
            borderRadius: 15,
            margin: '30px 0',
            display: 'flex',
            flexDirection: 'row !important',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px 20px 5px 15px',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
            },
          },
          leftContent: {
            flex: 1,
          },
          heading: {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            fontSize: '2em',
            fontWeight: 300,
          },
          image: {
            marginLeft: '10px',
            marginTop: '5px',
            cursor: 'pointer',
          },
          toolbar: {
            display: 'flex',
            justifyContent: 'flex-end',
            flex: 1,
            marginLeft: 'auto',
            [theme.breakpoints.down('sm')]: {
              width: 'auto',
            },
          },
          profile: {
            display: 'flex',
            justifyContent: 'space-between',
            width: 'auto',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
              width: 'auto',
              marginTop: 20,
              justifyContent: 'center',
            },
          },
          logout: {
            marginLeft: '20px !important',
          },
          userName: {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
          },
          brandContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flex: 1,
          },
          protrait: {
            marginRight: '10px',
          }
    })();
};

export default useStyles;
