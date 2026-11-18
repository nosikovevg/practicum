import calendar

print('Добро пожаловать в СУПЕР календарь\n')

year = int(input('Пожалуйста введите год: '))
month = int(input('Введите номер месяца: '))

print(calendar.month(year, month))
print('Всего САМОГО хорошего!')
