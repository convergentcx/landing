import React, { Component } from 'react';
import ReactGA from 'react-ga';
import * as typeformEmbed from '@typeform/embed';
import styled from 'styled-components';

import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faMediumM, faTwitter, faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faCoins, faChartLine, faHandshake, faPlay, faEnvelope, faUserFriends, faPaintBrush } from '@fortawesome/free-solid-svg-icons'

// Pics
import LogoW from './logo-white-plain.png';
import LoganPhoto from './Logan-Saether.jpg';
import AchillPhoto from './achill_16x9.jpg';
// import Artist from './artist.jpg';
// import DJ from './dj.jpg';
// import Photographer from './photographer.jpg';
// import Spraypaint from './spraypaint.jpg';
// import Woman from './woman.jpg';

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
    position: toast.POSITION.BOTTOM_LEFT,
  });
};

const Achill = {
  bio: 'Achill is amazed by life and the universe. He studied economics in combination with philosophy and loves making documentary films. After discovering that one can solve big problems for a living, he dropped out of a PhD program at Yale and decided to pursue his entrepreneurial mission: To enable more valuable communication between strangers. He started coding, leading teams and learning about technology - and never stopped. He is an active contributor to the global blockchain ecosystem and has not felt more at home in any other community ❤️',
  name: 'Achill Rudolph',
  picture: AchillPhoto,
  socials: {
    email: 'achill@convergent.cx',
    github: 'https://github.com/acrdlph',
    medium: 'https://medium.com/@w.a.y',
    twitter: 'https://twitter.com/AchillRudolph',
    website: 'http://www.achillrudolph.com/',
  }
}

const Logan = {
  bio: 'Logan is an entrepreneur, smart contract engineer, and decentralization activist. While a student of literature and complex systems at university, he discovered Ethereum while surfing online. He immediately found the emerging field of public blockchain technology to be the vortex of his varied interests. Realizing the potential for a high impact of change, he phased out his involvement with everything else and committed his time to studying cryptoeconomics and building DApps. After a brief stint with a startup in New York, he joined the ChronoLogic team and helped to reboot the Ethereum Alarm Clock project while travelling Europe. Now based in Berlin, he is one of the initiators of Convergent, a project which aims to realize the vision of unanimous personal economies. One day he will go to space ⚛🚀️',
  name: 'Logan Saether',
  picture: LoganPhoto,
  socials: {
    email: 'logan@convergent.cx',
    github: 'https://github.com/lsaether',
    medium: 'https://medium.com/@lsaether',
    twitter: 'https://twitter.com/7saether',
    website: 'https://logansaether.com',
  }
}

const team = {
  'achill': Achill,
  'logan': Logan,
}

const colors = {
  cvgBlue: '#2424D0',
  cvgPurp: '#411999',
  darkPurp: '#05021A',
}

// const Section = styled(Grid)`
//   minHeight: 80vh;
// `;

const MyButton = styled.button`
  cursor: pointer;
  background: #2424D0;
  color: #FFF;
  padding: 25px 40px;
  border: 0;
  transition: 0.3s;
  :hover {
    background: #0044FF;
  }
`;

const OutlineButton = styled.button`
  cursor: pointer;
  background: rgba(0,0,0,0.5);
  border-color: #FFF;
  border-style: solid;
  border-width: 0.8px;
  padding: 25px 40px;
  color: #fff;
  transition: 0.3s;
  :hover {
    background: ${colors.cvgPurp};
    border-color: #333;
  }
`;

const AltOutlineButton = styled.button`
  cursor: pointer;
  background: transparent;
  border-color: #FFF;
  border-style: solid;
  border-width: 0.8px;
  padding: 25px 40px;
  color: #fff;
  transition: 0.3s;
  :hover {
    background: #2424D0;
  }
`;

const Avi = styled.img`
  border-radius: 10px;
  width: 180px;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    color: white;
    opacity: 0.5;
  }
`;

