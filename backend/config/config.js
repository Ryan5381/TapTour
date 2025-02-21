import 'dotenv/config'; // 確保環境變數可讀取

const config = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    define: {
      underscored: true,
    },
    migrationStorageTableName: 'SequelizeMeta',
    migrationStorageExtension: 'cjs',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      underscored: true,
    },
    migrationStorageExtension: 'cjs',
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || 3306, // 預設 3306
    dialect: 'mysql',
    define: {
      underscored: true,
    },
    migrationStorageTableName: 'SequelizeMeta',
    migrationStorageExtension: 'cjs',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      underscored: true,
    },
    migrationStorageExtension: 'cjs',
  },
  production: {
    username: process.env.DATABASE_USERNAME, // 修正 username
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST, // 加入 host
    port: process.env.DATABASE_PORT || 3306, // Railway 可能會提供不同的 port，確保能讀取
    dialect: 'mysql',
    define: {
      underscored: true,
    },
    migrationStorageTableName: 'SequelizeMeta',
    migrationStorageExtension: 'cjs',
  },
}

console.log('Database Config:', {
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
})

export default config
