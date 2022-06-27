import React from "react";
import { useStyles } from "./style";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faGear, faUpload, faBoxArchive} from '@fortawesome/free-solid-svg-icons'


export default function Sidebar(){
    const classes = useStyles()
    const sideNavs = [
        {
            key : "dashboard",
            navTitle: "Dashboard",
            icon : faGripHorizontal
        },
        {
            key : "upload",
            navTitle: "Upload File",
            icon : faUpload
        },
        {
            key : "settings",
            navTitle: "Settings",
            icon : faGear
        },
    ]
    return(
        <div className={classes.sidebar}>
            <h3 className={classes.logoname}><FontAwesomeIcon icon={faBoxArchive} />&nbsp;DropUrData</h3>
            <ul className={classes.sideBarList}>
                {
                    sideNavs.map((nav)=>(
                        <li className={classes.navLi} key={nav.key}>
                            <FontAwesomeIcon className={classes.navIcon} icon={nav.icon}/>
                            <NavLink className={classes.navLinks}  to={nav.key}>
                                <span className={classes.navTitle}>
                                    {nav.navTitle}
                                </span>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}