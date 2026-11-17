1) Проверяем установлен ли
node -v
![[nodejs-1.png]]

2) Выполняем команду подготовки конфигурации
npm init -y

![[nodejs-2.png]]

3) Устанавливаем пакет express

npm i --save express

![[nodejs-4.png]]

4) Создаем .gitignore и делаем запись node_modules/
5) Можно удалить папку с модулями и package-lock.json
6) Для развертывания проекта достаточно двух файлов (ну и +.gitignore )
![[nodejs-5.png]]

7) Развертываем проект командой (папка проекта текущая)
npm i

