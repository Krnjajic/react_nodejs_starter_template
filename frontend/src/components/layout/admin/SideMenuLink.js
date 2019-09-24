import React, { Component } from "react";
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {  NavLink } from 'react-router-dom'
import Link from '../../../js/helperClasses/Link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const SideMenuLinkStyle = styled.div`
    background: inherit;

    .sidemenu-icon {
        margin: 0 15px 0 5px;
    }

    .toogle-header {
        background: "inherit";
        border: 0;
    }

    .card-header {
        background-color : inherit;
        border: 0;
    }

    .sublink-active {
        color: red;
    }

    .header-active {
        color: red;
    }
`;
                        
class SideMenuLink extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: Link.findPathInLinks(props.location.pathname, props.data.subMenu)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setState({
                isActive: Link.findPathInLinks(this.props.location.pathname, this.props.data.subMenu)
            });
        }
    }

    render() {
        return  <SideMenuLinkStyle>
                    <Card style={{backgroundColor : "inherit", border: "0"}}>
                        <Accordion.Toggle 
                            className={this.state.isActive ? "header-active" : ""}
                            as={Card.Header} 
                            eventKey={this.props.eventKey}>
                                <FontAwesomeIcon className="sidemenu-icon" icon={this.props.data.icon}/>{this.props.data.name}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={this.props.eventKey}>
                            <Card.Body className="d-flex align-items-start flex-column pt-1">
                                {this.props.data.subMenu.map((link, index)=>{
                                    return <NavLink 
                                                activeClassName="sublink-active" 
                                                className="pt-1" 
                                                key={index} 
                                                to={link.relativeUrl}>
                                                    {link.name}
                                            </NavLink>
                                })}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </SideMenuLinkStyle>

    }
}

export default withRouter(SideMenuLink);