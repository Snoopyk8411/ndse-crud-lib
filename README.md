# ndse-crud-lib
### Heroku app url
https://ndse-crud-lib-ejs.herokuapp.com/

### Описание
Данная утилита, создана для реализации домашних заданий по курсу netology-ndse\
а точнее, для разработки REST API

### Начало работы
Для корректной работы вам потребуется установленная [Node](https://nodejs.org/en/)

Запустите в консоли:\
`npm i`\
Затем:\
`npm link`\
После этого, данная утилита, будет доступна по ключевому слову - `expresso`

### Логгирование
По умолчанию, все команды логгируется - логи хранятся в файле вида:\
`<command>_log.txt`\
Файлы логов, хранятся в корне репозитория, в папке `logs`\
Однако, если вы хотите переопределить файл логгирования, то в любой команде нужно добавить аргумент:\
`--logPath=<logFilePath> || --logPath <logFilePath>, где logFilePath - путь до целевого файла`\
`> nds current --logPath ./test.txt`\

### Some magic
Для того, чтобы добавить немножко магии в работу, запустите :\
`expresso patronum`\
И посмотрите что произойдёт ;)

### Server start
Для того, чтобы стартовать работу сервера запустите команду :\
`npm run start_service`\
`Server is running on port 3000`\
По умолчанию, порт - 3000, но доступно переопределение порта через переменную окружения `PORT`

### Поддерживаемые сервисы
На текущий момент поддерживается 3 микросервиса:
`books, counter, ms_broker`\
Вариативность осуществляется через флаг **--service**
`npm run start_service --service=books`\

### Сервис книг со счётчиком
Чтобы протестировать работы сервиса - запустите\
`npm run start`\
Данная команда, запустит брокер, который в свою очередь поднимет все требуемые сервисыё
в данном случае `books и counter`\

### Микросервис брокер (ms_broker)
Данный микросервис, служит для упорядоченного запуска в параллельных процессах (child_process) указанного ряда сервисов.\
После запуска, сервис регистрируется с сохранением его мета-информации, для последующего обеспечения взаимодействия N запущенных сервисов между собой. Сервис позволяет выяснить на каком порту развернут нужный сервис.\
метод | url | действие | комментарий
--- | --- | ---  | ---
`POST` | `/api/ms_broker/` | Зарегистрировать сервис | метод регистрирует в хранилище МС новый сервис по **serviceName** , возвращает объект: `{ name: _serviceName_ , port: _port_ ... }`
`GET` | `/api/ms_broker/:serviceName` | Запрос даты по МС | возвращает всю мета-информацию сохраненную для данного МС **serviceName** , возвращает объект: `{ name: _serviceName_ , port: _port_ ... }`

### Объект зарегистрированного МС
Каждый экземпляр сервиса представляет собой следующую структуру данных: 
```javascript
{
  name: "string",
  port: "string",
  ...
}
```

### Микросервис книги (books)
метод | url | действие | комментарий
--- | --- | ---  | ---
`POST` | `/api/user/login` | авторизация пользователя | метод всегда возвращает **Code: 201** и статичный объект: `{ id: 1, mail: "test@mail.ru" }`
`GET` | `/api/books` | получить все книги | возвращает массив всех книг
`GET` | `/api/books/:id` | получить книгу по **id** | возвращает объект книги, если запись не найдена вернёт **Code: 404** и текст `Error: Data not found`
`GET` | `/api/books/:id/download` | скачать файл книги по **id** | возвращает сохраненный за книгой файл по **id**, если файл или запись не найдены - вернёт **Code: 404** и текст `Error: Data not found`
`POST` | `/api/books` | создать книгу | создаёт книгу и возвращает её же вместе с присвоенным **id**
`PUT` | `/api/books/:id` | редактировать книгу по **id** |  редактирует объект книги, если запись не найдена вернёт **Code: 404** `Error: Data not found`
`PUT` | `/api/books/:id/upload` | загружает файл книги | загружает файл книги и присваивает имя файла книги в поле **fileBook** по **id**, возвращает модифицированную запись книги, если запись не найдена вернёт **Code: 404** `Error: Data not found`
`DELETE` | `/api/books/:id` | удалить книгу по **id** | удаляет книгу и возвращает ответ: **'ok'** , также, если у книги в поле **fileBook** указано имя файла, файл будет удален из хранилища. При повторной попытке, ожидаемо вернёт **Code: 404** `Error: Data not found`

### Объект книги
Каждый экземпляр книги представляет собой следующую структуру данных: 
```javascript
{
  id: "string",
  title: "string",
  description: "string",
  authors: "string",
  favorite: "string",
  fileCover: "string",
  fileName: "string",
  fileBook: "string"
}
``` 
### Микросервис счетчик (counter)
метод | url | действие | комментарий
--- | --- | ---  | ---
`POST` | `/api/counter/:id/incr` | Увеличить счётчик | метод увеличивает значение запроса к сущности с **id** на **1** , возвращает объект: `{ count: _value_ }`
`GET` | `/api/counter/:id` | Количетсво инкрементов | возвращает количество инкрементов сущности по **id** , возвращает объект: `{ count: _value_ }`

### Объект счетчика
Каждый экземпляр счетчика представляет собой следующую структуру данных: 
```javascript
{
  [id]: "number"
}
``` 

### Запросы к MongoDB
```javascript
запрос для вставки данных минимум о двух книгах в коллекцию books
db.books.insertMany([
{ title: "title1", description: "desc1", authors: "authors1" },
{ title: "title2", description: "desc2", authors: "authors2" }
])

запрос для поиска полей документов коллекции books по полю title
db.books.find(
{ title: "title1" },
{ title: 1, description: 1, authors: 1 }
)

запрос для редактирования полей: description и authors коллекции books по _id записи
db.books.updateOne(
{ _id: "id1"},
{ $set: { authors: "authors1", description: "description1" } }
)
```
