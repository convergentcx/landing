import React, { Component } from 'react';
import ReactGA from 'react-ga';

import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import YoutubeEmbedVideo from 'youtube-embed-video';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faMediumM, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Logo from './logo3.png';
import Reptile from './contemplative-reptile.jpg';
import ethereum from './ethereum.png';
import './app.css'

const track = (category, action) => ReactGA.event({ category, action });

const printConvergentToConsole = () => {
  console.log(`          
  ####                                                                             #                                
 #    #                                                                            #                                
#         #####   # ####   ##   ##   #####    # ###    ######   #####   # ####   ######
#        #     #  ##    #   #   #   #     #   ##      #     #  #     #  ##    #    # 
#        #     #  #     #    # #    #######   #       #     #  #######  #     #    #
 #    #  #     #  #     #    # #    #         #       #     #  #        #     #    #
  ####    #####   #     #     #      #####    #        ######   #####   #     #     ### 
                                                            #                                                       
                                                       #####                                                        `)
};

const notification = () => {
  toast(<div>Billboard now live at <a style={{ color: '#0044FF', textDecoration: 'none' }} href="https://billboard.convergent.cx" target="_blank" rel="noopener noreferrer">billboard.convergent.cx</a></div>, { 
    className: 'purp',
    position: toast.POSITION.BOTTOM_RIGHT
  });
};

class TopNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <AppBar position="sticky" elevation={3} color="default" style={{ paddingLeft: '2%', paddingRight: '2%' }}>
        <Toolbar>
          <img src={Logo} alt="Convergent" height="40px" width="40px" />
          &nbsp;&nbsp;
          <Typography variant="h5" color="inherit" noWrap>
            Convergent
          </Typography>
          <div style={{ flexGrow: 1}} />
          <div className="hide-mobile">
            <Button className="blue" href="https://twitter.com/ConvergentCx" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size='2x' />
            </Button>
            <Button className="blue" href="https://medium.com/convergentcx" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMediumM} size='2x' />
            </Button>
            <Button className="blue" href="https://github.com/convergentcx" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </Button>
            <Button className="blue" href="https://discord.gg/JUPx5Xg" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} size='2x' />
            </Button>
            <Button className="blue" href="mailto:logan@convergent.cx" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size='2x' />
            </Button>
          </div>
          <div className="show-mobile">
            <IconButton onClick={this.handleClick}>
              <FontAwesomeIcon icon={faBars} size='1x' style={{ color: "#000000" }} />
            </IconButton>
          </div>
        </Toolbar>

        {/* Mobile Only Menu */}
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => window.open('https://twitter.com/ConvergentCx')}>Twitter</MenuItem>
          <MenuItem onClick={() => window.open('https://medium.com/convergentcx')}>Medium</MenuItem>
          <MenuItem onClick={() => window.open('https://github.com/convergentcx')}>GitHub</MenuItem>
          <MenuItem onClick={() => window.open('https://discord.gg/JUPx5Xg')}>Discord</MenuItem>
          <MenuItem onClick={() => window.open('mailto:logan@convergent.cx')}>Email</MenuItem>
        </Menu>

      </AppBar>
    );
  }
}

class App extends Component {

  componentDidMount() {
    printConvergentToConsole();
    notification();
  }

