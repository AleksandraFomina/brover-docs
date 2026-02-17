---
id: dc-driver
title: "DC драйвер 15A"
sidebar_label: "DC драйвер 15A"
sidebar_position: 4
description: "Плата драйвер для управления коллекторными двигателями"
---
#

## Драйвер для управления коллекторными двигателями с током до 15A (750Вт)

Плата предназначена для управления коллекторными двигателями постоянного тока. Напряжение до 50 вольт, ток до 15А. Драйвер **Allegro A4955**. Возможно подключение SPI и I2C датчиков абролютного положение вала, так же поддерживается работа с датчиками Холла. 
Возможна установка двухконтактного разъема для двигателя или шестиконтактного - для упрощенного подключения небольших двигателей с квадратурным энкодером. [Инструкция по подключению](/docs/Tutorials/dc-motor-to-driver-connect).


Работает под управлением [микроконтролерного модуля VBCore32G4](/docs/Hardware/vbcore).

_Поддерживает в том числе работу с Arduino._ 


### Схема выводов драйвера

![Pinout DC Driver](https://github.com/VBCores/VBCores_files/raw/main/04-VB-DC-Driver/vb-dc-driver-v1_3-pinout.png)

<center>
  **[Скачать печатную версию PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/04-VB-DC-Driver/vb-dc-driver-v1_3-pinout.pdf)**
</center>

<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/04-VB-DC-Driver/vb-dc-driver-v1_3-1.jpg" alt="DC Driver view 1" width="200"/>
  
  <img src="https://github.com/VBCores/VBCores_files/raw/main/04-VB-DC-Driver/vb-dc-driver-v1_3-2.jpg" alt="DC Driver view 2" width="200"/>
  
  <img src="https://github.com/VBCores/VBCores_files/raw/main/04-VB-DC-Driver/vb-dc-driver-v1_3-3.jpg" alt="DC Driver view 3" width="200"/>
  
  <img src="https://github.com/VBCores/VBCores_files/raw/main/04-VB-DC-Driver/vb-dc-driver-v1_3-4.jpg" alt="DC Driver view 4" width="200"/>

</p>

### Технические характеристики
- **Входное напряжение:** 9-50V
- **Пиковый ток:** 15A
- **Драйвер:** Allegro A4955 ([Datasheet](/files/pdf/A4955-Datasheet.pdf))
  - Диапазон температур хранения: –55 to 150 °C
  - Диапазн рабочих температур: –40 to 105 °C
  - Защита от обратной ЭДС
  - Контроль тока

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

:::warning Обратите внимание!
Плата драйвера двигателя спроектирована для работы в связке с [микроконтролерного модуля VBCore32G4](/docs/Hardware/vbcore). Это **два различных устройства** и поставляются как правило отдельно. Перед использованием драйвера необходимо припаять на него микроконтроллерный модуль, и запаять необходимые перемычки и разъемы в зависимости от того, как вы собираетесь ее использовать. Смотрите на общую схему выше. Как физически програмировать модуль смотрите на странице модуля.
:::

### Электрическая схема

![Электрическая схема драйвера коллекторных моторов](https://github.com/VBCores/VBCores_files/raw/main/04-VB-DC-Driver/vb-dc-driver-v1_3-schematic.png)

**[Скачать печатную схему PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/04-VB-DC-Driver/vb-dc-driver-v1_3-schematic.pdf)**

### Документация

- [Документация на драйвер Allegro A4955](/files/pdf/A4955-Datasheet.pdf)
- [Документация на EEPROM (AT24C256C)](/files/pdf/AT24C256C.pdf)


### 3D модель

- STEP модель: [vb-dc-driver-v1_3.stp](https://github.com/VBCores/VBCores_files/blob/main/04-VB-DC-Driver/vb-dc-driver-v1_3.stp)

- Текстура верха: [vb-dc-driver-v1_3-texture-top.png](https://github.com/VBCores/VBCores_files/blob/main/04-VB-DC-Driver/vb-dc-driver-v1_3-texture-top.png)

- Текстура низа: [vb-dc-driver-v1_3-texture-bottom.png](https://github.com/VBCores/VBCores_files/blob/main/04-VB-DC-Driver/vb-dc-driver-v1_3-texture-bottom.png)
  
<p>
  <img src="https://github.com/VBCores/VBCores_files/raw/main/04-VB-DC-Driver/vb-dc-driver-v1_3-render-1.png" alt="VBCore VB32G4" width="200"/>
  
  <img src="https://github.com/VBCores/VBCores_files/raw/main/04-VB-DC-Driver/vb-dc-driver-v1_3-render-1.png" alt="VBCore VB32G4" width="200"/>
</p>

:::note
Последние версии всех 3D моделей, фото и схем продукции VBCores можно найти у нас на github: [GitHub](https://github.com/VBCores/VBCores_files).
:::