import { useEffect, useState } from "react";
import Main from './components/layout/main';
import {ThemeProvider} from 'react-jss';
import theme from './components/theme/theme'

const Site = (props) => {

  return (
    <ThemeProvider theme={theme}> 
      <Main theme={theme}/>
    </ThemeProvider>
  );
}

export default Site;
