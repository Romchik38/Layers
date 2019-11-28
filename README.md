Разделение программы на слои. Выполнение https://github.com/HowProgrammingWorks/Projecti

index.js  
  - импортирует  
    - http
    - libj.js
  - запускает createServer

libs.js  
  - импортирует все файлы, находящиеся в каталоге ./libs/  
  - экспортирует lib  

./libs/  
  - consts.js, содержит константы:  
    - PORT - номер порта для createServer  
    - экспортирует consts
      - объект, созданный Object.create(null)

  - parseurls.js  
    - функция  
    - получает url или связанное с ним значение, необходимое для отдачи результата  
    - экспортирет parseUrl  
      - { statusCode, data }  
      - statusCode - число (number) для res.statusCode  
      - data - строка или буфер для res.end
      - пример { statusCode: 404, data: 'Page not found' }
  - urls  
    - содержит маршруты  
    - экспортирует urls  
      - объект  
      - пример {   
                 '/': () => 'main.page',  
		}
