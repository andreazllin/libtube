export type InstancesResponse = Array<[string, InvidiousInstance]>

export type InvidiousInstance = {
  flag: string;
  region: string;
  stats: Stats | null;
  cors: boolean | null;
  api: boolean | null;
  type: InstanceType;
  uri: string;
  monitor: Monitor | null;
}

export type Monitor = {
  monitorId: number;
  createdAt: number;
  statusClass: StatusClass;
  name: string;
  url: null;
  type: MonitorType;
  dailyRatios: Ratio[];
  "90dRatio": Ratio;
  "30dRatio": Ratio;
}

export type Ratio = {
  ratio: string;
  label: StatusClass;
}

export type StatusClass = "success" | "warning" | "black";

export type MonitorType = "HTTP(s)";

export type Stats = {
  version: string;
  software: Software;
  openRegistrations: boolean;
  usage: Usage;
  metadata: Metadata;
}

export type Metadata = {
  updatedAt: number;
  lastChannelRefreshedAt: number;
}

export type Software = {
  name: Name;
  version: string;
  branch: Branch;
}

export type Branch = "master";

export type Name = "invidious";

export type Usage = {
  users: Users;
}

export type Users = {
  total: number;
  activeHalfyear: number;
  activeMonth: number;
}

export type InstanceType = "https" | "i2p" | "onion";
