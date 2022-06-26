export abstract class BaseService {
  abstract select(props?: any): any
  abstract create(props?: any): any
  abstract update(props?: any): any
  abstract delete(props?: any): any
}
