import React, { Component } from "react";
import ExpLine from "../../components/ExpLine/Index";
import { Container } from "@mui/material";
import { Typography, Box, Card, CardContent, Stack } from "@mui/material";
import { Timeline } from "@mui/lab";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const handleClick = () => {
  console.info("You clicked the Chip.");
};

export default class ProfilePage extends Component {
  render() {
    return (
      <>
        <Card maxHeight="sm">
          <CardContent></CardContent>
        </Card>
        <Container maxWidth="md">
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Hello, I’m Daniele!
              </Typography>
              <Typography variant="body" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                <p>
                  {" "}
                  <Chip
                    label="Download CV"
                    variant="outlined"
                    onClick={handleClick}
                  />
                </p>
                <Divider />
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={4}
                >
                  <Box>
                    <Typography gutterBottom variant="overline" component="div">
                      Personal Information
                    </Typography>
                    <List>
                      <ListItem disablePadding>
                        <ListItemText primary="FULL NAME" /> {"Daniele Minatto"}
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="D.O.B." /> {"18 Oct. 1993"}
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="E-MAIL" /> {"hi@minatto.dev"}
                      </ListItem>
                    </List>
                  </Box>
                  <Box>
                    <Typography gutterBottom variant="overline" component="div">
                      Languages
                    </Typography>

                    <List>
                      <ListItem disablePadding>
                        <ListItemText primary="Portuguese" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="English" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="Italian" />
                      </ListItem>
                    </List>
                  </Box>
                </Stack>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ marginTop: "1rem" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Work Experience
              </Typography>
              <Timeline>
                <ExpLine
                  company="Mimo Live Sales"
                  jobtitle="Full Stack Developer"
                  years="2021 - Present"
                  description="Development and maintenance of microservices in Laravel and Typescript with NestJS, integration with third-party APIs.Using Docker, MySQL and Amazon Cognito"
                />
                <ExpLine
                  company="Checktudo"
                  jobtitle="Full Stack Developer"
                  years="2020 - 2021"
                  description="Development and maintenance of microservices in NodeJS, Typescript with NestJS, integration with third-party APIs, maintenance of websites with WordPress, PHP 7.*, and AngularJS.
                  Using MongoDB, Amazon S3, Docker, DynamoDB, PostgreSQL"
                />
                <ExpLine
                  company="Engeplus"
                  jobtitle="Lead Developer"
                  years="2018 - 2020"
                  description="Leading a software developers team, resolving technical and personal conflicts, and conducting feedback processes;
                  Performing business analysis with the client and defining the project scope as well provide systems support;
                  In charging of proposing solutions and architectures for the projects and all of development life cycle of them;
                  Code review, ensure the maintainability of projects and development in: PHP (5.*, 7.*, frameworks: Slim, Twig, Eloquent and Laravel), Angular.js, Vue, PostgreSQL, SQL Server and MySQL"
                />
              </Timeline>
            </CardContent>
          </Card>
          <Card sx={{ marginTop: "1rem" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Education
              </Typography>
              <ExpLine
                jobtitle="Specialization - Distributed Software Architecture"
                years="2017 - 2018"
                description="PUC-MINAS - Pontifícia Universidade Católica de Minas Gerais"
              />
              <ExpLine
                jobtitle="Bachelor - Computer Science"
                years="2011 - 2016"
                description="UNESC - Universidade do Extremo Sul Catarinense"
              />
            </CardContent>
          </Card>
        </Container>
      </>
    );
  }
}
