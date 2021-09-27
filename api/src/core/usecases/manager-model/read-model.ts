export interface ReadModel {
  read (): Promise<ReadModel.Output>
}

export namespace ReadModel {
  export type Output = string
}