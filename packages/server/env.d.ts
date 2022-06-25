declare namespace NodeJS {
  export interface ProcessEnv {
    MYSQL_DATABASE: string
    MYSQL_PASSWORD: string
    MYSQL_ROOT_PASSWORD: string
    MYSQL_USER: string
    NODE_ENV: 'development' | 'production'
    SERVER_PORT: number
  }
}
