---
id: rpi-errors
title: Часто возникаемые ошибки при настройке CAN/CAN FD
sidebar_label: Часто возникаемые ошибки при настройке CAN/CAN FD
sidebar_position: 6
description: Часто возникаемые ошибки при настройке CAN/CAN FD
---


## Данные отправляются, но не принимаются

**Шаг 1.** Проверьте настроенные скорости на принимающем и отправляющем устройствах

на распберри можно использовать команду 

```bash
ip -details link show can0
```

На распберри скорости задаются при запуске интерфейса. Для CAN FD:

```bash
sudo ip link set can0 up txqueuelen 65535 type can bitrate 1000000 dbitrate 8000000 fd on
```

Здесь заданы скорости 1000000 и 8000000.

Для CAN:

```bash
sudo ip link set can0 up txqueuelen 65535 type can bitrate 1000000
```

Здесь скорость 1000000

<!-- На Arduino скорости меняются на в функции setup(), используя методы write\_default\_params\_classic() для CAN FD и write\_default\_params() для обычного CAN. Подробнее читайте в разделе[ работа с CAN и CAN FD на Arduino](../../primery/primery-arduino/rabota-s-can-i-can-fd-na-arduino.md). -->

Чаще всего данные не принимаются именно из-за несовпадения скоростей.

**Шаг 2.** Если скорости у вас совпадают, а данные все еще не принимаются, проверьте тип ID сообщения. Он может быть Standart, а может быть Extended. Несовпадение типов тоже может быть причиной неполучения данных. Лучше всегда используйте FDCAN\_EXTENDED\_ID и не парьтесь)). 

<!-- В Arduino настройка типа выглядит так `TxHeader.IdType = FDCAN_EXTENDED_ID` В разделе[ работа с CAN и CAN FD на Arduino](../../primery/primery-arduino/rabota-s-can-i-can-fd-na-arduino.md) есть примеры настроек. -->



## Segmentation Fault

При установке новой версии ОС на распберри, с версии 2024 года,  при установке can-utils и изменении файла /boot/firmware/config.txt (раньше он был /boot/config.txt) при поднятии can шины стала возникать ошибка Segmentation fault. Пока единственное рабочее решение ставить в качестве операционки Ubuntu Server 20.04. Чтобы подключиться к вайфаю меняете файл с расширением yaml в папке /etc/netplan/ У меня этот файл назывался 50-cloud-init.yaml. Вот как он примерно должен выглядеть:

```
network:
    version: 2
    wifis:
        renderer: networkd
        wlan0:
            dhcp4: true
            optional: true
            access-points:
                TurtleBro:
                    password: turtlew001
                TurtleBro5G:
                    password: turtlew001
```

Здесь название сети вай фай TurtleBro и TurtleBro5G, а пароль к ним turtlew001. Обратите внимание, что при редактировании файла **НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ ТАБУЛЯЦИЮ. Используйте только пробелы!**&#x20;

Подробнее о том, как настроить интернет можно почитать[ здесь](https://obu4alka.ru/settings-network-ubuntu-20-04.html). Там может возникнуть еще ряд проблем при обновлении и установки новых пакетов, но в целом они решаются гуглением.

Например может быть такая проблема:

```
Waiting for cache lock: Could not get lock /var/lib/dpkg/lock-frontend. It is held by process 1247 (unattended-upgr)
```

Ее решить мне помогла команда ниже, подробнее о решении почитать можно [тут](https://unix.stackexchange.com/questions/374748/ubuntu-update-error-waiting-for-unattended-upgr-to-exit)

```
sudo dpkg-reconfigure -plow unattended-upgrades
```

