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

  - types.js  
    - объект  
    - содержит функции по типу данных.   
    - экспортирет types    
    - любая функция возвращает объект  
      - { writeHead, data }  
      - writeHead - массив с элементами для res.writeHead()  
      - data - строка или буфер для res.end  
      - пример { writeHead: [200], data: 'Good's page' }  

  - urls  
    - содержит маршруты  
    - экспортирует urls  
      - объект  
      - пример {   
                 '/': () => 'main.page',  
		}  
      - тип зачения:  
        - string - переадресация  
        - undefined - не найдено  
        - function - выполнение   
