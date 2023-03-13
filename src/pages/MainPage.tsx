import React from "react";
import styles from "./style.module.css";
import { request } from "../utils/request";
import { calendarUrl, } from "../data/constants";
import { Card } from "../components/card/card";
import { CardProps } from "../components/card/interface";

export const MainPage = () => {
    const [items, setItems] = React.useState<Array<CardProps>>([])
    const [limit, setLimit] = React.useState(9)

    const getData = (limit: number, offset = 0) => {
        const url = calendarUrl(limit, offset)
        request(url).then((data) => {
            const { items } = data
            setItems(items)
        }).catch(console.warn)
    }

    const handleScroll = (event: WheelEvent) => {
        if (event.deltaY > 0) {
            setLimit(limit + 9)
            getData(limit, 9)
        }
    }

    React.useEffect(() => {
        getData(18, 9)
    }, [])

    React.useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    })

    return (
        items && <main className={styles.main}>
            {items.map((item) => {
                return <Card
                    key={item._id}
                    _id={item._id}
                    date={item.date}
                    tourNumber={item.tourNumber}
                    teamHome={item.teamHome}
                    teamAway={item.teamAway}
                    scoreFtHome={item.scoreFtHome}
                    scoreFtAway={item.scoreFtAway}
                    stadium={item.stadium}
                />
            })}
        </main>
    )
}