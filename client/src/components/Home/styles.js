import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
    const theme = useTheme();
    return makeStyles({
        component: {
            borderRadius: 4,
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
            padding: '16px',
        },
        heading: {
            width: '100%',
            textAlign: 'center',
        },
        gridContainer: {
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column-reverse',
            },
        }
    })();
};

export default useStyles;
