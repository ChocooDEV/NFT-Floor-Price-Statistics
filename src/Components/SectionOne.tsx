import { Carousel } from '@mantine/carousel';
import { Text, Container, useMantineTheme, Title } from '@mantine/core';
import '../Styles/SectionOne.scss';

const SectionOne = () => {
    const theme = useMantineTheme();

    const carouselContent = {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column' as 'column',
        backgroundColor: '#8a2be2',
        borderRadius: 15,
        gap: 15
    };

    return (
        <section id="section-one">
            <Container>
                <Text color="black" align="center" mb="15px">
                    <Title order={1}>How does it work?</Title>
                </Text>

                <Carousel
                    withIndicators
                    height={300}
                    slideSize="31%"
                    slideGap="md"
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 15 },
                    ]}
                    loop
                    align="start"
                    pr="10px"
                    pl="10px"
                >
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>1</Title>
                            <Text style={{textAlign: 'center', padding: '5px'}}>Search for your favorite NFT collection on Solana💎</Text>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>2</Title>
                            <Text style={{textAlign: 'center', padding: '5px'}}>Add it to your watchlist👀</Text>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>3</Title>
                            <Text style={{textAlign: 'center', padding: '5px'}}>Get the floor price statistics📈</Text>
                        </div>
                    </Carousel.Slide>
                </Carousel>
            </Container>
        </section>
    );
};

export default SectionOne;