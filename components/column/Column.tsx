import React from 'react';
import Card, { CardData } from '../card/Card';
import styles from './Column.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

type ColumnProps = {
    id: number,
    title: String,
    cards: CardData[]
}
function Column(props: ColumnProps) {

    return <>
        <li key={props.id} className={styles.container}>
            <div className={styles.title}>
                <h2>{props.title}</h2>
                <FontAwesomeIcon className={styles.icon} icon={solid('ellipsis-h')} />
            </div>
            <ol className={styles.cards}>
                { props.cards.map(props => <Card key={props.id} {...props} />) }
            </ol>
            <div className={styles.cta}>
                <FontAwesomeIcon className={styles.icon} icon={solid('plus')} />
                <h4>Add another card</h4>
            </div>
        </li>
    </>
}
export default Column;