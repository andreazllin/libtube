import dayjs from "./dayjs"

export const secondsToDuration = (timeInSeconds: number): string => {
  const durationObject = dayjs.duration(timeInSeconds, "seconds")
  return durationObject.format("HH:mm:ss")
}
