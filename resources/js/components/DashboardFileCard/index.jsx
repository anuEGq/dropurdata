import React from "react";
import { useStyles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DashboardFileCard(props) {
    const classes = useStyles();
    const { onClick, fileCardDate} = props;
    return (
        <div
            onClick={() => onClick(fileCardDate)}
            key={fileCardDate.key}
            className={classes.card}
        >
            <div>
                <h5 className={classes.cardTitle}>{fileCardDate.title}</h5>
                <p className={classes.cardCount}>{fileCardDate.count}</p>
            </div>
            <div>
                <FontAwesomeIcon
                    className={classes.cardIcon}
                    icon={fileCardDate.icon}
                />
            </div>
        </div>
    );
}
