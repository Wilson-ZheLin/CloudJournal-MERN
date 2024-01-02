import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
    const theme = useTheme();
    return makeStyles({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(2),
        },
        root: {
            '& .MuiTextField-root': {
            margin: theme.spacing(1),
            },
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', 
            marginTop: theme.spacing(2),
        },
        submit: {
            margin: theme.spacing(2, 0, 2),
        },
        googleButton: {
            marginBottom: theme.spacing(2),
        },
        fileInput: {
            width: '97%',
            margin: '15px 0 0 18px',
            justifyContent: 'center',
        },
    })();
};

export default useStyles;

