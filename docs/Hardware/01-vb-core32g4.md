---
id: vbcore
slug: vbcore
title: "Микроконтроллерный модуль VBCore"
sidebar_label: "МК модуль VBСore32G4"
sidebar_position: 1
description: "Микроконтроллерный модуль VBCore VB32G4"
---

#
## Микроконтроллерный модуль VBCore VB32G4
Единый микроконтроллерный модуль для всех функциональных плат системы. Обеспечивает совместимость коммуникаций, питания и програмного обеспечения.

### Схема выводов
![VBCore VB32G4 Datadheet](https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3-pinout.png?raw=true)
PDF версия cхемы выводов для печати: [vbcore32g4-v1_3-pinout.pdf](https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3-pinout.pdf?raw=true)



<p>
  <img src="https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3-1.jpg?raw=true" alt="VBCore VB32G4" width="200"/>

  <img src="https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3-2.jpg?raw=true" alt="DC Driver view 2" width="200"/>
  
  <img src="https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3-3.jpg?raw=true" alt="DC Driver view 3" width="200"/>
    
  <img src="https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3-4.jpg?raw=true" alt="DC Driver view 4" width="200"/>
 
</p>





### Обзор
VBCore VB32G4 — это компактный встраиваемый модуль на базе высокопроизводительного микроконтроллера STM32G474RE, сочетающий богатую периферию, широкий диапазон входного напряжения питания (до 60 В) и встроенный FDCAN-трансивер. Благодаря минимальным габаритам (30,48 × 38,1 мм) и одностороннему монтажу плата идеально подходит для интеграции в различные устройства как основной микроконтроллерный модуль.

Для уменьшения размеров модуля VBCore на нем установлен компактный 6-контактный разъем  JST GH c шагом 1.25.  Он позволяет программировать микроконтроллер по протоколу SWD а так же поддерживает соединение по UART. В системе VBCores представлен [удобный программатор](/docs/Hardware/stm-programmer), но можно пользоваться любым стандартным. Кроме разъема, пины програмирования выведены тка же на контакты модуля.

VB32G4 обеспечивает гибкое, экономичное и надёжное решение как для прототипирования, так и для серийного производства. Независимо от стадии проекта — от первых экспериментов до массового выпуска — вы получаете готовую аппаратную платформу, готовую к работе «из коробки».

Модуль полностью совместим со всеми стандартными средствами разработки для семейства STM32G4:

- STM32CubeIDE, STM32CubeMX и другие официальные инструменты STMicroelectronics;
- Arduino IDE (через ядро STM32duino) — с доступом к тысячам готовых библиотек и примеров.

Это делает VB32G4 отличным выбором как для опытных embedded-инженеров, так и для разработчиков, только начинающих работать с микроконтроллерами STM32.
Для модуля доступен широкий выбор функциональных плат, свойтвенных робототехническим проектам.


:::info
В Arduino (stm32duino) каждый пин STM32 может иметь несколько альтернативных функций. В файле PeripheralPins.c перечислены все их варианты. По умолчанию ядро выбирает первый подходящий вариант (например, для PB7 это I2C1_SDA), но если вам нужно использовать другую функцию того же пина (например, I2C4_SDA), придётся указать альтернативное определение — PB_7_ALT1.

*Ссылка на файл*: https://github.com/stm32duino/Arduino_Core_STM32/blob/main/variants/STM32G4xx/G473R(B-C)T_G473RETx(Z)_G474R(B-C-E)T_G483RET_G484RET/PeripheralPins.c
:::




### Характеристики

- **Микроконтроллер STM32G474RE**  - Высокопроизводительный микроконтроллер STM32 со следующими характеристиками:
  - **Ядро:** Cortex-M4, 32-битный RISC  
  - **Тактовая частота:** 170 МГц, 213 DMIPS  
  - **Корпус:** LQFP64  
  - **Память:**  
    - Flash: 512 КБ  
    - SRAM: 96 КБ  
    - CCM SRAM: 32 КБ  

- **Интерфейсы связи микроконтроллера:**
  - 4 × SPI  
  - 3 × USART  
  - 2 × UART  
  - 2 × I²S  
  - 4 × I²C  
  - 3 × FDCAN  
  - 1 × USB 2.0 Full-Speed с поддержкой LPM и BCD  

- **Аналого-цифровые и цифро-аналоговые преобразователи:**
  - 5 × АЦП (12-битные)  
  - 1 × ЦАП (12-битный)  

- **Дополнительные компоненты платы**
  - **TPS54160:** DC-DC преобразователь 5 В  
  - **AP2112K-3.3:** стабилизатор напряжения 3.3 В  
  - **MCP2542FD:** трансивер FDCAN (выводы PB8–PB9)  

- **Интерфейсы и индикация**
  - **SWD + UART:** разъём JST-GH 1.25 мм (6 контактов)  
  - **Светодиоды пользователя:** PA5, PD2  
  - **Кнопка пользователя:** PC13  
  - **Светодиод индикации питания**  
  - **Кнопка сброса микроконтроллера**  

- **Ключевые особенности**
  - **Входное напряжение питания:** 6–60 В  
    - Защита от обратной полярности  
    - Защита TVS-диодами  
  - **Выходное напряжение:**  
    - 5 В / до 1.5 А  
    - 3.3 В / до 0.6 А  
  - **FDCAN:**  
    - Скорость передачи данных до 8 Мбит/с  
    - Защита TVS-диодами  
  - **Внешние кварцевые резонаторы:**  
    - HSE: 8 МГц  
    - LSE: 32.768 кГц  
- **Габаритные размеры:**  30.48 мм × 38.1 мм, 50 контакторв 14х11


### Электрическая схема
![VBCore VB32G4 Schematic](https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3-schematic.png?raw=true)
PDF версия: [vbcore32g4-v1_3-schematic.pdf](https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3-schematic.pdf?raw=true)


### Интерфейс програмирования

JST GH 1.25, 6 контактов, SWD + VCP (virtual COM port)

| Контакт | Функция    | Вывод контроллера |
|-----|-------------|-----|
| 1   | GND         |     |
| 2   | 5V          |     |
| 3   | SWCLK       | PA14|
| 4   | SWDIO       | PA13|
| 5   | TX USART2   | PA2 |
| 6   | RX USART2   | PA3 |


## Документация на компоненты

- [Микроконтроллер STM32G474](/files/pdf/stm32g474cb.pdf)

### 3D модель

- STEP модель: [vbcore32g4-v1_3.stp](https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3.stp?raw=true)
- Текстура: [vbcore32g4-v1_3-texture-top.png](https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3-texture-top.png?raw=true)
  
<p>
  <a href="https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3-render-1.png?raw=true" target="_blank">
    <img src="https://github.com/VBCores/VBCores_files/blob/main/01-VB-Core32G4/vbcore32g4-v1_3-render-1.png?raw=true" alt="VBCore VB32G4" width="200"/>
  </a>
</p>

:::note
Последние версии всех 3D моделей, фото и схем продукции VBCores можно найти у нас на github: [GitHub](https://github.com/VBCores/VBCores_files).
:::














