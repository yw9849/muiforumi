import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import App from './App';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const CustomizedSlider = styled(Slider)`
  color: #20b2aa;
  :hover {
    color: #2e8b57;
  }
`;

const CustomizedThemeSlider = styled(Slider)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};

  :hover {
    color: ${darken(theme.palette.primary.main, 0.2)};
  }
`,
);


const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: navy;
  }
`;

export function StyledComponents() {
  return (
    <div>
      <Slider defaultValue={30} />
      <CustomizedSlider defaultValue={30} />
      <CustomizedThemeSlider defaultValue={30} />
      <StyledTooltip title="I am navy" className="test">
        <Button variant="contained" color="primary">
          Styled tooltip
        </Button>
      </StyledTooltip>
    </div>
  );
}

export default function IndexPage() {
  return (
    <React.Fragment>
      <App />
      <h1>Index Page</h1>
      <StyledComponents />
    </React.Fragment>
  );
}
