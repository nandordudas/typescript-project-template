import type { BaseService } from './base.service'
import { UserService } from './user.service'

type ServiceFactory = (create?: boolean) => BaseService

const instances: Record<string, BaseService> = {}

export const services: Record<string, Record<'make', ServiceFactory>> = {
  users: {
    make: (create = false) => {
      if (create || !instances.users)
        instances.users = new UserService()

      return instances.users
    },
  },
}
