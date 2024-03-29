import React from "react";
import { Grid } from "@material-ui/core";

export const Container = (props) => <Grid container {...props}></Grid>;
export const Item = (props) => <Grid item xs={12} md={6} {...props}></Grid>;
