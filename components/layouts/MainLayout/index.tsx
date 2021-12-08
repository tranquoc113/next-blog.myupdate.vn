import Head from "next/head";
// import styles from './layout.module.css'
import Header from "../Header";
import Footer from "../Footer";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navigation from "../SideNav";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main style={{ marginTop: 85 }}>
        <div className="layout">
          <div className="sidenav-left">
            <Navigation />
          </div>
          <div className="content">{children}</div>
          {/* <div className="sidenav-right">3</div> */}
        </div>

        {/* <Box sx={{ flexGrow: 1, mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={0} sm={6} md={3}>
            <Navigation/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          {children}
            </Grid>
            </Grid>
            </Box> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
