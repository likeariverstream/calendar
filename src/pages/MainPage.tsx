import React from "react";
import styles from "./style.module.css";
import { request } from "../utils/request";
import { calendarUrl, } from "../data/constants";
import { Card } from "../components/card/card";
import { CardProps } from "../components/card/interface";

export const MainPage = () => {
    const [items, setItems] = React.useState<Array<CardProps>>([])
    const [limit, setLimit] = React.useState(9)

    const getData = () => {
        const url = calendarUrl(limit)
        request(url).then((data) => {
            const { items } = data
            setItems(items)
            console.log(data)
        }).catch(console.warn)
    }
    const handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            setLimit(limit + 9)
            getData()
        }
    }
    React.useEffect(() => {
        getData()
    }, [])
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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