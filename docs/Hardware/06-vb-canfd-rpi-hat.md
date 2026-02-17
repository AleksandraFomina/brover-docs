---
id: canfd-hat
title: CAN-FD Raspberry PI адаптер
sidebar_label: CAN-FD для Raspberry PI
sidebar_position: 6
description: 2-х канальный адаптер CAN FD, плата расширения для Raspberry Pi
---

# 
## 2-х канальный адаптер CAN FD  для Raspberry Pi


Данная плата - расширение  позволяет работать с шинами CAN и CAN FD на одноплатном  микокомпьютере Raspberry Pi. Плата оснащена преобразователем питания для работы микрокомпьютера от внешних источников с напряжением от 6 до 50 вольт. Также имеется функция измерения входного напряжения (например, для контроля уровня заряда аккумулятора).

:::warning Внимание!
На плате есть два разъема для подключения питания, штыревой разъем jack 5.5х2.1 и винтовая клемма. **Нельзя использовать из одновременно.**. Это приведет к выходу платы из строя. Так же избегайте одновременной запитки распбери через USB разъем и плату питания. Всегда используйте что-то одно.
:::

### Схема платы

![Pinout CAN FD RPI HAT](https://github.com/VBCores/VBCores_files/raw/main/06-VB-CANFD-Rpi-Hat/vb-canfd-rpi-hat-v1_0-pinout.png)
**[&#128190; Cкачать печатную версию PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/06-VB-CANFD-Rpi-Hat/vb-canfd-rpi-hat-v1_0-pinout.pdf)**



<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/06-VB-CANFD-Rpi-Hat/vb-canfd-rpi-hat-v1_0-1.jpg" alt="CAN-FD RPi HAT view 1" width="200"/>
  
  <img src="https://github.com/VBCores/VBCores_files/raw/main/06-VB-CANFD-Rpi-Hat/vb-canfd-rpi-hat-v1_0-2.jpg" alt="CAN-FD RPi HAT view 2" width="200"/>
  
  <img src="https://github.com/VBCores/VBCores_files/raw/main/06-VB-CANFD-Rpi-Hat/vb-canfd-rpi-hat-v1_0-3.jpg" alt="CAN-FD RPi HAT view 3" width="200"/>
</p>

### Начало работы
Перед программированием для CAN FD установите CAN-утилиты  ([инструкция в разделе "Настройка ПО"](/docs/SoftwareSetup/rpi-setting)). Они понадобятся для быстрого тестирования кода в терминале.

### Технические характеристики

- **Рабочее напряжение:** 6-50В вход,  5V@3A выход
- **FDCAN скоростьe**  до  Mbit/s 
- **Размеры платы:** 65×56×26 мм 
- **Крепежные отверстия:** 58×49мм D2.5
- CAN FD контроллер: 2x Microchip **MCP2518FD** ([Datasheet](/files/pdf//mcp2518fd.pdf))
- 5мм винтовые клеммы для соединения к шине CAN
- Встроенные 120Ω терминаторы шины выведены на переключатели
- 5мм винтовая клемма и штыревой разъемя Jack 5.2x2.1 (Не использовать одновременно!)
- Измерение входеяжего напряжения, конвертер **ADS1115** [(Datasheet)](/files/pdf//ads1115.pdf),  делитель 1/11, I2C
- Драйвера и примеры для Raspberry / Linux


### Электрическая схема

![CAN FD RPI HAT Schematic](https://github.com/VBCores/VBCores_files/raw/main/06-VB-CANFD-Rpi-Hat/vb-canfd-rpi-hat-v1_0-schematic.png)
**[Скачать печатную версию PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/06-VB-CANFD-Rpi-Hat/vb-canfd-rpi-hat-v1_0-schematic.pdf)**

### Документация на компоненты

- [CAN контроллер (MCP2518FD)](/files/pdf//mcp2518fd.pdf)
- [CAN трансивер (MCP25612FD)](/files/pdf//mcp25612fd.pdf) 
- [ADC конвертер (ADS1115)](/files/pdf//ads1115.pdf)


### 3D модель

- STEP модель: [vb-stepper-driver-v1_2.stp](https://github.com/VBCores/VBCores_files/blob/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2.stp)
- Текстура верха: [vb-stepper-driver-v1_2-texture-top.png](https://github.com/VBCores/VBCores_files/blob/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-texture-top.png)
- Текстура низа: [vb-stepper-driver-v1_2-texture-bottom.png](https://github.com/VBCores/VBCores_files/blob/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-texture-bottom.png)
  
<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-render-1.png" alt="VBCore VB32G4" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-render-2.png" alt="VBCore VB32G4" width="200"/>
</p>


:::note
Последние версии всех 3D моделей, фото и схем продукции VBCores можно найти у нас на github: [GitHub](https://github.com/VBCores/VBCores_files).
:::