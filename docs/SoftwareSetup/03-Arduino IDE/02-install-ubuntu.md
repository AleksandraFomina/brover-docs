---
id: install-software-on-ubuntu
title: Установка среды программирования на Ubuntu
sidebar_label: Установка среды программирования на Ubuntu
sidebar_position: 2
description: Устанавливаем ПО программатора, Arduino IDE, STM32duino на Ubuntu
---

# Настройка ПО для Ubuntu 24.04

В этом разделе мы покажем, как подготовить рабочее окружение для работы с модулями **VBCores** на Ubuntu 24.04. Мы рассмотрим установку основных инструментов:  редактора кода VSCode, среды Arduino IDE, программатора STM32CubeProgrammer и терминала для отладки CoolTerm.

---
## Полезные утилиты

### Установка утилит

Перед установкой рекомендуем обновить систему и все пакеты до актуальных версий:

```bash
sudo apt update -y && sudo apt upgrade -y
```

**1. Git**

Git — система контроля версий.
Используется для клонирования, обновления и публикации проектов

```bash
sudo apt install git -y
```

**2. net-tools**

net-tools включает набор сетевых утилит (таких как ifconfig, netstat, route), полезных для диагностики сети и работы с CAN-интерфейсами.

```bash
sudo apt install net-tools -y
```

**3. curl и wget**

curl и wget — инструменты для загрузки файлов и взаимодействия с веб-сервисами из терминала.
Они пригодятся при установке библиотек и SDK.

```bash
sudo apt install curl wget -y
```
---
## STM32 Cube Programmer

**STM32 Cube Programmer** — официальный инструмент для программирования микроконтроллеров STM32 через USB и SWD.

### Установка STM32 Cube Programmer

