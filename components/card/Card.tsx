import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './Card.module.css';

export type CardProps = {
    id: number,
    title: String,
    description?: String,
    tags?: TagType[],
    tasks?: {title: String, is_complete: boolean}[],
    members?: {name: String, avatar_url: String}[] 
}
function Card(props: CardProps) {
    return <li className={styles.container}>
        {props.tags && props.tags.map(t => <Tag key={t} type={t} />)}
        <h6 className={styles.title}>{props.title}</h6>
        {hasActions(props) &&
            <ol className={styles.actions}>
                {props.description &&
                    <li key={`${props.id}--description`}>
                        <FontAwesomeIcon className={styles.icon} icon={solid('align-left')} />
                    </li>
                }
            </ol>
        }
    </li>
}
export default Card;

type TagType = "Browser" | "Design" | "High Priority" | "Low Priority"
function Tag({type}: {type: TagType}) {
    const tagStyle = {
        "Browser": styles.browserTag,
        "Design": styles.designTag,
        "High Priority": styles.highPriorityTag,
        "Low Priority": styles.lowPriorityTag
    };
    return <span className={`${styles.tag} ${tagStyle[type]}`}>{type}</span>
}

function hasActions(props: CardProps) {
    return props.description || props.tasks
}