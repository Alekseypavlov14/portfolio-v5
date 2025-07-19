export function formatDate(date: number) {
  const dateObject = new Date(date)

  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()

  const formattedDay = String(day).padStart(2, '0')
  const formattedMonth = String(month).padStart(2, '0')

  return `${formattedDay}.${formattedMonth}.${year}`
}
