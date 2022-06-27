import React from "react";
import SettingsForm from "../../components/SettingsForm";
import { useStyles } from "./style";
import swal from 'sweetalert';

export default function Settings(props) {
    const classes = useStyles();
    const {
        onSubmit,
        onInit,
        supportedFileSize,
        supportdFormats,
        isSettingsLoading,
        settingsId,

    } = props;

    React.useEffect(() => {
        onInit();
    }, []);
    const alertSuccesMsg = () =>{
        swal("Settings Updated!", "Settings Updated Successfully!", "success");
        navigate("/dashboard")
    }
    return (
        <div className={classes.dashboard}>
            <h6 className={classes.dashTitle}>Settings</h6>
            {isSettingsLoading  ? (
                <span>Settings Loading...</span>
            ) : (
                <SettingsForm
                    supportdFormats={supportdFormats}
                    supportedFileSize={supportedFileSize}
                    onSubmit={(value) => onSubmit({...value, set_id:settingsId})}
                />
            )}
        </div>
    );
}
