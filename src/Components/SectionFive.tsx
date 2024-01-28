import { Accordion, Text, Container, Title, Badge } from '@mantine/core';
import { FiPrinter, FiPhoneCall, FiAnchor } from "react-icons/fi";

const SectionFive = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-five">
            <Container>
                <div style={{ marginBottom: 30 }}>
                    <div style={{ textAlign: 'left' }}><Badge variant="filled" color="grape">FAQs</Badge></div>
                    <Text color="black">
                        <Title order={1} style={{ marginTop: 10 }}>People are often asking for this</Title>
                    </Text>
                </div>

                <Accordion variant="contained">
                    <Accordion.Item value="item1">
                        <Accordion.Control icon={<FiAnchor size={20} color={"#8a2be2"} />}>
                            Where comes the data from?
                        </Accordion.Control>
                        <Accordion.Panel>Every data is coming directly from Tensor API</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item2">
                        <Accordion.Control icon={<FiPrinter size={20} color={"#8a2be2"} />}>
                            Is this app free to use?
                        </Accordion.Control>
                        <Accordion.Panel>Definetly! However if you feel like tipping, you're welcome to do it at chocoo.sol</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item3">
                        <Accordion.Control icon={<FiPhoneCall size={20} color={"#8a2be2"} />}>
                            How can I contact you?
                        </Accordion.Control>
                        <Accordion.Panel>You can contact me on X (@chocoo_web3) or on Discord (chocoopanda)</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );

};

export default SectionFive;