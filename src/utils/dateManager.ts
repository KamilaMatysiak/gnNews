const addZero = (value: Number) => {
    return `${value < 10 ? `0${value}` : value}`
}

export const formatDate = (date: string) => {
    const newDate = new Date(date)
    return `${getDate(newDate)} ${getTime(newDate)}`
  }

export const getDate = (date: Date) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${addZero(day)}.${addZero(month)}.${year}`
    }  

export const getTime = (time: Date, withSeconds = false) => {
    const hour = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    return withSeconds ? `${addZero(hour)}:${addZero(minutes)}:${addZero(seconds)}` : `${addZero(hour)}:${addZero(minutes)}`
}