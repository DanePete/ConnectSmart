
import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import {AmplifySignOut} from '@aws-amplify/ui-react';
import { AiOutlineUser } from 'react-icons/ai';
import { GoDashboard } from 'react-icons/go';
import { GrUserAdmin} from 'react-icons/gr';
import { RiComputerLine } from 'react-icons/ri';

const SideBar = () => {
  return (
      <ProSidebar breakPoint="md" toggled="true">
        <SidebarHeader>
          <h3>ConnectSmart</h3>
        </SidebarHeader> 
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<GoDashboard />}>
              Dashboard
              <Link to="/" />
            </MenuItem>
            <MenuItem icon={<RiComputerLine />}>
              View Software
              <Link to="/software" />
            </MenuItem>          
            <SubMenu title="Administration" icon={<GrUserAdmin />}>
              <MenuItem icon={<AiOutlineUser />}>
                Users
                <Link to="/Users" />
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <AmplifySignOut />
        </SidebarFooter>
      </ProSidebar>
  );
};

export default SideBar;