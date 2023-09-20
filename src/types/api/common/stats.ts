export interface Stats {
  version: string
  software: {
    name: "invidious"
    version: string
    branch: string
  }
  openRegistration: boolean
  usage: {
    users: {
      total: number
      activeHalfyear: number
      activeMonth: number
    }
  }
  metadata: {
    updatedAt: number
    lastChannelRefreshedAt: number
  }
}


