/*
 * Принимает дату в формате строки: 2024-11-08T19:40:10.915Z
 * возвращает строку в формате: дд.мм.гггг
 *
 * */
export const dateTransform = (dateStr: string) => {
    const date = new Date(dateStr)

    const formattedDate = date.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    })

    return formattedDate
}