  render() {
    return (
      <div style={{margin: 0, padding: 0, minWidth: "100%", minHeight: "100vh"}} onClick={e => {
        const category = e.target.innerText;
        try {
          if (category.length < 50) {
            track(category, 'click');
          }
        } catch {}
      }}>

        {/* Top Navbar */}
        <TopNavbar />

        {/* Hero */}
        <Grid container style={{ paddingTop: '5vh', backgroundColor: '#232323', paddingBottom: '5vh' }}>
          <Grid item xs={12} md={6} style={{ textAlign: 'center', color: '#FFFFFF', minHeight: '50vh', marginBottom: '50px' }}>
            <h1 style={{ fontSize: '3em' }}>Unlock your personal economy.</h1>
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button size="large" variant="outlined" style={{ color: '#FFFFFF', borderColor: '#0044FF' }} onClick={() => window.open('https://ipfs.io/ipfs/QmYDfuvC5yDLSRJWcZNfVnSMLSBgPkaKoWjgEYKjwXZrA3')}>Learn More</Button>
              <Tooltip title="Not yet available">
                <div>
                <Button size="large" variant="outlined" disabled style={{ color: '' }}>Try the product</Button>
                </div>
              </Tooltip>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ margin: '25px', height: '54vh', textAlign: 'center', paddingTop: '30px' }}>
              {/* <h2 style={{ paddingTop: '25px' }}>Launch your own cryptocurrency and regain your freedom.</h2> */}
              <YoutubeEmbedVideo videoId="BXLjMA-BZYA" suggestions={false} showInfo={false} style={{ width: '80%', height: '90%' }} />
            </Paper>
          </Grid>
        </Grid>

        <Grid container style={{ backgroundColor: '#0044FF', minHeight: '50vh' }}>
          <Grid item xs={0} md={4} />
          <Grid item xs={12} md={6} style={{ textAlign: 'center', color: '#FFFFFF' }}>
            <h1 style={{ fontSize: '3em' }}>Get rewarded for discovering trending tokens before they blow up.</h1>
          </Grid>
          <Grid item xs={0} md={2} />
        </Grid>

        {/* TODO */}

        <Grid container style={{ backgroundColor: '#232323', minHeight: '50vh' }}>
          <Grid item xs={0} md={3} />
          <Grid item xs={12} md={6} style={{ textAlign: 'center', color: '#FFFFFF' }}>
            <h1 style={{ fontSize: '3em' }}>The Team</h1>
          </Grid>
          <Grid item xs={0} md={3} />

          <Grid item xs={0} md={3} />
          <Grid item xs={12} md={3}>
            <Card style={{ margin: '12px' }}>
              <CardActionArea>
                {/* <CardMedia image={Reptile} style={{ height: '140px' }} /> */}
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Logan Saether
                  </Typography>
                  <Typography variant="subtitle" component="h4">
                    Initiator and Lead Link
                  </Typography>
                  {/* <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography> */}
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size="small" style={{ color: '#0044FF' }}>
                  Bio
                </Button>
                <Button size="small" style={{ color: '#0044FF' }} onClick={() => alert('Coming soon!')}>
                  Economy
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card style={{ margin: '12px' }}>
              <CardActionArea>
                {/* <CardMedia image={Reptile} style={{ height: '140px' }} /> */}
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Achill Rudolph
                  </Typography>
                  <Typography variant="subtitle" component="h4">
                    Initiator and Lead Link
                  </Typography>
                  {/* <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography> */}
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size="small" style={{ color: '#0044FF' }}>
                  Bio
                </Button>
                <Button size="small" style={{ color: '#0044FF' }} onClick={() => alert('Coming soon!')}>
                  Economy
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={0} md={3} />
        </Grid>

        {/* Footer */}
        <Grid container style={{ bottom: 0, backgroundColor: '#232323' }}>
          <Grid item xs={12}>
            <Paper position="static" square elevation={12} style={{ backgroundColor: '#000000', height: '24vh'}}>
              {/* <Grid container>
                  <Grid item xs={0} md={6} />
                  <Grid item xs={12} md={3} style={{ flexDirection: 'column' }}>
                    <h5 style={{ color: '#828384', textAlign: 'center' }}>Built on:</h5>
                    <img src={ethereum} alt="ethereum" style={{ height: '100px', display: 'block', margin: '-20px auto' }} />
                  </Grid>
                  <Grid item xs={0} md={3} />
              </Grid> */}
            </Paper>
          </Grid>
        </Grid>

        {/* Toast */}
        <ToastContainer closeOnClick={false} autoClose={false} />
      </div>
    );
  }
}

export default App;
