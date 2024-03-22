import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function convertMinutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return `${hours} hours ${remainingMinutes} minutes`
}
export function formatedReleaseDate(dateString) {
  const parts = dateString.split('-')
  if (parts.length !== 3) {
    return 'Invalid date'
  }

  const day = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10)
  const year = parseInt(parts[2], 10)

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return 'Invalid date'
  }

  const date = new Date(year, month - 1, day)

  if (isNaN(date.getTime())) {
    return 'Invalid date'
  }

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`
  return formattedDate
}
