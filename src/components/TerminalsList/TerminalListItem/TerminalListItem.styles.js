import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const TerminalBox = styled(Stack)`
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
  border-radius: 20px;
  background: var(--lightGreyBg);
  box-shadow: 0 0 0 2px var(--borderGrey) inset;
  opacity: ${({ status }) => status ? '15' : '0.5'};
`;

export const TerminalBoxHeader = styled(Stack)`
  background: var(--lightGreyBg2);
  border-radius: 17px;
  height: 50px;
  padding: 2px 4px;
`;

export const TerminalBoxContent = styled('div')`
  padding: 4px 10px;
`;

export const TerminalBoxHeaderIcon = styled('div')`
  background: ${({ status }) => status ? 'var(--greenTransparent)' : 'var(--greyTransparent)'};
  color: var(--greyText);
  border-radius: 13px;
  padding: 8px 10px;
`;

export const IpAddress = styled(Typography)`
  background: ${({ selected }) => selected ? 'var(--lightGreyBg4)' : 'var(--lightGreyBg3)'};
  color: var(--darkGrey);
  padding: 6px 14px;
  border-radius: 10px;
  box-shadow: -1px 0px 7px 2px var(--shadowGrey);
  transition: all 0.2s ease-in-out;
`;
