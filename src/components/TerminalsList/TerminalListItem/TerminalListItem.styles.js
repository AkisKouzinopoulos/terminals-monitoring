import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const TerminalBox = styled(Stack)`
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #f7f6fd;
  box-shadow: 0 0 0 2px #dddded inset;
  opacity: ${({ status }) => status ? '15' : '0.5'};
`;

export const TerminalBoxHeader = styled(Stack)`
  background: #e7e7f7;
  border-radius: 17px;
  height: 50px;
  padding: 2px 4px;
`;

export const TerminalBoxContent = styled('div')`
  padding: 4px 10px;
`;

export const TerminalBoxHeaderIcon = styled('div')`
  background: ${({ status }) => status ? '#86ef9882' : '#cbccde66'};
  color: #bcb9da;
  border-radius: 13px;
  padding: 8px 10px;
`;

export const IpAddress = styled(Typography)`
  background: ${({ selected }) => selected ? '#c6c6dc' : '#dbdeed'};
  color: #4e506c;
  padding: 6px 14px;
  border-radius: 10px;
  box-shadow: -1px 0px 7px 2px #7273843d;
  transition: all 0.2s ease-in-out;
`;
