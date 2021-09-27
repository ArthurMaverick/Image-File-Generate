export interface DeleteModel {
  delete (arg: DeleteModel.Input): Promise<DeleteModel.Output>
}

export namespace DeleteModel {
  export type Input = string
  export type Output = string
}