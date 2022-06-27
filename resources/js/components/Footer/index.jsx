import React from "react";
import { useStyles } from "./style";

export default function Footer() {

    const classes = useStyles()

    return(<div className={classes.footer}>
        Copyright © 2022 RSGP Consulting Private Limited | All rights reserved
    </div>)
}
