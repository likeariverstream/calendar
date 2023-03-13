import React from "react";
import styles from "./style.module.css"
import { CardProps } from "./interface";
import { logoUrl } from "../../data/constants";
export const Card = (props: CardProps) => {
    const { _id, date, tourNumber, teamHome, teamAway, scoreFtHome,
        scoreFtAway, stadium } = props

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    }
    const dateOfMatch = new Date(date).toLocaleString('ru', options)
    const stadiumName = stadium?.name ? stadium.name : `Стадион неизвестен`
    return (
        <section className={styles.card} id={`${_id}`}>
            <h2 className={styles.tour}>Номер тура: {tourNumber}</h2>
            <h3 className={styles.date}>{dateOfMatch}</h3>
            <p className={styles.stadium}>{stadiumName}</p>
            <div className={styles.container}>
                <section className={styles.info}>
                    <h4 className={styles.name}>{teamHome.name}</h4>
                    <img className={styles.logo} src={logoUrl(teamHome.logo, teamHome.logoId)} alt={teamHome.logo} />
                </section>
                <section className={styles.info}>
                    <h4 className={styles.name}>{teamAway.name}</h4>
                    <img className={styles.logo} src={logoUrl(teamAway.logo, teamAway.logoId)} alt={teamAway.logo} />
                </section>
            </div>
            <p className={styles.score}>{scoreFtHome} : {scoreFtAway}</p>
        </section>
    )
}