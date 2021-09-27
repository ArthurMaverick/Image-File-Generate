export interface CreateModel {
  create (arg: CreateModel.Input): Promise<CreateModel.Output>
}

export namespace CreateModel {
  export type Input = string
  export type Output = string
}