import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import { getPlayerInfo } from "../../../services/apis/playerAPI";


export default function FavoriteCard(props) {
    //TODO: pass playerID through props from user's list of favorites

    const [playerInfo, setPlayerInfo] = useState(null);
    useEffect(() => {
        async function callAPI() {
            let info = await getPlayerInfo("20000571");
            if (!info) return;
            setPlayerInfo(info);
        }
        callAPI();
    }, [])

    return (

        playerInfo &&
        <Container>
            <Col>
                <Image src={playerInfo.PhotoUrl} roundedCircle={true} />
            </Col>

            <Col>
                <Row>
                    {playerInfo.YahooName}
                </Row>
                <Row>
                    {playerInfo.Team} - {playerInfo.Position}
                </Row>
            </Col>
        </Container>

        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img variant="left" src={playerInfo.PhotoUrl} roundedCircle={true} />
        //             <Card.Body>
        //                 <Card.Title>{playerInfo.YahooName}</Card.Title>
        // 
        //                 <Card.Text>
        //                     {playerInfo.YahooName}
        //                     {playerInfo.Team} - {playerInfo.Position}
        //                 </Card.Text>
        // 
        //                 <Button variant="primary">View Player</Button>
        //             </Card.Body>
        //         </Card>
    )
}