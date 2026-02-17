---
id: imu-bno055
slug: bno055
title: "IMU датчик на основе BNO055"
sidebar_label: "Инерциальный датчик BNO055"
sidebar_position: 10
description: "Инерциальный датчик для роботов на основе BNO055"
---

# 

## Инерциальный датчик для роботов на основе BNO055
Плата VB IMU BNO055 USB-UART Bridge — это удобный переходник для подключения популярного OEM датчика OEM BNO055 к роботу через USB.
Изделие состоит из двух частей: датчика BNO055 и USB-адаптера. 

Преобразователь построен на базе чипа CP2102, который обеспечивает интерфейс USB-UART и создаёт виртуальный COM-порт на компьютере-хосте. Необходимые драйверы доступны на сайте производителя.

Для корректной работы датчик BNO055 необходимо припаять к плате адаптера и настроить на обмен по UART с помощью конфигурационных перемычек: PS1 — разомкнута, PS2 — замкнута.


### Общая схема инердиального датчика
![BNO055 IMU USB bridge](https://github.com/VBCores/VBCores_files/raw/main/10-VB-IMU-BNO055/vb-imu-bno055-bridge-pinout.png)
**[Скачать версию для печати PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/10-VB-IMU-BNO055/vb-imu-bno055-bridge-pinout.png)**

<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/10-VB-IMU-BNO055/vb-imu-bno055-1.jpg" alt="VB IMU BNO055 view 1" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/10-VB-IMU-BNO055/vb-imu-bno055-2.jpg" alt="VB IMU BNO055 view 2" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/10-VB-IMU-BNO055/vb-imu-bno055-3.jpg" alt="VB IMU BNO055 view 3" width="188"/>
</p>


### Технические характеристики

- Интерфейс: USB 1.1, USB-C 
- USB-UART конвертер СP2102 ([Драйвера для ПК](https://www.silabs.com/software-and-tools/usb-to-uart-bridge-vcp-drivers))
- Размеры:
  - Плата: 46×46мм
  - Крепежные отверстия: D2.5, 40×40мм

### Электрическая схема конвертора
![BNO055 USB Bridge Schematic](https://github.com/VBCores/VBCores_files/raw/main/10-VB-IMU-BNO055/vb-imu-bno055-bridge-schematic.png)
**[Скачать версию для печати PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/10-VB-IMU-BNO055/vb-imu-bno055-bridge-schematic.png)**

### 3D модель

- STEP модель: [vb-imu-bno055-asm.stp](https://github.com/VBCores/VBCores_files/blob/main/09-VB-IMU-BHI360/vb-imu-bhi360-asm.stp)

<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/10-VB-IMU-BNO055/vb-imu-bno055-bridge-render-1.png" alt="VBCore VB32G4" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/10-VB-IMU-BNO055/vb-imu-bno055-bridge-render-2.png" alt="VBCore VB32G4" width="200"/>
</p>

:::note
Последние версии всех 3D моделей, фото и схем продукции VBCores можно найти у нас на github: [GitHub](https://github.com/VBCores/VBCores_files).
:::