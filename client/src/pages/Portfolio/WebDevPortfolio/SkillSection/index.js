import React, { Component } from "react";
import SkillSectionComputer from "./SkillSectionComputer";
import SkillSectionWide from "./SkillSectionWide";

import "./style.css";

class SkillSection extends Component {
    render() {
        return (
            <>
                <SkillSectionComputer />
                <SkillSectionWide />            
            </>
            // <div id="skills-page">
            //     <Grid id="skills-headers-container">
            //         <Grid.Row>
            //             <Grid.Column width={16}>
            //                 <Header id="skills-header" as="h1">Full-Stack Web Development Technical Skills</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             <Grid.Column width={16}>
            //                 <Header id="skills-subheader" as="h3">I am proficient in the following technologies:</Header>
            //             </Grid.Column>
            //         </Grid.Row>
            //     </Grid>
            //     <Grid id="skills-container">
            //         <Grid.Row>
            //             <Grid.Column width={4}>
            //                 <Grid>
            //                     <Grid.Row>
            //                         <Grid.Column width={16}>
            //                             <Image id="html5-logo" src={HTML5} size="small" />
            //                         </Grid.Column>
            //                         <Grid.Column width={16}>
            //                             <Header id="html5-header" as="h2">HTML5</Header>
            //                         </Grid.Column>
            //                     </Grid.Row>
            //                 </Grid>
            //             </Grid.Column>
            //             <Grid.Column width={4}>
            //                 <Grid>
            //                     <Grid.Row>
            //                         <Grid.Column width={16}>
            //                             <Image id="css-logo" src={CSS} size="small" />
            //                         </Grid.Column>
            //                         <Grid.Column width={16}>
            //                             <Header id="css-header" as="h2">CSS</Header>
            //                         </Grid.Column>
            //                     </Grid.Row>
            //                 </Grid>
            //             </Grid.Column>
            //             <Grid.Column width={4}>
            //                 <Grid>
            //                     <Grid.Row>
            //                         <Grid.Column width={16}>
            //                             <Image id="javascript-logo" src={JavaScript} size="small" />
            //                         </Grid.Column>
            //                         <Grid.Column width={16}>
            //                             <Header id="javascript-header" as="h2">JavaScript</Header>
            //                         </Grid.Column>
            //                     </Grid.Row>
            //                 </Grid>
            //             </Grid.Column>
            //             <Grid.Column width={4}>
            //                 <Grid>
            //                     <Grid.Row>
            //                         <Grid.Column width={16}>
            //                             <Image id="jquery-logo" src={jQuery} size="small" />
            //                         </Grid.Column>
            //                         <Grid.Column width={16}>
            //                             <Header id="jquery-header" as="h2">jQuery</Header>
            //                         </Grid.Column>
            //                     </Grid.Row>
            //                 </Grid>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             <Grid.Column width={4}>
            //                 <Grid>
            //                     <Grid.Row>
            //                         <Grid.Column width={16}>
            //                             <Image id="sql-logo" src={SQL} size="small" />
            //                         </Grid.Column>
            //                         <Grid.Column width={16}>
            //                             <Header id="sql-header" as="h2">SQL</Header>
            //                         </Grid.Column>
            //                     </Grid.Row>
            //                 </Grid>
            //             </Grid.Column>
            //             <Grid.Column width={4}>
            //                 <Grid>
            //                     <Grid.Row>
            //                         <Grid.Column width={16}>
            //                             <Image id="mongo-logo" src={MongoDB} size="small" />
            //                         </Grid.Column>
            //                         <Grid.Column width={16}>
            //                             <Header id="mongo-header" as="h2">MongoDB</Header>
            //                         </Grid.Column>
            //                     </Grid.Row>
            //                 </Grid>
            //             </Grid.Column>
            //             <Grid.Column width={4}>
            //                 <Grid>
            //                     <Grid.Row>
            //                         <Grid.Column width={16}>
            //                             <Image id="react-logo" src={ReactLogo} size="small" />
            //                         </Grid.Column>
            //                         <Grid.Column width={16}>
            //                             <Header id="react-header" as="h2">React.js</Header>
            //                         </Grid.Column>
            //                     </Grid.Row>
            //                 </Grid>
            //             </Grid.Column>
            //             <Grid.Column width={4}>
            //                 <Grid>
            //                     <Grid.Row>
            //                         <Grid.Column width={16}>
            //                             <Image id="redux-logo" src={ReduxLogo} size="small" />
            //                         </Grid.Column>
            //                         <Grid.Column width={16}>
            //                             <Header id="redux-header" as="h2">Redux.js</Header>
            //                         </Grid.Column>
            //                     </Grid.Row>
            //                 </Grid>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             <Grid.Column width={4}></Grid.Column>
            //             <Grid.Column width={4}>
            //                 <Grid>
            //                     <Grid.Row>
            //                         <Grid.Column width={16}>
            //                             <Image id="express-logo" src={ExpressLogo} size="small" />
            //                         </Grid.Column>
            //                         <Grid.Column width={16}>
            //                             <Header id="express-header" as="h2">Express.js</Header>
            //                         </Grid.Column>
            //                     </Grid.Row>
            //                 </Grid>
            //             </Grid.Column>
            //             <Grid.Column width={4}>
            //                 <Grid>
            //                     <Grid.Row>
            //                         <Grid.Column width={16}>
            //                             <Image id="canto-logo" src={Canto} size="small" />
            //                         </Grid.Column>
            //                         <Grid.Column width={16}>
            //                             <Header id="canto-header" as="h2">Canto</Header>
            //                         </Grid.Column>
            //                     </Grid.Row>
            //                 </Grid>
            //             </Grid.Column>
            //             <Grid.Column width={4}></Grid.Column>
            //         </Grid.Row>
            //     </Grid>
            // </div>
        );
    }
}

export default SkillSection;