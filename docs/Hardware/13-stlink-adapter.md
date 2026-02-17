---
id: stlink-adapter
slug: stlink-adapter
title: "VB ST-Link адаптер"
sidebar_label: "Адаптер приграматора ST-Link" 
sidebar_position: 13
description:  Переходник на для стандартных USB программаторов ST-Link 2.1 на разъем совместимый с VBCore32G4.
---


# 

## Адаптер приграматора ST-Link

ДЛя того чтобы програмировать модуль VBCore32G4 рекомендуем использовать VB ST-Linkk программатор, поскольку он так же содержит VCP, однако, в случае если неоходимо использовать классический недорогой програматор с популярных маркетплейсов, мы разработали специальный переходник, который поставляется вместе с проводом програмирования. 

![Pinout programmer adapter](https://raw.githubusercontent.com/VBCores/VBCores_files/main/13-VB-STLink-Adapter/vb-stlink-adapter.png)
**[Скачать версию дл япечати PDF (ST-Link converter)](https://raw.githubusercontent.com/VBCores/VBCores_files/main/13-VB-STLink-Adapter/vb-stlink-adapter.pdf)**

<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/13-VB-STLink-Adapter/vb-stlink-adapter-1.jpg" alt="ST-Link Adapter view 1" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/13-VB-STLink-Adapter/vb-stlink-adapter-2.jpg" alt="ST-Link Adapter view 2" width="200"/>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/13-VB-STLink-Adapter/vb-stlink-adapter-3.jpg" alt="ST-Link Adapter view 3" width="200"/>
</p>



:::caution Внимание!
На маркетплейсах доступно два вида программаторов с разными выводами контактов:
* **Новая версия**: GND контакты 5 и 6
* **Старая**: GND контакты 3 and 6
Из за этого переходники так же есть двух версий. Уточняйте какая нужна вам.
:::


### Спецификации

* Компактный дизайн
* JST GH1.25 прямой (1 к 1) кабель
* ST-Link V2.1 совместимость
* Размеры:20x18мм
* Разъем: JST GH 1.25мм
* Длина кабеля: 200мм

### Конфигурация выводов ST-Link V2.1

**Новая версия**
| Pin | Function |
|-----|----------|
| 1   | 3.3V     |
| 2   | SWCLK    |
| 3   | SWDIO    |
| 4   | NRST     |
| 5   | GND      |
| 6   | GND      |

**Старая версия**
| Pin | Function |
|-----|----------|
| 1   | 3.3V     |
| 2   | SWCLK    |
| 3   | GND      |
| 4   | SWDIO    |
| 5   | NRST     |
| 6   | GND      |


#### Совместимость

- ST-Link V2.1 и похожие програматоры (проверяйте распиновку)
- Все модули системы VBCores  с разъемом GH1.25 
- STM32CubeIDE, Arduino IDE, PlatformIO

:::note
Последние версии всех 3D моделей, фото и схем продукции VBCores можно найти у нас на [GitHub](https://github.com/VBCores/VBCores_files).
:::