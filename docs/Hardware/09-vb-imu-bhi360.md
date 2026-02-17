---
id: imu-bhi360
slug: bhi360
title: "IMU датчик на основе BHI360"
sidebar_label: "Инерциальный датчик  BHI360"
sidebar_position: 9
description: "Инерциальный датчик для роботов на основе BHI360"
---

# 

## Инерциальный датчик для роботов на основе BHI360

VBCores BHI360 — это продвинутый 9-осевой IMU-модуль с абсолютной ориентацией, построенный на базе датчика **Bosch BHI360**, который объединяет гироскоп, акселерометр и **магнитометр BMM350**. Модуль поставляется в компактном корпусе для пайки (20 × 10.5 мм). Магнитометр BMM350 сконфигурирован как подчинённое устройство для BHI360.

Поддерживаемые интерфейсы: **I²C** или **SPI** с питанием 3.3 В.

Ключевая особенность данного IMU — встроенное программное обеспечение, обрабатывающее сырые данные сенсоров. Bosch предоставляет платформу Sensor Fusion Software (BSX), которая работает непосредственно на BHI360 и объединяет данные с разных датчиков, компенсируя шумы, смещения и дрейф, тем самым обеспечивая более надёжную ориентацию. Доступ к BSX предоставляется через BHy2 SensorAPI. Однако эта библиотека основана на COINES SDK от Bosch и не поддерживается напрямую на Arduino или STM32.

Для Arduino мы рекомендуем использовать [SensorLib](https://github.com/lewisxhe/SensorLib), а пример приложения для STM32 можно найти в нашем репозитории [GitHub repository](https://github.com/Dmivaka/STM32-HAL-BHI360).

Поскольку интерфейсы I2C и SPI редко используются на ПК с архитектурой x86, мы разработали USB-мост, который берёт на себя общение с датчиком. Он реализован как **USB HID Sensor** и работает в режиме plug-and-play на всех современных операционных системах.

### Схема выводов

![Pinout BHI360](https://github.com/VBCores/VBCores_files/raw/main/09-VB-IMU-BHI360/vb-imu-bhi360-pinout.png)
**[Скачать печатную версию PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/09-VB-IMU-BHI360/vb-imu-bhi360-pinout.png)**

<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/09-VB-IMU-BHI360/vb-imu-bhi360-1.jpg" alt="VB IMU BHI360 view 1" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/09-VB-IMU-BHI360/vb-imu-bhi360-2.jpg" alt="VB IMU BHI360 view 2" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/09-VB-IMU-BHI360/vb-imu-bhi360-3.jpg" alt="VB IMU BHI360 view 3" width="188"/>
</p>

:::warning Обратите внимание!
Плата датчика спроектирована для работы в связке с платой-переходником usb и  [микроконтролерным модулем VBCore32G4](/docs/Hardware/vbcore). Это **три различных устройства** и поставляются как правило отдельно. Перед использованием необходимо припаять датчик и микроконтроллерный модуль на плату. Как физически програмировать модуль смотрите на странице модуля.
:::


### Технические параметры сборки

- **Интерфейс:** USB 1.1, USB-C 
- **Сенсоры:**
  - 3-осевой акселерометр (16 bit)
  - 3-осевой гироскоп (16 bit)
  - 3-осевой магнитометр (16 bit)
  - Режим работы по умолчанию: "Game rotation vector"
- **Размеры**
  - Плата: 46×46мм
  - Монтажные отверстия: D2.5, 40×40 мм

:::tip Обратите внимание!
Перед работой плату датчика надо прошить и откалибровать как **[описано в инструкции](/docs/SoftwareSetup/bhi360-setup)**!
:::


### Электрическая схема платы

![Электрическая схема модуля BHI360 ](https://github.com/VBCores/VBCores_files/raw/main/09-VB-IMU-BHI360/vb-imu-bhi360-bridge_schematic.png)
**[Скачать печатную версию схемы платы PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/09-VB-IMU-BHI360/vb-imu-bhi360-bridge_schematic.png)**

### Электрическая схема датчика

![Электрическая схема датчика BHI360 ](https://github.com/VBCores/VBCores_files/raw/main/09-VB-IMU-BHI360/vb-imu-bhi360-sensor_schematic.png)
**[Скачать печатную версию схемы датчика PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/09-VB-IMU-BHI360/vb-imu-bhi360-sensor_schematic.png)**


### Технические характеристики датчика

- **Напряжение питания:** 3.3V
- **IИнтерфейсыes:**
  - I2C (до 3.4 MHz)
  - SPI (до 50 MHz)
- **Доступные режимы работы:**
  - 3-осевой акселерометр (16 bit)
  - 3-осевой гироскоп (16 bit)
  - 3-осевой магнитометр (16 bit)
  - Gravity vector
  - Rotation vector
  - Game rotation vector
  - Geo-magnetic rotation vector
  - Orientation quaternion
- Размеры: 20 × 10.5 mm

### 3D модель

- STEP модель: [vb-imu-bhi360-asm.stp](https://github.com/VBCores/VBCores_files/blob/main/09-VB-IMU-BHI360/vb-imu-bhi360-asm.stp)

<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/09-VB-IMU-BHI360/vb-imu-bhi360-render_1.png" alt="VBCore VB32G4" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/09-VB-IMU-BHI360/vb-imu-bhi360-render_2.png" alt="VBCore VB32G4" width="200"/>
</p>

:::note
Последние версии всех 3D моделей, фото и схем продукции VBCores можно найти у нас на github: [GitHub](https://github.com/VBCores/VBCores_files).
:::