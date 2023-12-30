import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
    const theme = useTheme();
    return makeStyles({
        appBarSearch: {
            borderRadius: 4,
            marginBottom: '1rem',
            display: 'flex',
            padding: '16px',
        },
        pagination: {
            borderRadius: 4,
            marginTop: '1rem',
            padding: '16px',
        },
        gridContainer: {
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column-reverse',
            },
        },
        chip: {
            margin: '10px 0',
        },
    })();
};

export default useStyles;
