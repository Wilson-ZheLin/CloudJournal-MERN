import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
    const theme = useTheme();
    return makeStyles({
        paper: {
            padding: theme.spacing(2),
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
    })();
};

export default useStyles;
