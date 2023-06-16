export const config = {
  "dev": {
    "username": "postgres",
    "password": "123456",
    "database": "simplebank",
    "host": "localhost",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-dev"
  },
  "jwt": {
    "secret": "abc"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
