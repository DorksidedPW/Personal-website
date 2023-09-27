import {createUseStyles} from 'react-jss'

const layoutStyles = createUseStyles((theme) => ({
  //MAIN
  main: {
    boxSizing: 'border-box',
    height: '100vh',
    display: 'flex',
    maxHeight: '100vh',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    backgroundColor: theme.palette.darkBG,
    '@media (prefers-color-scheme: dark)': {
      backgroundColor: theme.palette.darkBG,
    },
    '@media (max-width: 1024px)': {
      padding: 16,
    }
  },

  mainMenuContainer: {
    width: '30%',
    minWidth: '30%',
    height: '100%',
    position: 'sticky',
    top: 0
  },

  contentContainer: {
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    height: '100%',
    overflowY: 'auto'
  },

  postsContainer:{  
    display: 'flex',
    flexDirection: 'column',
    gap: '64px'
  },
  

  //HEADER
  header: {
    width: '100%',
    height: '60vh',
    padding: '32px 15% 32px 15%',
    boxSizing: 'border-box',
    position: 'sticky',
    top: 0,
    '@media (max-width: 1024px)': {
      padding: 16,
    },
  },

  siteTitle: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },

  siteName: {
    fontSize:  72,
    fontWeight: 800,
    fontFamily: "'Roboto', sans-serif ",
    textTransform: "uppercase",
    color: '#D9D8D7',
    margin: 0
  },

  siteDescription: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 24
  },

  //PAGE
  page: {},

  //POST
  post: {},

  //MENU
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },

  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },

  menuItem: {
    heigth: 48,
    listStyle: "none",
    '& a': {
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
      textDecoration: 'none'
    },
  },

  itemLabel: {
    fontFamily: "'Roboto', sans-serif ",
    textTransform: 'uppercase'
  },

  //SECTION
  sectionGrid: {
    display: 'grid',
    gridTemplateColumns: '220px 1fr 1fr',
    color: theme.palette.primaryTextColor,
    //backgroundColor: theme.palette.darkBG,
    padding: '32px 15% 32px 15%',
    gridTemplateRows: '48px 1fr 0',
    gridTemplateAreas: `
      "image top top"
      "image content content"
      "image bottom bottom"
    `
  },

  section: {
    fontSize: 14,
    gridArea: 'content',
    fontWeight: 400,
    position: 'relative',
    zIndex: 10,
    padding: '8px 32px 8px 32px',
    fontFamily: "'Roboto', sans-serif ",
    '@media (max-width: 1024px)': {
      padding: 16,
      fontSize: 16
    },
  },

  sectionImage: {
    gridArea: 'image',
    position: 'relative',
    zIndex: 100,
    width: '100%',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    maxWidth: '100%'
  },

  sectionTitle: {
    fontSize:  32,
    textTransform: 'uppercase',
    margin: 0,
    //background: ({theme}) => theme.palette.secondary
  },

  date: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  content: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    '& blockquote': {
      fontStyle: "italic",
      margin: 0,
      fontSize: '1.2em',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 200,
      paddingLeft: 16,
      borderLeft: '2px solid white'
    }
  }
}));

export default layoutStyles;