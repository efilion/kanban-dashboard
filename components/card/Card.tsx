import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './Card.module.css';
import { CardData } from '../../domain/card';
import Tag from '../tag/Tag';

function Card(props: CardData) {
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

function hasActions(props: CardData) {
    return props.description || props.tasks
}