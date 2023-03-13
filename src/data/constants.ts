
export const calendarUrl = (limit = 10, offset = 0) => `https://footballista.ru/api/seasons/5099/calendar_paginated?limit=${limit}&offset=${offset}`
export const logoUrl = (logo: string, logoId: number) => `https://footballista.ru/api/img/logos/${logo}-middle.png?logoId=${logoId}`