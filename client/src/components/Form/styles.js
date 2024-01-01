import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
    const theme = useTheme();
    return makeStyles({
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        form: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        fileInput: {
            width: '97%',
            margin: '10px 0',
        },
        buttonSubmit: {
            marginBottom: 20,
        },
        signin: {
            width: '90px',
        }
    })();
};

export default useStyles;
