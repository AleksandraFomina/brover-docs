---
id: bldc-driver
title: "BLDC драйвер 30A"
sidebar_label: "BLDC драйвер 30A"
sidebar_position: 3
description: "Плата драйвер для упроавления бесколлекторными двигателями"
---

#

## Драйвер для управления бесколлекторными двигателей (BLDC) с током до 30A (1.5кВт)

Плата рассчитана на векторное управление бесколлекторным двигателем. Напряжение до 60 вольт, ток до 30А. Драйвер TI DRV8328B.
Возможно подключение SPI и I2C датчиков абролютного положение вала, так же поддерживается работа с датчиками Холла.

Работает под управлением [микроконтролерного модуля VBCore32G4](/docs/Hardware/vbcore).

_Поддерживает в том числе библиотеку SimpleFOC для Arduino._

### Схема выводов драйвера
![VB BLDC драйвер](https://github.com/VBCores/VBCores_files/blob/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4-pinout.png?raw=true)

<center>
  **[PDF версия cхемы выводов для печати](https://raw.githubusercontent.com/VBCores/VBCores_files/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4-pinout.pdf)**
</center>




<p>
  <img src="https://github.com/VBCores/VBCores_files/blob/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4-1.jpg?raw=true" alt="BLDC Driver view 1" width="200"/>
   
  <img src="https://github.com/VBCores/VBCores_files/blob/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4-3.jpg?raw=true" alt="BLDC Driver view 2" width="200"/>
   
  <img src="https://github.com/VBCores/VBCores_files/blob/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4-4.jpg?raw=true" alt="BLDC Driver view 3" width="200"/>
</p>



### Технические характеристики

* **Входное напряжение:** 9–60В
* **Пиковый ток:** 30А

* **Драйвер:** TI DRV8328B ([Datasheet](/files/pdf/drv8328.pdf))
  * Диапазон температур хранения: -65 – 150 °C
  * Диапазон рабочих температур: -40 – 125 °C

* **Датчик тока** ACS711KEXLT-31AB-T ([Datasheet](/files/pdf/ACS711-Datasheet.pdf))
  * Диапазон: ±31A
  * Чувствительность: 45 мВ/А

* **Интерфейсы:**
  * Полнодуплексный мастер SPI или GPIO
  * Комбинированный 3-фазный датчик Холла / инкрементальный энкодер ABZ / второй полнодуплексный мастер SPI
  * I2C с опциональным питанием: 5В / 3.3В

* **256-Кбит I2C EEPROM** AT24C256C ([Datasheet](/files/pdf/AT24C256C.pdf))

* **Ввод-вывод:** 8-битный DIP-переключатель, 6 битов доступны на контактных площадках вместе с 5В и 3.3В

**FDCAN:**  
  * Скорость передачи данных до 8 Мбит/с  
  * Защита TVS-диодами  
 
**Габариты**
  * Плата: 51×56×20 мм
  * Отверстия для крепления: 45×50 мм
  * Масса: 19 г


:::warning Обратите внимание!
Плата драйвера двигателя спроектирована для работы в связке с [микроконтролерного модуля VBCore32G4](/docs/Hardware/vbcore). Это **два различных устройства** и поставляются как правило отдельно. Перед использованием драйвера необходимо припаять на него микроконтроллерный модуль, и запаять необходимые перемычки в зависимости от того, как вы собираетесь ее использовать. Смотрите на общую схему выше. Как физически програмировать модуль смотрите на его странице.
:::

### Электрическая схема

![Электрическая схема драйвера бесколлекторного двигателя](https://github.com/VBCores/VBCores_files/blob/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4-schematic.png?raw=true)

[Печатная версия схемы PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4-schematic.pdf)

---

### Документация на компоненты

- [Драйвер DRV8328B](/files/pdf/drv8328.pdf)
- [Датчик тока (ACS711)](/files/pdf/ACS711-Datasheet.pdf)
- [EEPROM память (AT24C256C)](/files/pdf/AT24C256C.pdf)

### 3D модель

- STEP модель: [vb-bldc-driver-v1_4.stp](https://github.com/VBCores/VBCores_files/blob/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4.stp)
- Текстура верха: [vb-bldc-driver-v1_4-texture-top.png](https://github.com/VBCores/VBCores_files/blob/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4-texture-top.png)
- Текстура низа: [vb-bldc-driver-v1_4-texture-bottom](https://github.com/VBCores/VBCores_files/blob/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4-texture-bottom.png)
  


<p>
<img src="https://github.com/VBCores/VBCores_files/raw/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4-render-1.png" alt="VBCore VB32G4" width="200"/>
  
<img src="https://github.com/VBCores/VBCores_files/raw/main/03-VB-BLDC-Driver/vb-bldc-driver-v1_4-render-2.png" alt="VBCore VB32G4" width="200"/>
</p>




:::note
Последние версии всех 3D моделей, фото и схем продукции VBCores можно найти у нас на github: [GitHub](https://github.com/VBCores/VBCores_files).
:::