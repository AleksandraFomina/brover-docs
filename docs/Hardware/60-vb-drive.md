---
id: vb-drive
title: Электропривод VB Drive M4310Rxx
sidebar_label: Электропривод VB Drive M4310Rxx
sidebar_position: 60
description: Компактный привод, разработанный для высокодинамичных движений, идеально подходящий для робототехнических проектов
---

#

## Электропривод VB Drive M4310Rx

Компактный привод, разработанный для высокодинамичных движений, идеально подходящий для робототехнических проектов. Поставляется в двух вариантах: с передаточным отношением 10:1 и 36:1. Поддерживает коммуникацию по шине CAN и совместим с Cyphal. 

<p>
  <img src="https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r10_1.jpg" alt="vb-drive-4310Rx" height="200"/>

  <img src="https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r10_2.jpg" alt="vb-drive-4310Rx" height="200"/>

  <img src="https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r10_3.jpg" alt="vb-drive-4310Rx" height="200"/>

  <img src="https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r10_4.jpg" alt="vb-drive-4310Rx" height="200"/>
</p>

### Технические характеристики

| Параметры | M4310R10 | M4310R36 |
| :--- | :---: | ---: |
| Диапазон напряжений	| 12-30 В | 12-30 В |
| Номинальное напряжение |	24 В |	24 В |
| Ток без нагрузки |	0.8 А |	0.8 А |
| Номинальный ток |	2.0 А |	2.0 А |
| Ток в режиме удержания |	9.5 А |	9.5 А |
| Сопротивление фазы |	1.046 Ом |	1.046 Ом |
| Индуктивность фазы |	0.344мГн |	0.344мГн |
| Количество пар полюсов |	14 |	14 |
| Передаточное отношение |	10:1 | 36:1 |
| Номинальный момент |	1.2 Н м | - |
| Момент удержания |	6.8 Н м | - |
| Скорость вращения без нагрузки |	27.6 рад/с | - |
| Номинальная скорость |	23 рад/с | - |
| Постоянная момента |	0.73 н.м./А | - |
| Количество энкодеров |	2 (внутренний + внешний) |	2 (внутренний + внешний) |
| Коммуникация |	CAN & Cyphal |	CAN & Cyphal |
| Диаметр |	55 мм |	55 мм |
| Высота |	56 мм	| 64 мм |
| Масса |	312 г	| 368 г |
| Диапазон рабочих температур |	-20 – 80 °С |	-20 – 80 °С |
| Диапазон температур хранения |	-65 – 125 °С |	-65 – 125 °С |

### Схема подключения

:::info
Примеры по работе с приводом доступны в разделе [Примеры](../Examples/03-examples-vb-drive.md) 
:::



### Cхема драйвера M4310

![Cхема драйвера бесколлекторного двигателя](https://raw.githubusercontent.com/VBCores/VBCores_files/main/60-VB-Drive-4310Rx/vb-driver-4310x-v0_4-pinout.png)
**[Печатная версия схемы PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/60-VB-Drive-4310Rx/vb-driver-4310x-v0_4-pinout.pdf)**

### Электрическая схема
![Электрическая схема драйвера бесколлекторного двигателя](https://raw.githubusercontent.com/VBCores/VBCores_files/main/60-VB-Drive-4310Rx/vb-driver-4310x-v0_4-schematic.png)
**[Печатная версия схемы PDF](https://raw.githubusercontent.com/VBCores/VBCores_files/main/60-VB-Drive-4310Rx/vb-driver-4310x-v0_4-schematic.pdf)**

### Документация на компоненты

- [Интегрированный драйвер STSPIN32G4](/files/pdf/STSPIN32G4.pdf)
- [Датчик тока (INA181)](/files/pdf/ina181.pdf)
- [Индуктивный датчик (NCV77320)](/files/pdf/ncv77320-d.pdf)
- [EEPROM память (AT24C256C)](/files/pdf/AT24C256C.pdf)
- [Датчик AS5047P](/files/pdf/AS5047_datasheet.pdf)


### 3D-модель

- [STEP-модель M4310R10](https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-nolid-dummie.stp)
- [STEP-модель M4310R36](https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r36-nolid-dummie.stp)

### Результаты испытаний M4310R10

<p>
  <a href="https://github.com/VBCores/VBCores_files/blob/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-afch_speed.png" target="_blank">
    <img src="https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-afch_speed.png" alt="" height="200"/>
  </a>

  <a href="https://github.com/VBCores/VBCores_files/blob/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-afch_ugol.png" target="_blank">
    <img src="https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-afch_ugol.png" alt="" height="200"/>
  </a>

  <a href="https://github.com/VBCores/VBCores_files/blob/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-max_speed.png" target="_blank">
    <img src="https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-max_speed.png" alt="" height="200"/>
  </a>

</p>

<p>
  <a href="https://github.com/VBCores/VBCores_files/blob/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-motor_performance.jpg" target="_blank">
    <img src="https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-motor_performance.jpg" alt="" height="150"/>
  </a>

  <a href="https://github.com/VBCores/VBCores_files/blob/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-get_kt.jpg" target="_blank">
    <img src="https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-get_kt.jpg" alt="" height="150"/>
  </a>

  <a href="https://github.com/VBCores/VBCores_files/blob/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-torque_deviation.jpg" target="_blank">
    <img src="https://raw.githubusercontent.com/VBCores/VBCores_files/refs/heads/main/60-VB-Drive-4310Rx/vb-drive-m4310r10-torque_deviation.jpg" alt="" height="150"/>
  </a>

</p>

## Результаты испытаний M4310R36

Скоро здесь будут графики

:::note
Последние версии всех 3D моделей, фото и схем продукции VBCores можно найти у нас на [GitHub](https://github.com/VBCores/VBCores_files).
:::