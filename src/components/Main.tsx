import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Box, makeStyles } from "@material-ui/core"

import { Home } from "./home/Home"
import { Header } from './Header';

import { FaqHome } from "./faq/FaqHome";
import { StrategiesHome } from "./strategies/StrategiesHome";
import { MainWithTitle } from "./MainWithTitle"
import { SimHome } from "./simulator/SimHome"

import { Footer } from "./footer/Footer"
import { PrivacyPolicy } from "./footer/PrivacyPolicy"
import { Terms } from "./footer/Terms"

import { ScrollToTop } from './shared/ScrollToTop'

import background from "./home/img/bg-light.jpg"
import backgroundDark from "./home/img/bg-dark.jpg"


interface MainProps {
    lightTheme: boolean,
    toggleTheme: (isLight: boolean) => void
}

const useStyle = makeStyles( theme => ({
    container: {
        transform: "scale(1.0)",
        backgroundColor: theme.palette.type === 'light' ? '#FAFAFA' : '#140F0C',
        backgroundImage: theme.palette.type === 'light' ? `url( ${background} )` : `url( ${backgroundDark} )` ,
        backgroundRepeat: "repeat",
    }
}))


export const Main = ( { lightTheme, toggleTheme } : MainProps  ) =>  { 
  
    const classes = useStyle()

    return (
        <Box className={classes.container} >

            <BrowserRouter>
                <ScrollToTop />

                <Header lightTheme={lightTheme} toggleTheme={toggleTheme} />
            
                <MainWithTitle>
                    <Routes>
                        <Route path="/"  element={
                            <Home /> 
                        } />

                        <Route path="/strategies" element={
                            <StrategiesHome />
                        } />
                        <Route path="/faq" element={
                            <FaqHome />
                        } />

                        <Route path="/sim" element={
                            <SimHome />
                        } />

                        <Route path="/privacy" element={
                            <PrivacyPolicy  />
                        } />

                        <Route path="/terms" element={
                            <Terms />
                        } />
                    </Routes>
                </MainWithTitle>

                <Footer />
            </BrowserRouter>

            </Box>

    )

}