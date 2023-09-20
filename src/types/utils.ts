// Pick a subset of properties from an object type and make them required
export type Require<T, K extends keyof T> = T & { [P in K]-?: T[P] }
