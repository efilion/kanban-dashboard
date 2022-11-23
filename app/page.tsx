import React from 'react';
import Column from '../components/column/Column'
import styles from './page.module.css'
import { CardData } from '../domain/card';

export default async function Home() {

  const cards: CardData[] = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cards`)
    .then(res => res.json())
    .then(payload => payload.data);

  return (
    <main className={styles.main}>
      <ul className={styles.column__list}>
        <Column id={1} title={"Incoming Bugs"} cards={cards.filter(c => c.state === "Incoming Bugs")} />
        <Column id={2} title={"In Progress"} cards={cards.filter(c => c.state === "In Progress")} />
      </ul>
    </main>
  )
}
