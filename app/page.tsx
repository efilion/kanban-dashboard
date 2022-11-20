import React from 'react';
import Image from 'next/image'
import Column from '../components/column/Column'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <ul className={styles.column__list}>
        <Column id={1} title={"Incoming Bugs"} cards={[
          { id: 1, title: "Lightbox loading issue on Safari", tags: ["Browser"], description: "Something here" },
          { id: 2, title: "Notifications Not Sending #4", tags: ["High Priority"] },
          { id: 3, title: "Download icon rendering issue", tags: ["Design", "High Priority"], description: "Something more" },
          { id: 4, title: "Tab to comment goes to wrong field", tags: ["Browser", "Low Priority"], description: "Here too" }
        ]} />
        <Column id={2} title={"In Progress"} cards={[
          { id: 5, title: "Localization", tags: ["High Priority"], tasks: [{title: "Choose a PR agency", is_complete: true}, {title: "Create messaging guidelines", is_complete: false}, {title: "Create ad banners", is_complete: false}], members: [{name: "Man standing near balcony", avatar_url: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"}]}
        ]} />
      </ul>
    </main>
  )
}
