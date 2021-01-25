import React from 'react';
import { AiFillInstagram } from 'react-icons/ai'
import { FaLinkedin, FaTwitter, FaGithub, FaHeart } from 'react-icons/fa'
import {
    Card,
    CardFooter,
    CardBody,
    Badge,
    Jumbotron,
    Container
} from 'reactstrap';

const Footer = (props) => {
    return (
        <>
            <Jumbotron fluid className="container-card">
                <Container>
                    <Card className="text-center card-container">
                        <CardBody className="card-body">
                            <Badge
                                className="badge-body"
                                href="https://github.com/Ias4g"
                                color="dark"
                                target="_blank">
                                <FaGithub size={16} /> GitHub
                            </Badge>
                            <Badge
                                className="badge-body"
                                href="https://www.instagram.com/oficial_emunah/"
                                color="secondary"
                                target="_blank">
                                <AiFillInstagram size={16} /> Instagram
                            </Badge>
                            <Badge
                                className="badge-body"
                                href="https://www.linkedin.com/in/izael-silva-49b609186/"
                                color="info"
                                target="_blank">
                                <FaLinkedin size={16} /> Linkedin
                            </Badge>
                            <Badge
                                className="badge-body"
                                href="https://twitter.com/OficialEmunah"
                                color="primary"
                                target="_blank">
                                <FaTwitter size={16} /> Twitter
                            </Badge>
                        </CardBody>
                        <CardFooter className="footer">
                            <p>Feito com&nbsp;<FaHeart size={16} color="#bf38ac" /></p>
                            <img bottom width="156" src="/assets/logo-goals.svg" alt="Logo Goals" />
                        </CardFooter>
                    </Card>
                </Container>
            </Jumbotron>
        </>
    );
};

export default Footer;