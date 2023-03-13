export interface CardProps {
    _id: number
    date: Date
    tourNumber: number
    scoreFtHome: number
    scoreFtAway: number
    stadium: {
        _id: number
        name: string
    },
    teamHome: {
        _id: number
        name: string
        logo: string
        logoId: number
    }
    teamAway: {
        _id: number
        name: string
        logo: string
        logoId: number
    }

}