import { Title, Text, Container, Grid, Image } from '@mantine/core';
import { useState } from 'react';
import FloorHistory from './FloorHistory';
import '../Styles/SectionTwo.scss';

const SectionTwo = () => {
    //const theme = useMantineTheme();
    const [data, setData] = useState([
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
      ]);

    return (
        <section id="section-two">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>Add your favorite collections and start tracking them!</Title>
                                Simply search for them and click on "Add"
                            </Text>
                        </div>
                    </Grid.Col>
                    <Grid.Col xs={6} sm={4} md={4} lg={4}></Grid.Col>
                </Grid>
                <FloorHistory/>
            </Container>
        </section>
    )
};

export default SectionTwo;