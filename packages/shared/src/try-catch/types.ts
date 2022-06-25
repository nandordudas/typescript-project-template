type Nullable<T> = T | null

export interface TryCatchResult<
  T, S = Awaited<Nullable<T>>, F = Nullable<Error>,
> {
  data: S
  error: F

}
