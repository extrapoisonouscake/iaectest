# IAEC - Image as Encryption Credentials
# RUS
IAEC расшифровывается как Изображение в качестве Реквизита для Шифрования.
# Как же это работает?
- Входными данными передаётся строка base64-данных.
- Далее из разрешения полученной base64-картинки специальным алгоритмом высчитывается оптимальное разрешение максимумом в 16 пикселей (будь то 4х4, 16х1 и т.д.).
- Затем изображение уменьшается, чтобы получить base64-строку некоторого размера.
Мы получаем строку вида:
```
XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
Из неё выносим середину в 48 символов.
И у нас получилась строка, которую можно использовать в качестве ключа!
В данном репозитории в файле IAEC.js используется тот же алгоритм, адаптированный под браузер. Но его можно использовать на любом языке программирования, использую любые подходящие библиотеки.
# Протестировать: https://vladislav959.github.io/iaectest
