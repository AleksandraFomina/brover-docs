---
id: sbus-hid
slug: sbus-hid
title: Адаптер для джойстика SBus - USB 
sidebar_label: Адаптер для джойстика SBus
idebar_position: 11
description: "Конвертер для подключения радиомодельных джойстиков работающих по протоколу SBus к USB"
---

# 
## Адаптер для радиомодельных джойстиков (SBus > USB) 


Часто для работы с роботами удобно применять джойстики которые разработаны для радиоуправляемых моделей. На рынке представлено множество формфакторов и они как правило обладают хорошими характеристиками и работают на длинные дистации. 

Современные приемники для таких джойстиков работают по протоколу SBus. Специально для того чтобы подключиить такой приемник к компьюьеру робота разработан переходник SBus-USB HID.


### Схема подключения

![Pinout SBus to USB HID](https://github.com/VBCores/VBCores_files/raw/main/11-VB-SBus-HID/vb-sbus-hid-v1_1-pinout.png)
**[Скачать версию дл печати PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/11-VB-SBus-HID/vb-sbus-hid-v1_1-pinout.pdf)**

<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/11-VB-SBus-HID/vb-sbus-hid-v1_1-1.jpg" alt="SBus–HID" width="300"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/11-VB-SBus-HID/vb-sbus-hid-v1_1-2.jpg" alt="SBus–HID" width="300"/>
</p>

:::caution Внимание!
Перед началом работы на конвертер надо загрузить прошивку: https://github.com/VBCores/8-Axis-Universal-RC-Joystick. В релизах есть скомпилированный .hex - файл который надо загрузить с помощью STM32 Cube Programmer. Для перехода в рабочий режим также необходимо запаять премычку (см схему выше). Текущая прошивка поддерживает 8 каналов.

Все эти действия как правило делаются в магазине. 
:::


:::note
Для использования джойстика с  ROS2, установите пакет https://index.ros.org/p/joy/ и следуйте инструкциям https://wiki.ros.org/joy/Tutorials
:::

### Техническая информация

- Микроконтроллер: STM32F103C8T6
- Питание: USB, 5В
- Интерфейсы:
  - USB 1.1, USB‑C
  - SBus линия, 8 каналов 
- Размеры:
  - Плата: 20×42.5мм
  - Монтажные полуотверстия: D2.5, 20×30мм

### Интерфейс програмирования (SWD)

JST GH1.25, 6‑pin

| Pin | Function    |
| --- | ----------- |
| 1   | GND         |
| 2   | 5V          |
| 3   | SWCLK       |
| 4   | SWDIO       |
| 5   | TX USART1   |
| 6   | RX USART1   |

### Электрическая схема конвертера

[![SBus–HID Schematic](https://github.com/VBCores/VBCores_files/raw/main/11-VB-SBus-HID/vb-sbus-hid-v1_1-schematic.png)](https://github.com/VBCores/VBCores_files/raw/main/11-VB-SBus-HID/vb-sbus-hid-v1_1-schematic.png)
**[Скачать версию для печати PDF)](https://raw.githubusercontent.com/VBCores/VBCores_files/main/11-VB-SBus-HID/vb-sbus-hid-v1_1-schematic.pdf)**


### 3D модель

- STEP модель: [vb-sbus-hid-v1_1.stp](https://github.com/VBCores/VBCores_files/blob/main/11-VB-SBus-HID/vb-sbus-hid_v1_1.stp)

<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/11-VB-SBus-HID/vb-sbus-hid-v1_1-render-1.png" alt="VBCore VB32G4" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/11-VB-SBus-HID/vb-sbus-hid-v1_1-render-2.png" alt="VBCore VB32G4" width="200"/>
</p>

:::note
Последние версии всех 3D моделей, фото и схем продукции VBCores можно найти у нас на [GitHub](https://github.com/VBCores/VBCores_files).
:::