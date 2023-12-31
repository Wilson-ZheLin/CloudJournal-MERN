import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
    const theme = useTheme();
    return makeStyles({
      media: {
          borderRadius: '20px',
          objectFit: 'cover',
          width: '100%',
          maxHeight: '500px', // Reduced max height for better proportion
      },
      card: {
          display: 'flex',
          flexDirection: 'column', // Changed to column for a more streamlined look
          width: '100%',
          [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
          },
      },
      section: {
          borderRadius: '20px',
          margin: '10px',
          flex: 1,
          padding: '15px', // Added padding for better spacing
      },
      imageSection: {
          marginTop: '20px', // Added top margin for separation
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
