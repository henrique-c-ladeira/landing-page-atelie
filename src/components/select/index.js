import React from 'react';
import {
  FormControl,
  FormHelperText, Input, InputLabel, MenuItem, Select as MuiSelect,
} from '@material-ui/core';

export const Select = ({ onChange, list }) => (
  <FormControl>
    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
    <MuiSelect
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      onChange={onChange}
    >
      {list.map((elem) => (
        <MenuItem key={elem} value={elem}>
          {elem}
        </MenuItem>
      ))}
    </MuiSelect>
  </FormControl>
);
