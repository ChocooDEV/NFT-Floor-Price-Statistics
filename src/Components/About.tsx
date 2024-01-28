import { Text, Container, Anchor, MediaQuery, Button } from '@mantine/core';
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from 'react-scroll';

const About = () => {
    //const theme = useMantineTheme();

    return (
        <section id="about">
            <Container fluid>

                <div className="about-content">

                    <div style={{ marginBottom: 15 }}>
                        <Text transform="uppercase" weight={500} color="#8a2be2">
                            MADE BY CHOCOO
                        </Text>
                    </div>

                    <div>
                        <Text>
                            <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}>
                                <h1 className="title">NFTs Floors Statistics</h1>
                            </MediaQuery>
                        </Text>
                    </div>

                    <div style={{ marginBottom: 25 }}>
                        <Text size="xl" color="black">
                            Your very own Solana NFTs floors tracker...
                        </Text>
                    </div>

                    <div className="buttons">
                        <Link to="section-one" smooth duration={500}>
                            <Button color="grape" rightIcon={<MdOutlineArrowDownward size={16} />} radius="lg" size="md">Start tracking</Button>
                        </Link>
                    </div>

                </div>

            </Container>

        </section>
    );
};

export default About;