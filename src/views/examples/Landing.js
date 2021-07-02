/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// import promo1 from "assets/img/theme/promo-1.png";
// import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
// import team1 from "assets/img/theme/team-1-800x800.jpg";
// import team2 from "assets/img/theme/team-2-800x800.jpg";
// import team3 from "assets/img/theme/team-3-800x800.jpg";
// import team4 from "assets/img/theme/team-4-800x800.jpg";
import job from "assets/img/theme/job.png";
import salmon from "assets/img/theme/salmon.png";
import flowers from "assets/img/theme/flowers.png";
import skill from "assets/img/theme/skill.jpg"



// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
// import { left } from "@popperjs/core";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        High recommended tech use{" "}
                        <span>What excited me ?</span>
                      </h1>
                      <p className="lead text-white">
                       Since in these days everything depends on technology , I'm so excited about what we can reach and do using it , like what we do konw "learning Programming" online and it become the most effecient method in communicating with others in whole the world ! 
                      </p>
                      <div className="btn-wrapper">

                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://github.com/SJAljawhary?tab=repositories"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            My Projects
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="fa fa-search" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Freelancers</h6>
                            <img
                            alt="..."
                            style = {{width :'200px'}}
                            src={job}
                          />
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Find Job
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Creative
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Design
                            </Badge>
                          </div>
                          <a href="https://freelance-pro.github.io/get-job/" >🌎</a>

                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="fa fa-cookie" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Salmon Cookies
                          </h6>
                          <img
                            alt="..."
                            style = {{width :'200px'}}
                            src={salmon}
                          />
                          {/* <p Pats salmon cookies have many branches over the world /> */}
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Cookies
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Success
                            </Badge>
                          </div>
                          <a href="https://sjaljawhary.github.io/cookie-stand/">🌎</a>

                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="fa fa-search" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                           Flowers Shop  </h6>
                           <img
                            alt="..."
                            style = {{width :'200px'}}
                            src={flowers}
                          />
                    
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Celebrate
                            </Badge>
                          </div>
                          <a href="https://sjaljawhary.github.io/exam2/">🌎</a>

                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={skill}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                  
                      <p className="lead text-italic text-white">
                      If you are a computer science student or doing a course to become a software engineer or a software developer, there are some technical skills you need to have to become a good programmer. Technology is vast and there are so many tools, platforms, languages coming out in the market. It doesn’t matter if you are an experienced programmer or a newbie programmer, as a modern developer you should have knowledge that how to integrate the modern technologies and other technical stuff in your work to make a good product or software.                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>My Skills</h3>
                    <p className="lead">
                    As a Computer programmers we write code through the use of computer languages, such as CSS,HTML and JavaScript. We create instructions that enable computers to generate meaningful output. This job generally requires the ability to do the following work:
                    </p>
                    <li>
                    Working in a team.
                    </li>
                    <li>
                    Working under pressure.
                    </li>
                    <li>
                    Know computer languages.
                    </li>
                    <li>
                    Write computer programs.
                    </li>
                    <li>
                    Update computer programs.
                    </li>
                    <li>
                    Collaborate with other programmers.
                    </li>
                  
               
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Programming Languages</h4>
                      <p className="text-white">
                      Thousands of different programming languages have been created, and more are being created every year, in this course we have learned some of them like :
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            {/* <i className="fa fa-bring-front" /> */}
                            
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Front End 
                          </h5>
                           <li>React</li>
                           <li>JavaScript</li>
                           <li>HTML</li>
                           <li>CSS</li>
                        
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="fa fa-send-back"/>
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                           Back End    </h5>
                        <li>C++</li>
                        <li>Python</li>
                        <li>C#</li>
                     
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
         
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                          LTUC College  </h3>
                      <p className="lead text-white mt-3">
                   Luminus Technical University College (LTUC) is a member of Luminus Education and originally established under the name of Al Quds College.You can join to any of their courses to be more professional and creative.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="http://www.ltuc.com/"
                        size="lg"
                      >
                        Read About
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              
              <Row className="row-grid mt-5">
              <h4 className="display-3 text-white" >Contact Me </h4>
              
                   </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to contact with me ?</h4>
                      <p className="mt-0">
                      Let's get in touch   </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={() => this.setState({ nameFocused: true })}
                            onBlur={() => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={() => this.setState({ emailFocused: true })}
                            onBlur={() => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
