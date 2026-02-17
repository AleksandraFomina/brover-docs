---
id: yakut
title: Yakut - аналог can-utils для Cyphal
sidebar_label: Yakut - аналог can-utils для Cyphal
sidebar_position: 2
description: Yakut. Аналог can-utils для Cyphal
---

**Инструмент Yakut и зачем он нужен**

Когда устройства общаются по CAN, для проверки и отладки часто используют CAN utils — утилиты, которые позволяют посмотреть, какие сообщения передаются по шине, и убедиться, что всё работает правильно.

**Для Cyphal существует похожий инструмент — Yakut.**

Yakut нужен для того, чтобы:
    - проверять, видят ли устройства друг друга в сети Cyphal;
    - смотреть, какие сообщения передаются;
    - вручную отправлять команды и данные;
    - отлаживать систему, не изменяя прошивку микроконтроллера.

**Что такое Yakut**

Yakut — это простой кроссплатформенный инструмент с интерфейсом командной строки (CLI), предназначенный для **диагностики и отладки сетей Cyphal**. Он работает поверх библиотеки PyCyphal, поэтому:
    - поддерживает все основные транспорты Cyphal (CAN, UDP, Serial и другие);
    - понимает структуру сообщений Cyphal, а не просто набор байтов;
    - позволяет работать с нодами, топиками и сервисами на более высоком уровне.

Проще говоря, **Yakut — это «окно» в сеть Cyphal**, через которое можно увидеть, что в ней происходит.

Yakut можно использовать на:
    - Linux,
    - Windows,
    - macOS.

Это особенно удобно, если в системе есть компьютер (например, Raspberry Pi или ноутбук), который используется для настройки и отладки всей сети. 

С **Yakut** можно:
    - быстро проверить, что нода запустилась и работает;
    - убедиться, что сообщения имеют правильный формат;
    - найти ошибки в логике обмена данными.

## Установка

:::important
Полные инструкции по установке и использованию yakut, а также необходимые ссылки на информацию по работе с cyphal:
- сайт Индекс пакетов Python (PyPI) https://pypi.org/project/yakut/
- страница github проекта https://github.com/OpenCyphal/yakut
- определения регулируемых типов данных Cyphal https://github.com/OpenCyphal/public_regulated_data_types
- Python-реализация полного стека протокола Cyphal: https://pycyphal.readthedocs.io/en/stable/index.html 
:::

