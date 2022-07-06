import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  color: #555;
  & .MuiSelect-select {
    font-size: 1.5rem;
    box-sizing: inherit;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    font-size: 1.8rem;
  }
`;

export default function StatusSelect() {
  const [status, setStatus] = React.useState("TO_LEARN");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <StyledSelect
          id="demo-simple-select"
          value={status}
          onChange={handleChange}
        >
          <StyledMenuItem value="TO_LEARN">TO LEARN</StyledMenuItem>
          <StyledMenuItem value="LEARNING">LEARNING</StyledMenuItem>
          <StyledMenuItem value="LEARNED">LEARNED</StyledMenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  );
}
