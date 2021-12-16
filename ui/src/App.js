import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CommentIcon from '@material-ui/icons/Comment';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Comment } from "semantic-ui-react";
import Chip from '@material-ui/core/Chip';
import { Link, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: ` url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FlKeljXZ.jpg&f=1&nofb=1')`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 600,
    textAlign: "center",
    padding: "40px",
    fontSize: "32px",
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  commentBox: {
    display: "flex",
    flexDirection: "row",
    margin: "0 10px",
  },
  commentBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: "0 5px",
    fontSize: "0.75em",
  },
  commentTitle: {
    color: "blue",
    isolation: "isolate"
    
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  clickableIcon: {
    color: "#0072E5",
    isolation: "isolate",
    "&:hover": {
      color: "#43a1ff",
      background: "transparent",
      padding: "3px",
      borderRadius: "50%",
      isolation: "isolate",
    },
  },
  likes: {
    display: "flex",
    alignItems: "flex-end",
  },
  like: {
    color: "#0072E5",
    isolation: "isolate",
    margin: "0 5px",
  },
  p: {
    color: "darkGray",
  },
  h: {
    color: "rgb(95, 95, 95)",
  },
  chip: {
    marginRight: "2.5px",
    marginLeft: "2.5px"
  },
  
}));

const modal_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Box className={classes.hero}>
          <Box>Welcome Guest</Box>
        </Box>
        <Container
          maxWidth="lg"
          className={classes.blogsContainer}
        >
          <Typography variant="h5" className={classes.blogTitle}>
            Welcome to The WhistleBlower!
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardHeader
                  action={<IconButton aria-label="settings"></IconButton>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardActionArea onClick={handleOpen}>
                  
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.h}
                    >
                      <Chip label="primary" color="primary" className={classes.chip}/>
                      <Chip label="success" color="success" className={classes.chip}/>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.p}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea >
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                  <Box sx={modal_style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        <h3>Shrimp and Chorizo Paella</h3>
                      </Typography>
                      <img src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="400px"/>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                      </Typography>
                    </Box>
                  </Modal>
                <CardActions className={classes.cardActions}>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <ThumbUpIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("liked")}
                    />
                  </div>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <ThumbDownIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("disliked")}
                    />
                  </div>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <Link className={classes.commentTitle} to={`/whistleblowerUI/comments/1`} props={1}>
                    <CommentIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("comments")}
                    />
                    </Link>
                  </div>
                  <Box className={classes.author}>
                    <Box ml={2}></Box>
                  </Box>
                  <Box>
                    <ShareIcon
                      onClick={() => alert("Share")}
                      className={classes.clickableIcon}
                    />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardHeader
                  action={<IconButton aria-label="settings"></IconButton>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardActionArea >
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.h}
                    >
                      <Chip label="secondary" color="secondary" className={classes.chip}/>
                      <Chip label="error" color="error" className={classes.chip}/>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.p}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <ThumbUpIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("liked")}
                    />
                  </div>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <ThumbDownIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("disliked")}
                    />
                  </div>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <Link className={classes.commentTitle} to={`/whistleblowerUI/comments/1`} props={1}>
                    <CommentIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("comments")}
                    />
                    </Link>
                  </div>
                  <Box className={classes.author}>
                    <Box ml={2}></Box>
                  </Box>
                  <Box>
                    <ShareIcon
                      onClick={() => alert("Share")}
                      className={classes.clickableIcon}
                    />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardHeader
                  action={<IconButton aria-label="settings"></IconButton>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.h}
                    >
                      <Chip label="default" color="deault" className={classes.chip}/>
                      <Chip label="info" color="info" className={classes.chip}/>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.p}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <ThumbUpIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("liked")}
                    />
                  </div>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <ThumbDownIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("disliked")}
                    />
                  </div>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <Link className={classes.commentTitle} to={`/whistleblowerUI/comments/1`} props={1}>
                    <CommentIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("comments")}
                    />
                    </Link>
                  </div>
                  <Box>
                    <ShareIcon
                      onClick={() => alert("Share")}
                      className={classes.clickableIcon}
                    />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardHeader
                  action={<IconButton aria-label="settings"></IconButton>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.h}
                    >
                      <Chip label="warning" color="warning" className={classes.chip}/>
                      <Chip label="success" color="success" className={classes.chip}/>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.p}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <ThumbUpIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("liked")}
                    />
                  </div>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <ThumbDownIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("disliked")}
                    />
                  </div>
                  <div className={classes.likes}>
                    <span className={classes.like}>45</span>
                    <Link className={classes.commentTitle} to={`/whistleblowerUI/comments/1`} props={1}>
                    <CommentIcon
                      className={classes.clickableIcon}
                      onClick={() => alert("comments")}
                    />
                    </Link>
                  </div>
                  <Box>
                    <ShareIcon
                      onClick={() => alert("Share")}
                      className={classes.clickableIcon}
                    />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Box 
        style={{backgroundColor: '#0072E5', 
        color: 'white',
        marginTop: '30px',
        paddingTop: '10px',
        }}>
      <Container maxWidth="lg" style={{ paddingBottom : '3px'}}>
        <Grid container spacing={1}>
          <Grid item xs={3} sm={6}>
            <Box>
              <Link href="/" style={{color: 'white', textDecoration: 'none', fontSize: '25px' }}>
                <GitHubIcon
                      style={{marginRight :'10px'}}
                      onClick={() => alert("github")}
                />
                Github
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3} sm={6}>
           <Box>
              <Link href="/" style={{color: 'white', textDecoration: 'none', float: 'right', fontSize: '25px'}}>
                <YouTubeIcon
                      style={{marginRight :'10px'}}
                      onClick={() => alert("github")}
                />
                Youtube
              </Link>
            </Box>
          </Grid>
        </Grid>
        </Container>
        <div style={{fontSize: '25px' ,paddingBottom: '10px', marginTop : "10px", textAlign: 'center'}}>
        Copyright © NonFungibleTeam 2021-22
    </div>
      </Box>
    </Router>
    
  );
}

export default App;