## Шаг 1
Для начала вам стоит отдельно поставить **can-utils** и проверить, что интерфейс can запускается и на этом этапе проблем нет. [Инструкцию к установке ищите здесь](https://docs.vbcores.ru/docs/SoftwareSetup/rpi-setting)

## Шаг 2
Установим доролнительные необходимые пакеты 
```
sudo apt update
sudo apt install aptitude
sudo aptitude install -y \
          python3-jsonnet \
          python3-pip \ 
          python3-psutil \
          libsdl2-dev \
          libasound2-dev \
          libjack-dev \
          jq \
          unzip

```

## Шаг 3
Ставим yakut, pycyphal и обязательно **numpy версии ниже 2**:

```
pip3 install yakut --break-system-packages
pip3 install pycyphal[dsdl] --break-system-packages
pip install "numpy<2.0" --break-system-packages
```
Проверка, команда: 
```
python3 -c "import numpy; print(numpy.__version__)"
```
Должна вдать версию 1.26.x

## Шаг 4
В Cyphal данные передаются не просто как набор байтов, а в виде **структурированных сообщений:** со скоростями, командами, статусами, ошибками и т.д. Описание таких сообщений хранится в специальных файлах формата DSDL. DSDL — это своего рода «чертёж» сообщения:

    - какие поля в нём есть; 
    - какого они типа (число, массив, логическое значение);
    - как сообщение выглядит «по договору» между всеми устройствами.

Все устройства в сети Cyphal должны одинаково понимать формат сообщений.
Именно для этого и используются общие DSDL-описания. Итак, на 4 шаге, скачаем  архивы описаний стандартных сообщений в папку .pycyphal и разархивируем их:
```
cd ~
mkdir .pycyphal
cd .pycyphal
wget https://github.com/OpenCyphal/public_regulated_data_types/archive/refs/heads/master.zip -O dsdl_standart.zip 
unzip dsdl_standart.zip -d ~/.pycyphal
```
Помимо стандартных, добавим сюда же пользовательские типы сообщений, которые были сделаны для работы с [Платой управления питанием](https://docs.vbcores.ru/docs/Hardware/powerboard/)  и разработанным нами [приводом VB Drive](https://docs.vbcores.ru/docs/Examples/examples-vb-drive/):

```
wget https://github.com/voltbro/cyphal-types/archive/refs/heads/master.zip -O dsdl_voltbro.zip
unzip dsdl_voltbro.zip -d ~/.pycyphal
cd cyphal-types-master
rm -rf public_regulated_data_types/
```

## Шаг 5

Компьютер и микроконтроллер не умеют напрямую работать с DSDL-файлами.
Поэтому их нужно скомпилировать — то есть автоматически превратить в код на нужном языке программирования.
В нашем случае: **DSDL → Python-код**, этим занимается инструмент **Nunavut**. 
Мы будем использовать три набора типов:
    - public_regulated_data_types - стандартные типы Cyphal (например, базовые сообщения и сервисы)
    - reg - типы для параметров и конфигурации устройств
    - voltbro - пользовательские типы.

Все они должны быть доступны Yakut и PyCyphal в одном месте, мы их скомпилируем в папку .pycyphal. Поэтому перейдите в .pycyphal. Затем:

1. **Компиляция базовых типов uavcan**:
```
python3 -m nunavut \
    --target-language py \
    --outdir . \
    public_regulated_data_types-master/uavcan

```
Здесь компилируются основные типы, на которых основан весь Cyphal.

2. **Компиляция типов reg**

```
python3 -m nunavut \
    --target-language py \
    --outdir . \
    --lookup-dir public_regulated_data_types-master/uavcan \
    public_regulated_data_types-master/reg
```
Типы reg используют базовые типы uavcan, поэтому мы указываем их как lookup-dir.

3. **Компиляция пользовательских типов проекта**

```
python3 -m nunavut \
    --target-language py \
    --outdir . \
    --lookup-dir public_regulated_data_types-master/uavcan \
    --lookup-dir public_regulated_data_types-master/reg \
    cyphal-types-master/voltbro/

```
Здесь компилируются пользовательские сообщения проекта, которые могут использовать и стандартные типы, и reg.

## Настройка переменных окружения для Yakut и Cyphal

После того, как мы скомпилировали пространства имен, создадим файл .yakut_params, в котором будут храниться все основные настройки yakut и cyphal.

```
cd ~
sudo nano .yakut_params
```
Вставьте в файл следующее содержимое:

```
export YAKUT_FORMAT=json
export UAVCAN__CAN__IFACE=socketcan:can0
export UAVCAN__NODE__ID=101
export UAVCAN__CAN__MTU=64
export UAVCAN__CAN__BITRATE="1000000 8000000"
```
Что здесь происходит:
    - YAKUT_FORMAT=json — формат вывода сообщений yakut (удобен для чтения и парсинга)
    - UAVCAN__CAN__IFACE=socketcan:can0 — используем CAN-интерфейс can0 через SocketCAN
    - UAVCAN__NODE__ID=101 — Node ID вашего узла в сети Cyphal
    - UAVCAN__CAN__MTU=64 — MTU для CAN FD
    - UAVCAN__CAN__BITRATE="1000000 8000000"
        - 1 Мбит/с — nominal bitrate
        - 8 Мбит/с — data bitrate (CAN FD)

Сохраните файл и выйдите из редактора (Ctrl+S, Ctrl+X).
Теперь сделаем так, чтобы эти настройки автоматически применялись при каждом запуске терминала.

Откройте .bashrc:

```
sudo nano .bashrc
```
В конце файла добавьте:
```
export PATH=$PATH:/home/pi/.local/bin
source /home/pi/.yakut_params
export CYPHAL_PATH="$HOME/.pycyphal:$CYPHAL_PATH"
```
Пояснения:
    - добавляем путь, куда обычно ставится yakut (~/.local/bin)
    - подключаем файл .yakut_params
    - указываем CYPHAL_PATH, где лежат скомпилированные DSDL-типы

Сохраните файл и закройте редактор. Чтобы изменения вступили в силу, можно либо открыть новое окно терминала, либо выполнить в текущем:
```
source .bashrc
```
## Проверка работы
Теперь проверим работу yakut. Запускаем монитор сети Cyphal:

```
yakut mon
```
Если всё настроено правильно, вы увидите список узлов в сети и их сообщения — примерно такую же картинку, как на примере ниже:

![Скриншот](/img/Yakut/y_mon.png)
