---
id: install-software-on-windows
title: Установка среды программирования на Windows
sidebar_label: Установка среды программирования на Windows
sidebar_position: 1
description: Устанавливаем ПО программатора, Arduino IDE, STM32duino
---

# Установка среды программирования на Windows

Модули VBСores совместимы с Arduino IDE и большей частью ее библиотек для различных сенсоров. В этом разделе мы покажем, как подготовить рабочее окружение для работы с модулями **VBCores** на Windows 11. Мы рассмотрим установку основных инструментов: среды Arduino IDE и программы STM32CubeProgrammer.

## STM32 Cube Programmer

**STM32 Cube Programmer** — официальный инструмент для программирования микроконтроллеров STM32 через USB и SWD.

### Установка STM32 Cube Programmer

1. Скачайте **STM32CubeProgrammer** с нашего зеркала [STMicroelectronics](https://disk.yandex.ru/d/aTsB-wu9f8SAiQ).  
2. **Перейдите в папку загрузок**, распакуйте архив и запустите установку:

![Файл установщика](/img/windows/stmcubeprogrammer-1.png)

3. Следуйте шагам мастера установки, последовательно нажимая:

    *Next* -> *Next* -> **"I accept the terms...**" -> *Next* -> *Next* -> *OK* -> **"I have read..."** -> *Next* -> *Next* -> *Next* -> *Next* -> *Done*

![Запуск установки](/img/windows/stmcubeprogrammer-2.png)

---

## Arduino IDE

**Arduino IDE** — среда разработки для микроконтроллеров, которая упрощает загрузку программ на модуль VBCore через Arduino-библиотеки.

### Установка Arduino IDE

1. Скачайте с [официального сайта](https://www.arduino.cc/en/software/#ide) последнюю версию Arduino IDE: 

![Выбор версии](/img/windows/arduino-ide-1.png)

:::info[Обратите внимание]
При скачивании выберите **Windows Win 10 or newer (64-bit)**
:::

2. Запустите скачанный установочный файл и следуйте шагам мастера установки:

![Мастер установки](/img/windows/arduino-ide-2.png)

3. Дождитесь окончания установки и запустите **Arduino IDE**:

| ![Файл установщика](/img/windows/arduino-ide-3.png) | ![Запуск установки](/img/windows/arduino-ide-4.png) |
|:--------------------------------------------------------:|:--------------------------------------------------------:|

:::info[Обратите внимание]
После запуска **Arduino IDE** будет предложено установить драйвера устройств. Соглашайтесь на всё!
:::

### Установка необходимых библиотек

После установки Arduino IDE, чтобы работать с модулями, нужно установить несколько библиотек и настроить среду на работу с VBCores.

Ключом к взаимодействию Arduino IDE и микроконтроллеров семейства STM32 является библиотека [STM32duino](https://github.com/stm32duino). Чтобы добавить поддержку плат STM32:

1. Откройте среду разработки Arduino IDE и перейдите в меню *Файл (File)* -> *Персональные настройки (Preferences)*:

![Preferences](/img/windows/arduino-ide-5.png)

2. В области текстового поля *Additional Boards Manager URLs* добавьте URL пакета поддержки аппаратных средств STM32DUINO. Если у вас есть другие URL-адреса пакетов поддержки плат, просто добавьте новый через запятую. Ссылка на аппаратные средства STM32DUINO, которую необходимо вставить:

    ```bash
    https://github.com/stm32duino/BoardManagerFiles/raw/main/package_stmicroelectronics_index.json
    ```
    после этого нажмите <span style={{ backgroundColor: '#018184', color: 'white', padding: '2px 20px', borderRadius: '12px', fontWeight: 'semi-bold' }}> OK </span>


![Boards Manager URLs](/img/windows/arduino-ide-6.png)

3. В главном окне программы выберите меню *Инструменты (Tools)* -> *Плата (Board)* -> *Менеджер плат (Boards manager)*:

![Boards Manager](/img/windows/arduino-ide-7.png)

4. В поиске введите `STM32`, выберите пакет `STM32 MCU based boards` и нажмите **Install (Установить)**: 

![STM32 MCU based boards](/img/windows/arduino-ide-8.png)

После установки закройте окно менеджера плат. 

5. Для того, чтобы программы, написанные под Arduino IDE, корректно работали на плате VBCore VB32G4V48, была написана собственная библиотека [VBCoreG4_arduino_system](https://github.com/VBCores/VBCoreG4_arduino_system), в которой собраны функции настройки частот, инициализации CAN и конфигурации некоторых других параметров. Для установки библиотеки в Arduino IDE перейдите в папку `C:\Users\username\Документы\Arduino` и создайте папку `libraries`, в которой будут храниться все необходимые библиотеки:

![libraries](/img/windows/arduino-ide-9.png)

6. Откройте страницу библиотеки на GitHub и скачайте её на компьютер:

![GitHub](/img/windows/arduino-ide-10.png)

7. Перейдите в папку с загруженным архивом и распакуйте его в ранее созданную папку `libraries`:

![Unzip](/img/windows/arduino-ide-12.png)

8. Перейдите в папку `libraries` и удалите суффикс `-main` из названия разархивированной папки:

![VBCoreG4_arduino_system](/img/windows/arduino-ide-14.png)

---