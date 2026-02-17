---
id: hal-examples
title: Примеры на HAL
sidebar_label: Примеры на HAL
sidebar_position: 2
description: Примеры на HAL
---


# Примеры на HAL

В этом разделе представлены примеры **прошивок на уровне HAL** для управления различными типами моторов с использованием **Cyphal**.

Все примеры реализованы на базе библиотек [libvoltbro](https://github.com/VBCores/libvoltbro) и [libcxxcanard](https://github.com/VBCores/libcxxcanard) и предназначены для использования на платформах VBCore.

---

## Репозитории примеров

| Репозиторий                                                                             | Описание                                                                                                                                 |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [BLDC_6Step](https://github.com/VBCores/Example_BLDC_6Step)                             | Прошивка для управления **BLDC-мотором в режиме 6-Step** с Cyphal по FDCAN, основанная на библиотеках **libvoltbro** и **libcxxcanard**. |
| [BLDC_FOC](https://github.com/VBCores/Example_BLDC_FOC)                                 | Прошивка для **FOC-управления BLDC-мотором** с Cyphal по FDCAN, основанная на **libvoltbro** и **libcxxcanard**.                         |
| [BLDC_FOC_Autocalibration](https://github.com/VBCores/Example_BLDC_FOC-Autocalibration) | Прошивка для **FOC-управления BLDC-мотором** с Cyphal по FDCAN и встроенной **функцией автокалибровки**.                                 |
| [Simplest_Stepper](https://github.com/VBCores/Example_SimplestStepper)                  | Прошивка для **step/dir шагового двигателя** с Cyphal по FDCAN и функцией автокалибровки.                                                |
| [SPI_Stepper](https://github.com/VBCores/Example_SPIStepper)                            | Прошивка для **шагового двигателя с управлением по SPI** и Cyphal по FDCAN, с поддержкой автокалибровки.                                 |
| [DC_Example](https://github.com/VBCores/Example_DC)                                     | Прошивка для управления **DC-мотором** с использованием Cyphal по FDCAN.                                                                 |
