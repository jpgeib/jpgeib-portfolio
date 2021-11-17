import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Photoshop from "../../../assets/images/PhotoShop_Icon.png";
import InDesign from "../../../assets/images/InDesign-icon.png";
import PremierePro from "../../../assets/images/Premiere-Pro-icon.png";
import Illustrator from "../../../assets/images/Illustrator_icon.png";

export default () => {
    return (
        <>
            <Grid.Row centered>
                <Grid.Column width={4}>
                    <Image as={Link} to="/files/photoshop-examples.zip" target=":blank" download src={Photoshop} size="small" />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image as={Link} to="/files/illustrator-examples.zip" target=":blank" download src={Illustrator} size="small" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column width={4}>
                    <Image as={Link} to="/files/indesign-examples.zip" target=":blank" download src={InDesign} size="small" />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src={PremierePro} size="small" />
                </Grid.Column>
            </Grid.Row>
        </>
    );
};