import styled from '@emotion/styled';
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export const Navbar = styled(Grid)`
  background: var(--lightGreyBg);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: var(--white);
  margin-bottom: 20px;
  padding: 10px 30px;
  box-shadow: 0 7px 16px 5px var(--shadowLightGrey);
  z-index: 1;
`;

export const NavLink = styled('div')`
  text-align: center;
  a, svg {
    color: var(--darkBlue);
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    a, svg {
      color: var(--orange);
    }
  }
`;

export const NavbarIcon = styled('div')`
  padding: 6px 20px;
  text-align: center;
  min-width: 90px;
  border-radius: 60px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {    
    background: var(--lightGreyBg4);
    color: var(--darkBlue);
    box-shadow: 0 0 0 2px var(--borderGrey) inset, 0 0px 16px 5px var(--shadowLightGrey);
  }
`;

export const ScanIcon = styled(NavbarIcon)`
  background: var(--lightBlueBg);
`;

export const TerminateIcon = styled(NavbarIcon)`
  background: var(--redBg);
`;
