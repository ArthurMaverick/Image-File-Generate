export interface UpdateModel {
  update (arg: UpdateModel.Input): Promise<UpdateModel.Output>
}

export namespace UpdateModel {
  export type Input = string
  export type Output = string
}