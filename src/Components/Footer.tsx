import { useMantineTheme, Container, Grid, Text, ActionIcon, Button, Group, Avatar, UnstyledButton, Anchor, Code } from '@mantine/core';
import { IconBrandTwitter } from '@tabler/icons-react';

const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: '#8a2be2'}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col xs={12} sm={8} md={8} lg={8}>
                        
                    <Text size="xl" weight={700} color="white" mb="10px">NFTs Floors Statistics</Text>
                    <Text color="white" mb="5px">
                        The purpose of this app was to learn <Anchor onClick={() => redirectToLink('https://mantine.dev/')}>Mantine</Anchor> and to create a simple Solana NFTs Floors stats app.
                    </Text>
                    <Text color="white" mb="20px">
                        I hope you enjoy it and that you find it useful!
                    </Text>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Code color="yellow" className='dynamic-code'>
                            Made by
                            <Anchor onClick={() => redirectToLink('https://twitter.com/chocoo_web3')}>
                                <UnstyledButton>
                                    <Group>
                                        <div>
                                            <Text>Chocoo</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
                            </Anchor>
                        </Code>
                    </Grid.Col>
                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};