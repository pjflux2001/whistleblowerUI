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
import Pagination from "@material-ui/lab/Pagination";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Form from "./Form";
import { Comment } from "semantic-ui-react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

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
}));

function App() {
  const classes = useStyles();
  var [newEntry] = useState(false);
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
          style={{ display: newEntry ? "none" : "block" }}
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
                <CardActionArea>
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
                      React useContext
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

                <Comment.Group>
                  <Comment>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="p"
                        className={classes.h}
                      >
                        <Link className={classes.commentTitle} to={`/whistleblowerUI/comments/1`} props={1}>
                          Comments
                        </Link>
                      </Typography>
                    </CardContent>
                  </Comment>
                </Comment.Group>
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
                      React Router
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
                      React useContext
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

                  <Box>
                    <ShareIcon
                      onClick={() => alert("Share")}
                      className={classes.clickableIcon}
                    />
                  </Box>
                </CardActions>

                <Comment.Group>
                  <Comment>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="p"
                        className={classes.h}
                      >
                        <Link className={classes.commentTitle} to={`/whistleblowerUI/comments/2`} props={2}>
                          Comments
                        </Link>
                      </Typography>
                    </CardContent>
                  </Comment>
                </Comment.Group>
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
                      React useContext
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
          <Box my={4} className={classes.paginationContainer}>
            <Pagination count={10} />
          </Box>
        </Container>
        <div style={{ display: !newEntry ? "block" : "block" }}>
          <Form />
        </div>
      </div>
    </Router>
  );
}

export default App;
