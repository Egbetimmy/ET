import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
    const [data, setData] = useState(dataportfolio)
    const filterResult = (catItem) => {
        const result = dataportfolio.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);

    }
    return (
        <>
            <HelmetProvider>
                <Container className="About-header">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title> Portfolio | {meta.title} </title>{" "}
                        <meta name="description" content={meta.description} />
                    </Helmet>

                    <Row className="mb-5 mt-3">
                        <Col lg="8">
                            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
                            <hr className="t_border my-4 ml-0 text-left" />
                        </Col>
                    </Row>
                    <div className="col mt-5 mx-2" >
                        <Row className="row-md-3 mb-4">
                            <Col>
                                <button className="btn btn-primary w-100" onClick={() => setData(dataportfolio)}>All</button>
                            </Col>
                            <Col>
                                <button className="btn btn-primary w-100" onClick={() => filterResult('web_development')}>Web Development</button>
                            </Col>
                            <Col>
                                <button className="btn btn-primary w-100" onClick={() => filterResult('data_science')}>Data Science</button>
                            </Col>
                            <Col>
                                <button className="btn btn-primary w-100" onClick={() => filterResult('data_analysis')}>Data Analysis</button>
                            </Col>
                            <Col>
                                <button className="btn btn-primary w-100" onClick={() => filterResult('javascript')}>Javascript</button>
                            </Col>
                        </Row>
                        <div>
                            <div className="row">
                                {data.map((values) => {
                                    const { id, img, description, link } = values;
                                    return (
                                        <>
                                            <div className="col-md-4 mb-4" key={id}>
                                                <div className="card">
                                                    <img src={img} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{description}</h5>

                                                    </div>

                                                </div>
                                                <a href={link} className="btn btn-primary">view project</a>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </Container>
            </HelmetProvider>

        </>
    )

};