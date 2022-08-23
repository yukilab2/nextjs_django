import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

type UserT = {
  url: string;
  username: string;
  email: string;
  is_staff: boolean;
};

type UsersT = Array<UserT>;

const Home: NextPage = () => {
  const [users, setUsers] = useState<UsersT|null|void>(null);
  const [error, setError] = useState<string|null>(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS-Django</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid} onClick={async () => {
          setUsers(null);
          const users: UsersT|null|void = await fetch('/api/users')
            .then(response => {
              if (response.status != 200) {
                console.error("##response error:", response);
                return {status: response.status}
              }
              return response.json()
            })
            .then((json_data) => {
              return json_data;
            })
            .catch((_error) => {
              console.error("##CATCH", _error);
              setError(error);
              return error && error.toString();
            });
          if (users) {
            setUsers(users);
          } else {
            setUsers(null);
          }
        }}>CLICK ME TO RETRIEVE USERS</div>
      </main>

      <footer className={styles.footer}>
        <>
          {typeof users === 'object' && <div>
            RESPONSE: {JSON.stringify(users)}
          </div>}
          {error && <div>
          ERROR: {error.toString()}
          </div>}
        </>
      </footer>
    </div>
  )
}

export default Home
