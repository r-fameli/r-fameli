import React, { Component } from 'react';
import '../../css/Projects.css'
import SectionHeading from '../heading/SectionHeading';
import SectionBox from '../sectionBox/SectionBox';
import ccvImage from '../../assets/ccv-black-background.png'


class ProjectsSection extends Component {
    render() {
        const ccvAutomationDescription = <div>
            <text>
                Script created using Python and Selenium WebDriver that automatically opens a browser and adds
                users through various web interfaces.
            </text>
            <ul>
                <li>Waits for users to log in manually to services</li>
                <li>Adds users to several mailing lists in Listserv</li>
                <li>Adds users to the correct group in Grouper</li>
                <li>Inserts a message to send to user into Deskpro</li>
            </ul>
        </div>
        
        const journalTexterDescription = <div>
            <text>
            A journalling web application for Intro to Sofware Engineering that prompts user with predetermined
            questions based on what they write.
            </text>
            <ul>
                <li>Relies on word count vectorization to suggest questions</li>
                <li>Uses Java for backend data manipulation</li>
                <li>Frontend UI developed using React.js</li>
                <li>Worked in a team of 4, relying on frequent communication and Git to develop ideas and combine components</li>
                <li>Personally created the database format to use and handled all backend interactions with SQLite databases</li>
            </ul>
        </div>

        const auctionsProject = <div>
            Created a basic auctions website with user authentication using Django and SQLite for CS50 Web Programming
        </div>


        const sockyDescription = <div>
            A short 2D collecting game developed using the Pygame library for Python as a final project for CS50x.
        </div>
        let textBoxStyle = {
            backgroundColor: "#8AC6D1",
        }
        let boxStyle = {
            boxShadow: "5px 10px #6EA3AC",
        }

        return (
            <div className={"Projects section"}>
                <SectionHeading text="projects" />
                <div className={"Projects-box-container"}>
                    <SectionBox
                        title="CCV Automation Script"
                        description={ccvAutomationDescription}
                        image={ccvImage}
                        boxStyle={boxStyle}
                        textBoxStyle={textBoxStyle}
                    />
                    <SectionBox
                        title="JournalTexter"
                        description={journalTexterDescription}
                        image={ccvImage}
                        boxStyle={boxStyle}
                        textBoxStyle={textBoxStyle}
                    />
                    <SectionBox
                        title="Socky"
                        description={sockyDescription}
                        image={ccvImage}
                        boxStyle={boxStyle}
                        textBoxStyle={textBoxStyle}
                    />
                    <SectionBox
                        title="Auctions Project"
                        description={auctionsProject}
                        image={ccvImage}
                        boxStyle={boxStyle}
                        textBoxStyle={textBoxStyle}
                    />
                </div>
            </div>
        )

    }
}
export default ProjectsSection;