const Headline = styled.h1`
  text-shadow: 2px 2px 4px black; 
  @media only screen and (max-device-width: 600px) {
    font-size: 3rem;
  }
  font-size: 5rem;
  padding-top: 5%;
`

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      who: '',
    };
  }

  componentDidMount() {
    printConvergentToConsole();
    // notification();
  }

  openPopup = () => {
    const popup1 = typeformEmbed.makePopup('https://convergent2.typeform.com/to/am2euV', { mode: 'popup' });
    popup1.open();
  }


  render() {
    const subject = team[this.state.who] || { bio: '', name: '', socials: { twitter: '', medium: '', github: '' } };

    return (
      <div style={{ margin: 0, padding: 0, minWidth: "100%", minHeight: "100vh" }} onClick={e => {
        const category = e.target.innerText;
        try {
          if (category.length < 50) {
            track(category, 'click');
          }
        } catch { }
      }}>

        {/* CONVERGENT */}
        {/* <Grid container style={{ background: `url(${Artist}) no-repeat`, backgroundSize: '120%', backgroundPosition: '0 80%', minHeight: '80vh' }}> */}
        <Grid container style={{ background: colors.darkPurp, backgroundSize: '120%', backgroundPosition: '0 80%', minHeight: '95vh' }}>

          <Grid item xs={2} style={{ background: 'rgba(0,0,0,0.4)' }}/>
          <Grid item xs={8} style={{ paddingTop: '12vh', textAlign: 'left', color: '#FFFFFF', minHeight: '50vh', paddingBottom: '50px', background: 'rgba(0,0,0,0.4)' }}>
            <div style={{display: 'flex', alignItems: 'flex-start', height: '60px', justifyContent: 'space-between' }}>
              <div>
                <h1 style={{ fontSize: '1.85rem',  }}>
                  <img src={LogoW} style={{ width: '30px', height: '30px'}}/>&nbsp; Convergent
                </h1>
              </div>
              {/* <div>
                <Button className="blueAlt" href="https://twitter.com/ConvergentCx" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="blueAlt" icon={faTwitter} size='2x' />
                </Button>
                <Button className="blueAlt" href="https://medium.com/convergentcx" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="blueAlt" icon={faMediumM} size='2x' />
                </Button>
                <Button className="blueAlt" href="https://github.com/convergentcx" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="blueAlt" icon={faGithub} size='2x' />
                </Button>
                <Button className="blueAlt" href="https://discord.gg/JUPx5Xg" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="blueAlt" icon={faDiscord} size='2x' />
                </Button>
                <Button className="blueAlt" href="mailto:logan@convergent.cx" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="blueAlt" icon={faEnvelope} size='2x' />
                </Button>
              </div> */}
            </div>
            <br/>
            <Headline>
              Tokenize Your Work
            </Headline>
            <h4 style={{ color: 'white', marginTop: '-25px', fontSize: '1.5rem', textShadow: '2px 2px 4px black', }}>
              Blockchain based fundraising for creators
            </h4>
            <h4 style={{ color: 'white', marginTop: '-25px', fontSize: '1.5rem', textShadow: '2px 2px 4px black', }}>
              
            </h4>
            <div style={{ height: '50px' }}/>
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '7vh' }}>
              <MyButton onClick={() => window.open('https://www.youtube.com/watch?v=BXLjMA-BZYA')}>
                <FontAwesomeIcon icon={faPlay}/> Watch Demo Video
              </MyButton>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <OutlineButton onClick={this.openPopup}>
                Apply for Early Access
              </OutlineButton>
            </div>
          </Grid>
          <Grid item xs={2} style={{ background: 'rgba(0,0,0,0.4)' }}/>
        </Grid>

        {/* How it Works */}
        <Grid container style={{ background: '#2424D0', paddingTop: '6%', paddingBottom: '6%', minHeight: '100vh', alignItems: 'center' }}>
          <Grid item xs={false} md={2} />
          <Grid item xs={12} md={8} style={{ textAlign: 'left', color: '#FFFFFF' }}>
            <h1>How it Works</h1>
          </Grid>
          <Grid item xs={false} md={2} />

          <Grid item xs={false} md={2} />

          <Grid item xs={12} md={3} style={{ textAlign: 'left', color: '#FFFFFF', marginTop: '6%', marginBottom: '6%' }}>
            <FontAwesomeIcon icon={faCoins} size="6x"/>
            <p style={{ padding: '3% 20% 0 0%'}}>
              Launch your token and decide what content or services you'll offer for it.
            </p>
          </Grid>

          <Grid item xs={12} md={3} style={{ textAlign: 'left', color: '#FFFFFF', marginTop: '6%', marginBottom: '6%' }}>
            <FontAwesomeIcon icon={faChartLine} size="6x"/>
            <p style={{ padding: '3% 20% 0 0'}}>
              Contributors trade your token and determine the value of your promise -- while you raise funds.
            </p>
          </Grid>

          <Grid item xs={12} md={3} style={{ textAlign: 'left', color: '#FFFFFF', marginTop: '6%', marginBottom: '6%' }}>
            <FontAwesomeIcon icon={faHandshake} size="6x"/>
            <p style={{ padding: '3% 20% 0 0'}}>
              Honor your token to build trust, attract contributors, and raise capital.
            </p>
          </Grid>

          <Grid item xs={false} md={2} />

          <Grid item xs={12} md={8} style={{ textAlign: 'left' }}>
            <OutlineButton onClick={() => window.open('https://proto.convergent.cx')}>
              Try our Testnet Demo
            </OutlineButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <OutlineButton onClick={() => window.open('https://docs.google.com/presentation/d/e/2PACX-1vQElI7gdx9HQtboMEd-L3yBTZ0Sfez3z-TuDZAx9LEHU_rQzwv0HM6PQcKhVIrOTmnh0CPKyBQNHMsY/pub?start=false&loop=false&slide=id.p')}>
              Look at Slide Deck
            </OutlineButton>
          </Grid>
        </Grid>

        <Grid item xs={false} md={2} />


        {/* PERMISSIONLESS */}
        {/* <Grid container style={{ alignItems: 'center', background: `url(${DJ})`, backgroundSize: 'cover', backgroundPosition: '0 100%', minHeight: '100vh', paddingTop: '', paddingBottom: '0', margin: '0', }}>
          <Grid item xs={12} style={{ textAlign: 'left', color: '#FFF', fontSize: '5rem', textShadow: '2px 2px 4px black', }}>
            <div style={{ background: 'rgba(0,0,0,0)', paddingLeft: '8%', position: 'relative', top: '-208px'}}>
              <div style={{marginTop: ''}}>
                Permissionless
              </div>
              <h4 style={{ color: 'white', marginTop: '-10px', marginBottom: '5px', fontSize: '1.5rem', textShadow: '2px 2px 4px black', }}>
                Powered by the Ethereum blockchain
              </h4>
            </div>
          </Grid>
        </Grid> */}


        {/* USER STORIES */}
        {/* <Grid container style={{ alignItems: 'center', background: '#6F0903', paddingTop: '6%', paddingBottom: '6%', minHeight: '100vh' }}>
          <Grid item xs={false} md={3} />
          <Grid item xs={12} md={6} style={{ textAlign: 'center', color: '#FFFFFF', marginBottom: '10vh' }}>
            <h1 style={{ fontSize: '' }}>
              Meet Our Users
            </h1>
          </Grid>
          <Grid item xs={false} md={3} />

          <div>
          <Grid item xs={5} style={{ display: 'flex', justifyContent: 'center', marginTop: '', marginBottom: '6%' }}>
            <img src={Woman} alt="woman" style={{ width: '', height: '300px', borderRadius: '25px' }}/>
          </Grid>
          <Grid item xs={7} style={{ textAlign: 'left', color: '#FFF', maxWidth: '500px', marginTop: '', marginBottom: '6%' }}>
            Sonya is an artist based in Barcelona, Spain who uses her Convergent profile to sell her small pieces of art. She 
            has investors from all around the world who has joined her economy and talk to each other in her exclusive zone
            where she shares content for her fans.
          </Grid>
          </div>

        </Grid>

        <Grid container style={{ alignItems: 'center', background: '#05021A', minHeight: '50vh', paddingTop: '3%', paddingBottom: '15vh' }}>
          <Grid item xs={false} md={3} />
          <Grid item xs={12} md={6} style={{ textAlign: 'center', color: '#FFFFFF', marginBottom: '10vh' }}>
            <h1 style={{ fontSize: '' }}>
              Your Content, Your Way
            </h1>
          </Grid>
          <Grid item xs={false} md={3} />
          <Grid item xs={12} md={4} style={{ textAlign: 'center', color: '#FFFFFF', marginTop: '6%', marginBottom: '6%' }}>
            <FontAwesomeIcon icon={faEthereum} size="6x"/>
            <h3>Permissionless</h3>
            <p style={{ padding: '3% 15% 0'}}>
              Your account runs on the permissionless Ethereum blockchain.
              This means that no one will ever be able to take down your content or shut off your account.
            </p>
          </Grid>

          <Grid item xs={12} md={4} style={{ textAlign: 'center', color: '#FFFFFF', marginTop: '6%', marginBottom: '6%' }}>
            <FontAwesomeIcon icon={faUserFriends} size="6x"/>
            <h3>Connected</h3>
            <p style={{ padding: '3% 15% 0'}}>
              You can share some content to the public to attract investors but you also share
              your exclusive content to only people who support you and your work.
            </p>
          </Grid>

          <Grid item xs={12} md={4} style={{ textAlign: 'center', color: '#FFFFFF', marginTop: '6%', marginBottom: '6%' }}>
            <FontAwesomeIcon icon={faPaintBrush} size="6x"/>
            <h3>Creative</h3>
            <p style={{ padding: '3% 15% 0'}}>
              Something something something
            </p>
          </Grid>
          
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center'}}>
            <AltOutlineButton onClick={() => window.open('')}>
              FAQ
            </AltOutlineButton>
          </div>
        </Grid> */}

        {/* TEAM */}
        <Grid container style={{ background: colors.darkPurp, minHeight: '80vh', paddingTop: '6%', paddingBottom: '16%' }}>
          <Grid item xs={false} md={2} />
          <Grid item xs={12} md={8} style={{ textAlign: 'left', color: '#FFFFFF' }}>
            <h1 style={{ fontSize: '', marginBottom: '88px' }}>
              The Team
            </h1>
          </Grid>
          <Grid item xs={false} md={2} />

          <Grid item xs={false} md={2} />

          <Grid item xs={12} md={2} style={{ color: '#FFF', textAlign: 'center' }}>
            <Avi src={Logan.picture} onClick={()=> this.setState({ open: true, who: 'logan' })}/>
            <h4>Logan Saether</h4>
            <h5 style={{ color: 'grey', marginTop: '-16px' }}>Initiator and Lead Link</h5>
          </Grid>

          <Grid item xs={12} md={2} style={{ color: '#FFF', textAlign: 'center' }}>
            <Avi src={Achill.picture} onClick={() => this.setState({ open: true, who: 'achill' })}/>
            <h4>Achill Rudolph</h4>
            <h5 style={{ color: 'grey', marginTop: '-16px' }}>Initiator and Lead Link</h5>
          </Grid>

          <Grid item xs={false} md={6} />
        </Grid>

        {/* Dialog */}
        <Dialog onClose={() => this.setState({ open: false })} open={this.state.open}>
          <DialogTitle elevation={6} id="alert-dialog-title" style={{ backgroundColor: '' }}>
            {subject.name}
          </DialogTitle>
          <DialogContent style={{ padding: '' }}>
            <DialogContentText>
              {subject.bio}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <FontAwesomeIcon className="blue" icon={faTwitter} onClick={() => window.open(subject.socials.twitter)} style={{ padding: '5px' }} />
            <FontAwesomeIcon className="blue" icon={faMediumM} onClick={() => window.open(subject.socials.medium)} style={{ padding: '5px' }} />
            <FontAwesomeIcon className="blue" icon={faGithub} onClick={() => window.open(subject.socials.github)} style={{ padding: '5px' }} />
          </DialogActions>
        </Dialog>

        {/* LEARN MORE */}
        {/* <Grid container style={{ background: colors.darkPurp, minHeight: '50vh', paddingTop: '6%', paddingBottom: '8%' }}>
          <Grid item xs={false} md={2} />
          <Grid item xs={12} md={8} style={{ textAlign: 'left', color: '#FFFFFF' }}>
            <h1 style={{ fontSize: '', marginBottom: '88px' }}>
              Learn More
            </h1>
          </Grid>
          <Grid item xs={false} md={2} />

          <Grid item xs={false} md={2} />

          <Grid item xs={12} md={2} style={{ color: '#FFF', textAlign: 'center' }}>
            <Avi src={Logan.picture} onClick={()=> this.setState({ open: true, who: 'logan' })}/>
            <h4>Logan Saether</h4>
            <h5 style={{ color: 'grey', marginTop: '-16px' }}>Initiator and Lead Link</h5>
          </Grid>

          <Grid item xs={false} md={6} />
        </Grid> */}

        {/* Footer */}
        <Grid container style={{ bottom: 0, backgroundColor: '#FFFFFF' }}>
          <Grid item xs={12}>
            <Paper position="static" square elevation={12} style={{ backgroundColor: '#000000', height: '40vh', display: 'flex', alignItems: '' }}>
              <Grid container style={{ paddingLeft: '2%', paddingRight: '2%', paddingTop: '', background: '', height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                <Grid item xs={false} md={2} />

                <Grid item xs={12} md={8} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: '', background: '', paddingBottom: '1%' }}>
                  <Button className="blueAlt" href="https://twitter.com/ConvergentCx" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="blueAlt" icon={faTwitter} size='2x' />
                  </Button>
                  <Button className="blueAlt" href="https://medium.com/convergentcx" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="blueAlt" icon={faMediumM} size='2x' />
                  </Button>
                  <Button className="blueAlt" href="https://github.com/convergentcx" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="blueAlt" icon={faGithub} size='2x' />
                  </Button>
                  <Button className="blueAlt" href="https://discord.gg/JUPx5Xg" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="blueAlt" icon={faDiscord} size='2x' />
                  </Button>
                  <Button className="blueAlt" href="mailto:logan@convergent.cx" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="blueAlt" icon={faEnvelope} size='2x' />
                  </Button>
                </Grid>
                <Grid item xs={false} md={2} />

                <Grid item xs={false} md={2} />
                <Grid item xs={12} md={8} style={{ paddingBottom: '2%' }}>
                  <div style={{ color: '#FFF', display: 'flex', justifyContent: 'flex-start' }}>
                    Contribute: &nbsp;
                    <ContribLink href="https://beta.etherscan.io/address/0xb8001be99e38be45fa9caa4a6353ca75063b4e4c" target="_blank" rel="noopener noreferrer">
                      0xB8001be99e38BE45fa9Caa4A6353Ca75063b4e4c
                    </ContribLink>
                  </div>
                </Grid>

              </Grid>
            </Paper>
          </Grid>
          
          

        </Grid>

        {/* Toast */}
        <ToastContainer closeOnClick={false} autoClose={false} />
      </div>
    );
  }
}

const ContribLink = styled.a`
  text-decoration: none;
  color: #2424D0;
  :hover {
    color: #411999;
  }
`;

export default App;
