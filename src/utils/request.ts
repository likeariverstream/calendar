
export type TRequest = {
    method?: string,
    headers: {
        'Content-Type': string
    },
    body?: string
}

export const request = async (url: string, options?: TRequest): Promise<any> => {
    const res = await fetch(url, options)
    return checkResponse(res)
}

const checkResponse = (res: Response) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка ${res.status}`)
}