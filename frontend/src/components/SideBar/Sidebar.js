import React, { Component } from 'react';

import { Container } from './styles';

import './../../../node_modules/@trendmicro/react-sidenav/dist/react-sidenav.css';

// Toggle, Nav no import trendmicro
// TODO criar o main e as funcionalidades, estudar sobre rotas

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class SideBar extends Component {
  render() {
    return (
        <Container>
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                    }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="dashboard">
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                            <i style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>Dashboard</NavText>
                    </NavItem>
                    <NavItem eventKey="sprints">
                        <NavIcon>
                            <i style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>Sprints</NavText>
                        <NavItem eventKey="productBacklog">
                            <NavText>Product Backlog</NavText>
                        </NavItem>
                        <NavItem eventKey="sprintBacklog">
                            <NavText>Sprint Backlog</NavText>
                        </NavItem>
                        <NavItem eventKey="sprintReview">
                            <NavText>Sprint Review</NavText>
                        </NavItem>
                        <NavItem eventKey="sprintRetrospective">
                            <NavText>Sprint Retrospective</NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="kanban">
                        <NavIcon>
                            <i style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>Kanban Board</NavText>
                    </NavItem>
                    <NavItem eventKey="projects">
                        <NavIcon>
                            <i style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>Projects</NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>    
        </Container>
    );
  }
}