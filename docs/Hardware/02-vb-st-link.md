---
id: stm-programmer
slug: stm-programmer
title: "VBCore STM32 программатор"
sidebar_label: "Программатор STM32"
sidebar_position: 2
description: "VB STM32 программатор"
---


# 

## Программатор STM32 с VCP

Для уменьшения размеров модуля [VBCore32G4](/docs/Hardware/vbcore) на нем установлен компактный 6-контактный разъем  JST GH c шагом 1.25.  Он позволяет программировать микроконтроллер по протоколу SWD а так же поддерживает соединение по UART.

Для удобства  мы разработали миниатюрный программатор, совместимый с ST-Link V2.1 и соответствующим разъемом.  Так же программатор позволяет работать с Serial соединением выведеным на разъем программирования (Virtual Com Port).

_Выводы программирования микроконтроллера выведены на контактную группу самого модуля паралельно разъему._

![ST-Link Pinout](https://github.com/VBCores/VBCores_files/raw/main/02-VB-ST-Link/vb-stlink-v2_1-r1_3-pinout.png)


[Скачать PDF для печати (ST-Link Pinout)](https://raw.githubusercontent.com/VBCores/VBCores_files/main/02-VB-ST-Link/vb-stlink-v2_1-r1_3-pinout.pdf)


<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/02-VB-ST-Link/vb-stlink-v2_1-r1_3-1.jpg" alt="St-Link" width="300"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/02-VB-ST-Link/vb-stlink-v2_1-r1_3-2.jpg" alt="Programmer view 2" width="300"/>
</p>



## Электрическая схема

[![ST-Link Schematic](https://github.com/VBCores/VBCores_files/raw/main/02-VB-ST-Link/vb-stlink-v2_1-r1_3-schematic.png)](https://github.com/VBCores/VBCores_files/raw/main/02-VB-ST-Link/vb-stlink-v2_1-r1_3-schematic.png)


[Скачать PDF (ST-Link Electrical Schematic)](https://raw.githubusercontent.com/VBCores/VBCores_files/main/02-VB-ST-Link/vb-stlink-v2_1-r1_3-schematic.pdf)


### 3D модель

- STEP модель: [vb-stlink-v2_1-r1_3.stp](https://github.com/VBCores/VBCores_files/blob/main/02-VB-ST-Link/vb-stlink-v2_1-r1_3.stp)
- Текстура верха: [vb-stlink-v2_1-r1_3-texture-top.png](https://github.com/VBCores/VBCores_files/blob/main/02-VB-ST-Link/vb-stlink-v2_1-r1_3-texture-top.png)
- Текстура низа: [vb-stlink-v2_1-r1_3-texture-bottom](https://github.com/VBCores/VBCores_files/blob/main/02-VB-ST-Link/vb-stlink-v2_1-r1_3-texture-bottom.png)
  
<p>
    <img src="https://github.com/VBCores/VBCores_files/blob/main/02-VB-ST-Link/vb-stlink-v2_1-r1_3-render-1.png?raw=true" alt="VBCore VB32G4" width="200"/>
</p>

:::note
Последние версии всех 3D моделей, фото и схем продукции VBCores можно найти у нас на github: [GitHub](https://github.com/VBCores/VBCores_files).
:::