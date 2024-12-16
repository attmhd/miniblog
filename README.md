
# Miniblog

This is the project for the web development course.

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=laravel,mysql,vite,tailwind)](https://skillicons.dev)



## Installation

Clone project

```bash
  https://github.com/attmhd/miniblog.git
```
Go to project directory

```bash
  cd simple-blog
```
Rename **env.example** to **.env**

Install depedencies

```bash
composer install
npm install
```
Generate Key

```bash
php artisan key:generate
```    

Running project

```bash
npm run dev
```    

Generate Key

```bash
php artisan serve
```    
    
## Deployment

To deploy this project build this project first

```bash
  npm run build
```


Zip this project & upload to cpanel

Modify .env file

```bash
APP_NAME=Laravel
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_URL=https://urdomain.com

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=urdbname
# DB_USERNAME=urdbusername
# DB_PASSWORD=urdbpwd

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=simple_blog
DB_USERNAME=root
DB_PASSWORD=



BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=mt1

VITE_APP_NAME="${APP_NAME}"
VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

```

## Authors

- [@attmhd](https://github.com/attnmhd/)