import styled from '@emotion/styled';
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export const Navbar = styled(Grid)`
  background: #f7f6fd;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: #FFF;
  margin-bottom: 20px;
  padding: 10px 30px;
  box-shadow: 0 7px 16px 5px #e7e8f7;
  z-index: 1;
`;

export const NavLink = styled('div')`
  text-align: center;
  a, svg {
    color: #133676;
  }
`;

export const NavbarIcon = styled('div')`
  padding: 6px 20px;
  text-align: center;
  min-width: 90px;
  border-radius: 60px;
  cursor: pointer;
`;

export const ScanIcon = styled(NavbarIcon)`
  background: #87e0ef;
`;

export const TerminateIcon = styled(NavbarIcon)`
  background: #f25767;
`;
