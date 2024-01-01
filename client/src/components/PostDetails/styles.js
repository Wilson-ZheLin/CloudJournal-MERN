import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
    const theme = useTheme();
    return makeStyles({
      media: {
          borderRadius: '20px',
          objectFit: 'cover',
          width: '100%',
          maxHeight: '500px',
      },
      card: {
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
          },
      },
      section: {
          borderRadius: '20px',
          margin: '10px',
          flex: 1,
          padding: '15px',
      },
      imageSection: {
          marginTop: '20px',
          flex: 1,
          [theme.breakpoints.down('sm')]: {
              marginTop: '10px',
          },
      },
      recommendedPosts: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      },
      loadingPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        height: '39vh',
      },
      commentsOuterContainer: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      commentsInnerContainer: {
        height: '200px',
        overflowY: 'auto',
        marginRight: '30px',
      },       
    })();
};

export default useStyles;
