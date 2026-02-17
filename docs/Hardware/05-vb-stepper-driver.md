---
id: stepper-driver
title: "Драйвер шагового двигателя 10A"
sidebar_label: "Драйвер шагового двигателя 10А"
sidebar_position: 5
description: "Функциональная плата для управления шаговыми двигателями"
---

#

## Драйвер шагового двигателя
Плата предназначена для управления шаговыми двигателями. Напряжение до 50 вольт, ток до 10А. Драйвер **TRINAMIC TMC5160**. Возможно подключение SPI и I2C датчиков абролютного положение вала, так же поддерживается работа с датчиками Холла. Драйвер TMC5160 поддерживает весьма много сложных режимоав управления, обратите внимание что плата предназначена для использования в робототехнических устройствах, а не в станках ЧПУ, хотя это и возможно.


Работает под управлением [микроконтролерного модуля VBCore32G4](/docs/Hardware/vbcore).

_Поддерживает в том числе работу с Arduino._ 


### Схема выводов драйвера
![Схема выводов драйвера шагового двигателя](https://github.com/VBCores/VBCores_files/raw/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-pinout.png)

**[Скачать версию для печати PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-pinout.pdf)**


<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-1.jpg" alt="Stepper Driver view 1" width="200"/>
  
  <img src="https://github.com/VBCores/VBCores_files/raw/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-2.jpg" alt="Stepper Driver view 2" width="200"/>
 
  <img src="https://github.com/VBCores/VBCores_files/raw/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-3.jpg" alt="Stepper Driver view 3" width="200"/>
  
  <img src="https://github.com/VBCores/VBCores_files/raw/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-4.jpg" alt="Stepper Driver view 4" width="200"/>
</p>





### Технические характеристики
- **Напряжение питания:** 9-50V
- **Фазный ток:** 10A
- **Драйвер:** TRINAMIC TMC5160 
  - Температура хранения: от –55 до 150 °C
  - Рабочая температура: от –40 до 125 °C
  - Режимы для бесшумной работы
  - Управление по SPI и шаговое
  - Контроль тока
  - Работа с энкодером
  
- **Интерфейсы:** 
  - Полнодуплексный мастер SPI или GPIO
  - Комбинированный 3-фазный датчик Холла / инкрементальный энкодер AB / ABZ 
  - I2C с опциональным питанием: 5В / 3.3В

* **256-Кбит I2C EEPROM** AT24C256C ([Datasheet](/files/pdf/AT24C256C.pdf))

* **Ввод-вывод:** 8-битный DIP-переключатель, 6 битов доступны на контактных площадках вместе с 5В и 3.3В

**FDCAN:**  
  * Скорость передачи данных до 8 Мбит/с  
  * Защита TVS-диодами  
 
**Габариты**
  * Плата: 51×56×20 мм
  * Отверстия для крепления: 45×50 мм
  * Масса: 20 г

### Электрическая схема 

![Электрическая схема драйвера шагового двигателя](https://github.com/VBCores/VBCores_files/raw/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-schematic.png)
**[Скачать печатную версию PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/05-VB-Stepper-Driver/vb-stepper-driver-v1_2-schematic.pdf)**

### Документация 

- [Документация на драйвер TMC5160](/files/pdf/TMC5160A_Datasheet_Rev1.14.pdf)
- [Документация на EEPROM (AT24C256C)](/files/pdf/AT24C256C.pdf)

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