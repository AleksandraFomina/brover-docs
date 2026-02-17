---
id: canfd-ethernet
title: "CAN-FD - Ethernet конвертер" 
sidebar_label: "CAN-FD Ethernet конвертер"
sidebar_position: 7
description: "CAN-FD Ethernet конвретер обеспечивает пробрасывание сообщений кан шины в Ethernet"
---

#

## Ethernet - CAN-FD конвертер

Преобразователь CAN-Ethernet является оптимальным решением для подключения CAN-устройств робототехнической системы к компьютеру. Во-первых, даже в промышленных компьютерах редко встречаются интегрированные CAN-интерфейсы. Во-вторых, данное решение гарантирует взаимодействие между верхним (вычислительным) и нижним (исполнительным) уровнями с минимальной задержкой.

Устройсто на основе микроконтроллера STM32H723VE позволяющее соединить до 6 каналов  **CAN-FD** c компьютером через сеть Ethernet.

### Схема конвертера

![Ethernet CAN FD Pinout](https://github.com/VBCores/VBCores_files/raw/main/07-VB-Ethernet-CANFD/vb-eth-canfd-v0_91-pinout.png)
**[Скачать печатную версию PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/07-VB-Ethernet-CANFD/vb-eth-canfd-v0_91-pinout.pdf)**

<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/07-VB-Ethernet-CANFD/vb-eth-canfd-v0_91-1.jpg" alt="Ethernet-CAN Converter view 1" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/07-VB-Ethernet-CANFD/vb-eth-canfd-v0_91-2.jpg" alt="Ethernet-CAN Converter view 2" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/07-VB-Ethernet-CANFD/vb-eth-canfd-v0_91-3.jpg" alt="Ethernet-CAN Converter view 3" width="200"/>
</p>

### Програмное обеспечение
 [https://github.com/VBCores/ethernet-can](https://github.com/VBCores/ethernet-can) - ПО и руководство по настройке.


### Технические характеристики

- **Ethernet**  до 100 Мбит
- **6x FDCAN шин** (до 8 Мбит каждая)
- **Задержка передачи данных** < 1мс
- Простой клиент для ПК (Linux)
- Конфигурации шин CAN-FВ через клиент
- **Поддержка Wake-on-LAN** (Устройство может включить компьютер)
- Гальванически развязанное питание (USB-C, 5В)
- microSD для хранения IP/MAC аресов компьютера
- Отдельный DC/DC преобразователь для МК STM32H723
- Встроенные 120Ω терминаторы (необходимо запаять перемычку)

- **Размеры**
  - Плата: 71×56 mm
  - Крепежные отверстия 65×50 mm D2.5

- **Архитектура**
  - **Основной контроллер:** STM32H723VE — Ethernet + 3 FDCAN шины
  - **Дополнительный контроллер:** STM32G474CBT6 — дополнительно 3 FDCAN шиныs (через SPI)
  - **Связь с ПК:** UDP
  - **Внутренние коммуникации:** два независимых DMA-SPI канала


### 3D модель

- STEP модель: [vb-eth-canfd-v0_91.stp](https://github.com/VBCores/VBCores_files/blob/main/07-VB-Ethernet-CANFD/vb-eth-canfd-v0_91.stp)
- Текстура верха: [vb-eth-canfd-v0_91-texture-top.png](https://github.com/VBCores/VBCores_files/blob/main/07-VB-Ethernet-CANFD/vb-eth-canfd-v0_91-texture-top.png)
- Текстура низа: [vb-eth-canfd-v0_91-texture-top.png](https://github.com/VBCores/VBCores_files/blob/main/07-VB-Ethernet-CANFD/vb-eth-canfd-v0_91-texture-bottom.png)
  
<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/07-VB-Ethernet-CANFD/vb-eth-canfd-v0_91-render-1.png" alt="VBCore VB32G4" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/07-VB-Ethernet-CANFD/vb-eth-canfd-v0_91-render-2.png" alt="VBCore VB32G4" width="200"/>
</p>

:::note
Последние версии всех 3D моделей, фото и схем продукции VBCores можно найти у нас на github: [GitHub](https://github.com/VBCores/VBCores_files).
:::