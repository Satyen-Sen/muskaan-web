import { useRouter } from "next/router";
import logo from '../assets/logo.png';
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';
import { useTheme } from "@mui/material/styles";
import Image from 'next/image';
import { Container, Grid, Typography, Link, Box, Icon, Divider,TextField } from "@mui/material";
import PrimaryTextField from "./PrimaryTextField";


export default function Footer() {
  const theme = useTheme()

  return (
    <footer>
      <Container maxWidth="lg" sx={{
        width: "100%",
        // height: "35vw",
        backgroundColor: '#003A9B',
        position: "absolute",
        overflow: "hidden",
        padding: "4rem 2rem",
        justifyContent: "center"
      }}>
        <Grid container
          direction="row"
          // justifyContent="space-evenly"
          alignItems="start" 
          spacing={4}
          >
          <Grid item xs>
            <Box sx={{ alignItems: 'center' }}>
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  style={{ height: '2rem', width: 'auto', backgroundColor: '#ffffff', borderRadius: "50%", marginBottom: '1rem' }}
                />
              </Link>
              <Typography variant="h6" sx={{ mx: theme.spacing(1), marginBottom: "1rem" }}>
                Muskan Group of Companies
              </Typography>
              <Link href='/'>
                <Image src={facebook} alt="fb" style={{ height: '1.5rem', width: "auto", margin: "0.5rem" }} />
              </Link>
              <Link href='/'>
                <Image src={twitter} alt="tw" style={{ height: '1.5rem', width: "auto", margin: "0.5rem" }} />
              </Link>
              <Link href='/'>
                <Image src={instagram} alt="in" style={{ height: '1.5rem', width: "auto", margin: "0.5rem" }} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs>
            <Typography variant="h6" sx={{ fontWeight: 400 }}>
              Reach Us Out
            </Typography>

            <Link href="/">
              <Typography variant="body2" sx={{ fontWeight: 400, margin: "0.85rem 0" }}>
                Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor,
                NEW DELHI - 110078
              </Typography>
            </Link>

            <Link href="/">
              <Typography variant="body2" sx={{ fontWeight: 400, margin: "0.85rem 0" }}>
                011 41587468/40687469
              </Typography>
            </Link>

            <Link href="/">
              <Typography variant="body2" sx={{ fontWeight: 400, margin: "0.85rem 0" }}>
                info@mclpl.co.in
              </Typography>
            </Link>

          </Grid>
          <Grid item xs>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Quick links
            </Typography>

            <Link href="/">
              <Typography variant="body2" sx={{ fontWeight: 400, margin: "0.85rem 0" }}>
                About Us
              </Typography>
            </Link>

            <Link href="/">
              <Typography variant="body2" sx={{ fontWeight: 400, margin: "0.85rem 0" }}>
                Career
              </Typography>
            </Link>

            <Link href="/">
              <Typography variant="body2" sx={{ fontWeight: 400, margin: "0.85rem 0" }}>
                Contact Us
              </Typography>
            </Link>

            <Link href="/">
              <Typography variant="body2" sx={{ fontWeight: 400, margin: "0.85rem 0" }}>
                Services
              </Typography>

            </Link>

            <Link href="/">
              <Typography variant="body2" sx={{ fontWeight: 400, margin: "0.85rem 0" }}>
                Useful Downloads
              </Typography>
            </Link>

          </Grid>
          <Grid item xs>
            <Typography variant="body2" sx={{ ontWeight: 400 }}>
              Subscribe Us
            </Typography>
            <Typography variant="body2" sx={{ ontWeight: 400, margin: "0.85rem 0" }}>
              Subscribe to our newsletter and never miss our latest news and promotions.
            </Typography>
         <Container sx={{bgcolor: "#FFFFFF" , padding:"1rem",borderRadius:"0.4rem"}}>
          <TextField  placeholder="Enter your mail id"   inputProps={{
                        style: {
                            // padding: '0.5rem',
                            // height: '1.6rem',
                            // color: '#121417',
                            // fontSize: '1rem',
                        },
                    }}
                    fullWidth/>
         </Container>
            <Link href="/">
              <Typography variant="body2" sx={{ fontWeight: 400, margin: "0.85rem 0" }}>
                Privacy Policy
              </Typography>
            </Link>

            <Link href="/">
              <Typography variant="body2" sx={{ fontWeight: 400, margin: "0.85rem 0" }}>
                Site Map
              </Typography>
            </Link>

            <Link href="/">
              <Typography variant="body2" sx={{ fontWeight: 400, margin: "0.85rem 0" }}>
                Terms & Conditions
              </Typography>
            </Link>

          </Grid>
        </Grid>
        <Divider textAlign="right" sx={{ bgcolor: "#FFFFFF", margin: "2rem 0" }} />
        <Typography variant="body2" sx={{ textAlign: "end", fontWeight: 400 }}>
          © 2022 Copyright: Muskan-Group of Companies 200804
        </Typography>
      </Container>
    </footer>
  );
};