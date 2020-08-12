import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
      palette: {
          primary: {
              light:"#7E1014",
              main: "#7E1014"
          },
          secondary: {
            light:"#E09F3E",
            main: "#E09F3E"
          }
      },
      overrides: {
        MUIRichTextEditor: {
            root: {
                margin:"15px 0px",
                display: "block",
                borderTop: "2px solid #7E1014",
            }, 
            editorContainer: {
              border: "2px solid #7E1014",
              minHeight: "250px", 
              maxWidth: "100%",
              fontFamily: "adobe-garamond-pro"
            }
        }
    }
});

export default theme;