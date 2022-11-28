import React from "react";
import Fade from "react-reveal/Fade";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  workexperience,
  skills,
  Education,
} from "../../content_option";
import javascript from "../../assets/tech/javascript.svg";
import git from "../../assets/tech/git.svg";
import python from "../../assets/tech/python.svg";
import sql from "../../assets/tech/sql.svg";
import react from "../../assets/tech/react.svg";
import nodejs from "../../assets/tech/nodejs.svg";
import html5 from "../../assets/tech/html5.svg";
import css3 from "../../assets/tech/css3.svg";
import flask from "../../assets/tech/flask.svg";
import excel from "../../assets/tech/excel.png";
import r from "../../assets/tech/R.png";

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center service_desc">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            {Education.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <Fade bottom>
                    <h5 className="service__title">{data.degree}</h5>
                    <p className="service_desc">{data.school}</p>
                    <p className="service_desc">
                      {data.timeline.from} - {data.timeline.to}
                    </p>
                    <p className="service_desc">
                      <NewlineText text={data.summary} />
                    </p>
                  </Fade>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
                {workexperience.map((data, i) => {
                  return (
                    <div className="service_ py-4" key={i}>
                      <Fade bottom>
                        <p className="service_desc">
                          {data.timeline.from} - {data.timeline.to}
                        </p>
                        <h3 className="service__title">{data.role}</h3>
                        <p className="service_desc">{data.company}</p>
                        <p className="service_desc">
                          <NewlineText text={data.summary} />
                        </p>
                      </Fade>
                    </div>
                  );
                })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <Fade bottom>
                    <h3 className="progress-title">{data.name}</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${data.value}%`,
                        }}
                      >
                        <div className="progress-value">{data.value}%</div>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
						<h2 className="color_sec py-4">Tech Stack</h2>
					</Col>
					<Col lg="7">
						{/* 
						JavaScript,
						ReactJS,
						NodeJS,
						Python,
						Flask,
						HTML,
						CSS,
						Git,
						SQL,
            R,
            Excel
						
						
						*/}
							<div className="tech">
								<img
									src={javascript}
									alt="Javascript"
									title="Javascript"
									className="tech__logo"
								/>
								<img
									src={react}
									alt="React JS"
									title="React JS"
									className="tech__logo"
								/>
								<img
									src={python}
									alt="Python"
									title="Python"
									className="tech__logo"
								/>
								<img
									src={flask}
									alt="Flask"
									title="Flask"
									className="tech__logo"
								/>
								<img
									src={nodejs}
									alt="NodeJS"
									title="NodeJS"
									className="tech__logo"
								/>
								<img src={sql} alt="SQL" title="SQL" className="tech__logo" />
								<img
									src={html5}
									alt="HTML5"
									title="HTML5"
									className="tech__logo"
								/>
								<img
									src={css3}
									alt="CSS3"
									title="CSS3"
									className="tech__logo"
								/>
								<img src={git} alt="Git" title="Git" className="tech__logo" />
								<img
									src={excel}
									alt="excel"
									title="Excel"
									className="tech__logo"
								/>
                <img src={r} alt="r" title="R" className="tech__logo" />
							</div>
					</Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