1. Скачайте **STM32CubeProgrammer** с нашего зеркала [STMicroelectronics](https://disk.yandex.ru/d/CbU9zVV2-ufEOQ).  
2. **Перейдите в папку загрузок**, распакуйте архив и запустите установку:

    ```bash
    cd Downloads/
    unzip en.stm32cubeprg-lin-v2-18-0.zip -d STM32CubeProgrammer
    cd STM32CubeProgrammer
    sudo ./SetupSTM32CubeProgrammer-2.18.0.linux
    ```
    После выполнения команд откроется окно установки:

    [Скриншот установки STM32 Cube Programmer](/img/ubuntu/STM32CubeProgrammer.png)

3. Следуйте шагам мастера установки, последовательно нажимая:

    *Next* -> *Next* -> **"I accept the terms...**" -> *Next* -> *Next* -> *OK* -> **"I have read..."** -> *Next* -> *Next* -> *Next* -> *Next* -> *Done*

4. После установки необходимо сделать путь к STM32CubeProgrammer глобальным, чтобы его могла использовать Arduino IDE и другие программы.
    Для начала найдите, где именно установился STM32CubeProgrammer:

    ```bash
    sudo find / -name STM32_Programmer.sh 2>/dev/null
    ```

    Пример результата (путь может отличаться):

    ```bash
    /usr/local/STMicroelectronics/STM32Cube/STM32CubeProgrammer/bin
    ```
5. Добавьте найденный путь в системную переменную окружения:

    ```bash
    sudo nano /etc/environment
    ```
    В конце строки добавьте:

    ```bash
    :/usr/local/STMicroelectronics/STM32Cube/STM32CubeProgrammer/bin
    ```

6. Установите правила доступа к USB-устройствам (udev):

    ```bash
    sudo cp /usr/local/STMicroelectronics/STM32Cube/STM32CubeProgrammer/Drivers/rules/* /etc/udev/rules.d/
    sudo udevadm control --reload-rules
    sudo udevadm trigger
    ```

7. Перезагрузите систему, чтобы изменения вступили в силу.
---

## Arduino IDE

**Arduino IDE** — среда разработки для микроконтроллеров, которая упрощает загрузку программ на модуль VBCore через Arduino-библиотеки. Новая версия **Arduino IDE (2.X)** не требует классической установки в Ubuntu — она работает как портативное приложение. Однако для стабильной и безопасной работы рекомендуется выполнить следующие шаги.

### Установка Arduino IDE

1. Скачиваем с [официального сайта](https://www.arduino.cc/en/software/#ide) последнюю версию Arduino IDE: 

![Выбор версии](/img/ubuntu/arduino-ide-1.png)

:::info[Обратите внимание]
При скачивании выберите **Linux ZIP file (64-bit x86-64)**
:::

2. Перейдите в папку со скачанным архивом (папка `Downloads`) и разархивируйте его *ПКМ -> Extract*:

![Распаковка архива](/img/ubuntu/arduino-ide-2.png)

3. Для первого запуска Arduino IDE просто откройте файл `arduino-ide`:

![Первый запуск](/img/ubuntu/arduino-ide-3.png)

Как уже отмечалось, полноценного процесса установки **Arduino IDE** нет.
Это удобно для быстрого тестирования, но не подходит для постоянного использования — ярлык не создаётся, а запуск из папки `Downloads` небезопасен.

Переместим приложение в более надёжное место.

4. Закройте Arduino IDE, если она запущена, и выполните в терминале:

```bash
sudo mv /home/$USER/Downloads/arduino-ide_2.3.6_Linux_64bit /home/$USER/Arduino
```

![Перенос папки](/img/ubuntu/arduino-ide-5.png)

Эта команда перемещает **Arduino IDE** из загрузок (`Downloads`) в домашнюю директорию в папку `Arduino`

5. Создадим ярлык для удобного запуска из меню приложений. 

    5.1. Перейдите в директорию с ярлыками:

    ```bash
    cd ~/.local/share/applications/
    ```
    5.2. Создайте новый файл:

    ```bash
    nano arduino.desktop
    ```
    5.3. Вставьте следующее содержимое:

    :::warning[Обратите внимание]
    В строчках **Exec** и **Icon** вам необходимо указывать имя своего пользователя вместо `ros2user`
    :::

    ```bash
    [Desktop Entry]
    Encoding=UTF-8
    Name=Arduino IDE
    Exec=/home/ros2user/Arduino/arduino-ide_2.3.6_Linux_64bit/arduino-ide --no-sandbox %f
    Icon=/home/ros2user/Arduino/arduino-ide_2.3.6_Linux_64bit/resources/app/resources/icons/512x512.png
    Type=Application
    ```
    ![Arduino.desktop](/img/ubuntu/arduino-ide-7.png)
    
    Сохраните изменения и закройте редактор.

    5.4. Обновите кэш ярлыков:

    ```bash
    update-desktop-database ~/.local/share/applications/
    ```
    ![Обновление кэша ярлыков](/img/ubuntu/arduino-ide-8.png)

    5.5. Добавьте значок Arduino IDE в панель быстрого доступа:

    ![Добавление в быстрый доступ](/img/ubuntu/arduino-ide-9.png)

6. Настройка доступа к последовательному порту.

    Чтобы Arduino IDE могла обмениваться данными с платой через последовательный интерфейс (Serial), нужно разрешить доступ к порту `ttyACM0` (или аналогичному: `ttyUSB0`, `ttyACM1` и т. д.). 

    :::info[Важно]
    Перед тем, как устанавливать разрешения необходимо подключить **модуль VBСore VB32G4** к компьютеру с помощью **программатора VB STM32**
    :::

    6.1. Проверьте наличие порта:

    ```bash
    ls -la /dev | grep ttyACM0
    ```

    6.2. Разрешите доступ:

    ```bash
    sudo usermod -a -G dialout $USER
    sudo chmod a+rw /dev/ttyACM0
    ```

    6.3. Убедитесь, что права применились:

    ```bash
    ls -la /dev | grep ttyACM0
    ```
![Read/Write](/img/ubuntu/arduino-ide-15.png)

### Установка необходимых библиотек

После установки Arduino IDE, чтобы работать с модулями, нужно установить несколько библиотек и настроить среду на работу с VBCores.

Ключом к взаимодействию Arduino IDE и микроконтроллеров семейства STM32 является библиотека [STM32duino](https://github.com/stm32duino). Чтобы добавить поддержку плат STM32:

1. Откройте среду разработки Arduino IDE и перейдите в меню *Файл (File)* -> *Персональные настройки (Preferences)*:

![Preferences](/img/ubuntu/arduino-ide-10.png)

2. В области текстового поля *Additional Boards Manager URLs* добавьте URL пакета поддержки аппаратных средств STM32DUINO. Если у вас есть другие URL-адреса пакетов поддержки плат, просто добавьте новый через запятую. Ссылка на аппаратные средства STM32DUINO, которую необходимо вставить:

    ```bash
    https://github.com/stm32duino/BoardManagerFiles/raw/main/package_stmicroelectronics_index.json
    ```
    после этого нажмите <span style={{ backgroundColor: '#018184', color: 'white', padding: '2px 20px', borderRadius: '12px', fontWeight: 'semi-bold' }}> OK </span>


![Boards Manager URLs](/img/ubuntu/arduino-ide-11.png)

3. В главном окне программы выберите меню *Инструменты (Tools)* -> *Плата (Board)* -> *Менеджер плат (Boards manager)*:

![Boards Manager](/img/ubuntu/arduino-ide-12.png)

4. В поиске введите `STM32`, выберите пакет `STM32 MCU based boards` и нажмите **Install (Установить)**: 

![STM32 MCU based boards](/img/ubuntu/arduino-ide-13.png)

После установки закройте окно менеджера плат. 

5. Для того, чтобы программы, написанные под Arduino IDE, корректно работали на плате VBCore VB32G4V48, была написана собственная библиотека [VBCoreG4_arduino_system](https://github.com/VBCores/VBCoreG4_arduino_system), в которой собраны функции настройки частот, инициализации CAN и конфигурации некоторых других параметров. Для установки библиотеки в Arduino IDE откройте терминал и создайте папку `libraries`, в которой будут хранится все необходимые библиотеки:

```bash
mkdir /Arduino/libraries/
```

6. Перейдите в папку `libraries` и "склонируйте" туда библиотеку *VBCoreG4_arduino_system*:

```bash
cd /Arduino/libraries/
git clone https://github.com/VBCores/VBCoreG4_arduino_system.git
```
![VBCoreG4_arduino_system](/img/ubuntu/arduino-ide-14.png)

---


