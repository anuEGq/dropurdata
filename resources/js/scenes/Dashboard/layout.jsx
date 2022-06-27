import classNames from "classnames";
import React from "react";
import Table from "../../components/Table"
import { useStyles } from "./style";
import DashboardFileCard from "../../components/DashboardFileCard";
import { useNavigate } from "react-router-dom";


export default function Dashboard(props) {
    const navigate = useNavigate();
    
    const { isSettingsLoading,isFileCountLoading, onInit, getFileCounts,  fileCountData } = props;

    /*OnInit - trigger global redux action to get Settings values,
    getFileCounts  - trigger get each file count */
    React.useEffect(() => {
        onInit();
        getFileCounts();
    }, []);

    /*on click on the dashboard card user navigate to files scene to view table by settings sates cuurent clicked file cards */
    const cardClickHandler = (fileCard) => {
        navigate("../files", {state:{data:fileCard}});
    };

    const classes = useStyles();
    return (
        <>
            <div className={classNames(classes.dashboard)}>
                <h6 className={classNames(classes.dashTitle)}>Overview</h6>
                <div className={classNames(classes.dashCards)}>
                    {(isFileCountLoading || isSettingsLoading )? (
                        <span>Loading... </span>
                    ) : (
                        fileCountData.map((filedta) => (
                            <DashboardFileCard
                                onClick={cardClickHandler}
                                key={filedta.key}
                                fileCardDate={filedta}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
