import React from "react";
import { TagType } from "../../domain/tag";
import styles from "./Tag.module.css";

function Tag({type}: {type: TagType}) {
    const tagStyle = {
        "Browser": styles.browserTag,
        "Design": styles.designTag,
        "High Priority": styles.highPriorityTag,
        "Low Priority": styles.lowPriorityTag
    };
    return <span className={`${styles.tag} ${tagStyle[type]}`}>{type}</span>
}
export default Tag;