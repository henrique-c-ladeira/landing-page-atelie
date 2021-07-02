import React from 'react';
import {
  FormControl,
  FormHelperText, Input, InputLabel, MenuItem, Select as MuiSelect,
} from '@material-ui/core';

export const Select = ({ onChange, list }) => (
  <FormControl style={{ width: '100%' }}>
    <InputLabel>Categoria</InputLabel>
    <MuiSelect
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
