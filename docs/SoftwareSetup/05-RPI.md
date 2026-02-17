---
id: rpi-setting
title: Настройка RPI
sidebar_label: Настройка RPI
sidebar_position: 5
description: Настройка  CAN и CAN FD на Raspberry PI
---
# Настройка CAN на RPI

Для работы с CAN необходимо установить CAN-utils - набор полезных и удобных инструментов отладки, использующих интерфейс SocketCAN. Для установки их на Raspberry, используйте следующую команду:

```
sudo apt-get install can-utils 
```

CAN-utils содержат следующие полезные инструменты:

* **candump -** позволяет отображать, фильтровать и записывать CAN пакеты
* **canplayer -** воспроизводит записанные CAN пакеты
* **cansend -** отправляет один CAN пакет
* **cangen** - генерирует случайные пакеты
* **canbusload -** отображение текущей нагрузки на шину CAN

В данной инструкции будут рассмотрены утилиты _candump_ и _cansend_, потому что ими мы и будем чаще всего пользоваться. С остальными утилитами мы предлагаем читателю ознакомиться  самостоятельно на [страничке](https://github.com/linux-can/can-utils) github.

Чтобы запустить интерфейс для работы с CAN на Raspberry вводим команду

```
sudo ip link set can0 up txqueuelen 65535 type can bitrate 1000000
```

Если у вас вышла **ошибка "Cannot find device "can0""**, сделайте следующее:

```
sudo nano /boot/firmware/config.txt
```
В конец открывшегося файла добавьте строчку

```
dtoverlay=seeed-can-fd-hat-v2
```

![Шаг 1](/img/RPI/rpi-1.png)

Сохраните (Ctrl+S) и закройте(Ctrl+X) файл. Перезагрузите raspberry:

```
sudo reboot
```

Сообщения, получаемые и отправляемые через CAN - это некоторое количество байтов. Чтобы посмотреть что в CAN посылаются пакеты мы используем утилиту _candump:_

```
candump can0
```

Введя эту команду, мы увидим абсолютно все пакеты, передаваемые по CAN. Если нам нужно посмотреть сообщения, имеющие определенный ID, например 100, мы переводим ID в 16-ричную систему счисления (в нашем примере 100=0х64) и выполняем команду `candump can0,ID:7ff` Для ID 100 она выглядит слующим образом:

```
candump can0,064:7ff
```

Используем утилиту _cansend_ для отправки сообщения (4 байта DE AD BE EF) в CAN, ID сообщения 100 (0х64):

```
cansend can0 00000064#DEADBEEF
```

Команда отключения интерфейса:

```
sudo ifconfig can0 down
```

## **CAN-FD**

Шина CAN-FD – это следующий этап развития классической шины CAN. CAN-FD обеспечивает более высокую скорость передачи данных и больший объем передаваемых данных в одном кадре. Если вы проделали все шаги по установке CAN-utils, описанные выше, ничего дополнительно устанавливать не придется. Отличаться будет только команда запуска интерфейса:

```
sudo ip link set can0 up txqueuelen 65535 type can bitrate 1000000 dbitrate 8000000 fd on
```

Далее мы будем использовать CAN-FD, с точки зрения использования утилит, ничего не поменяется. Прочитать подробнее о различиях CAN и CAN-FD можно [здесь](https://canhacker.ru/what-is-can-fd/).

Удобно, чтобы не включать интерфейс для общения с CAN-FD каждый раз, настроить автозапуск CAN-utils. Для этого создадим небольшой скрипт canup.sh в домашней дирректории и пропишем туда команду запуска CAN-FD

```
sudo nano /usr/local/bin/canup.sh
```
В файл вставьте:

```
#!/bin/sh
sudo ip link set can0 up txqueuelen 65535 type can bitrate 1000000 dbitrate 8000000 fd on
```

Сохраните (Ctrl+S) и закройте(Ctrl+X) файл. Далее сделайте его исполняемым:

```
sudo chmod +x /usr/local/bin/canup.sh
```

Добавим созданный скрипт в автозапуск. 

```
cd /etc/systemd/system
sudo nano canstart.service
```
В файл вставьте:

```
[Unit]
Description=Autostart Can
After=network.target
[Service]
Type=oneshot
User=root
Group=root
ExecStart=/usr/local/bin/canup.sh
Restart=on-failure
StandardOutput=append:/var/log/can_service.log
StandardError=append:/var/log/can_service.err
[Install]
WantedBy=multi-user.target 

```
Сохраните и закройте. После в терминале выполните команды:

```
sudo systemctl daemon-reload
sudo systemctl enable canstart.service
sudo systemctl start canstart.service
```
Все, теперь каждый раз при включении вашего  компьютера интерфейс can будет запускаться автоматически.
Полезно знать команду

```
ip -details link show can0
```

Эта команда позволяет получить информацию об интерфейсе can0. Отметим, что, если при получении и отправке сообщений не возникает никаких ошибок, то в записи об ошибках вы увидите 0, как показано ниже

![Шаг 3](/img/RPI/rpi-3.png)
В данном разделе было описано как установить CAN-utils для взаимодействия с CAN и CAN-FD на Raspberry Pi, а также установки включения этого интерфейса в автозапуск. Далее разберем примеры получения и отправки сообщений по CAN-FD на низком уровне с помощю Arduino.
