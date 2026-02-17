---
id: arduino-examples
title: Примеры на ардуино
sidebar_label: Примеры на ардуино
sidebar_position: 1
description: Примеры на ардуино
---

# Примеры на ардуино

Перед вами примеры программ для работы с различными датчиками, моторами и интерфейсами передачи данных.

Все примеры доступны в репозитории: [https://github.com/VBCores/VBCoreG4_examples/tree/main](https://github.com/VBCores/VBCoreG4_examples/tree/main)

---
:::info
Чтобы корректно повторить примеры и настроить пины, рекомендуется **заранее прочитать pinout и документацию** для каждого используемого драйвера и модуля.
:::
## BASIC

Простейшие примеры программ взаимодействия VBCore с периферией.

| Пример                                                                                                                    | Описание                                       |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [Blink](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/blink)                                      | Мигание светодиодом                            |
| [DAC_example](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/DAC_example)                          | Работа с ЦАП (цифро-аналоговое преобразование) |
| [BTN_with_Serial](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/btn_to_serial)                    | Работа с пользовательской кнопкой и Serial     |
| [Timer_example](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/simple_timer)                       | Использование таймера                          |
| [Timer_with_Serial_and_BTN](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/btn_serial_timer_blink) | Мигание светодиодом с частотой из Serial       |
| [I2C_scanner](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/STM32Duino_I2C_scanner)               | Поиск устройств на шине I2C                    |
| [BNO_example](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/bno_example)                          | Чтение IMU BNO по I2C                          |
| [AS5047P_SPI_example](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/AS5047P_ReadAngle)            | Чтение энкодера AS5047P по SPI                 |
| [AS5600_I2C_example](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/AS5600_read_magnet)            | Чтение энкодера AS5600 по I2C                  |
| [DIP_Switch_Reading](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/dip_switch_reading)            | Работа с DIP‑переключателем                    |
| [EEPROM_Basic](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/eeprom_example_basic)                | Базовая работа с EEPROM                        |
| [VB_EEPROM_example](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/basic/eeprom_with_VBEEPROM)           | EEPROM через библиотеку VB_EEPROM              |

---

## CAN / CAN FD / Cyphal

Примеры программ для работы с CAN, CAN FD и Cyphal CAN.

:::info
Чтобы работать с **CYPHAL CAN**, скачайте библиотеку [libcypcal](https://github.com/VBCores/libcxxcanard) и **скопируйте в свою папку Arduino/Libraries**. **Документация с примерами к этой библиотеке есть в** [libcyphal-docs](https://github.com/VBCores/libcyphal-docs/tree/master). Перед написанием примера с cyphal настоятельно рекомендуем прочитать документацию к [ регламентированным типам данных](https://github.com/OpenCyphal/public_regulated_data_types/tree/master). Это существенно облегчит вам понимание особенностей типов и их адресации
:::

| Пример                                                                                                                   | Описание                         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| [Classic_CAN](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/can/can_classic)                           | Передача и приём сообщений CAN   |
| [CAN_FD](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/can/can_fd)                                     | Передача и приём CAN FD          |
| [Cyphal_send_angle](https://github.com/VBCores/libcxxcanard-docs/tree/master/examples/arduino/angle)                     | Отправка угла по Cyphal          |
| [Cyphal_send_array](https://github.com/VBCores/libcxxcanard-docs/tree/master/examples/arduino/array)                     | Отправка массива по Cyphal       |
| [Cyphal_send_heartbeat](https://github.com/VBCores/libcxxcanard-docs/tree/master/examples/arduino/heartbeat)             | Отправка heartbeat               |
| [Cyphal_send_string](https://github.com/VBCores/libcxxcanard-docs/tree/master/examples/arduino/string)                   | Отправка строки                  |
| [Cyphal_send_angular_vel_and_angle](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/can/cyphal_can_send) | Отправка угла и угловой скорости |
| [Cyphal_recv_angular_vel](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/can/cyphal_can_recv)           | Приём угловой скорости           |

---

## Python

Программы верхнего уровня, написанные на Python.

| Пример                                                                                         | Описание               |
| ---------------------------------------------------------------------------------------------- | ---------------------- |
| [CAN_Recv](https://github.com/VBCores/VBCoreG4_examples/blob/main/examples/python/can_recv.py) | Приём CAN сообщений    |
| [CAN_Send](https://github.com/VBCores/VBCoreG4_examples/blob/main/examples/python/can_send.py) | Отправка CAN сообщений |

---

## DC Driver

Примеры работы с DC‑драйвером и DC‑моторами.

| Пример                                                                                                                    | Описание                      |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [PWM](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/dc/pwm)                                             | Управление DC мотором по ШИМ  |
| [EncoderAB_Read](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/dc/pwm_encoder_read)                     | Чтение AB‑энкодера            |
| [EncoderABZ_Read](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/dc/read_encoder_ABZ)                    | Чтение ABZ‑энкодера           |
| [Pos_control](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/dc/move_pos_motor)                          | Управление мотором по позиции |
| [Get_velocity](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/dc/read_velocity_dc_motor)                 | Получение скорости мотора     |
| [Get_ang_vel_from_encoder](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/dc/angle_vel_from_encoder)     | Угол и скорость по энкодеру   |
| [Get_ang_from_encoderABZ](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/dc/read_angle_from_encoder_ABZ) | Угол по ABZ‑энкодеру          |

---

## BLDC Driver

Примеры работы с BLDC‑драйвером и BLDC‑моторами (SimpleFOC).

| Пример                                                                                                                           | Описание                            |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [Find_number_of_pole_pairs](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/bldc/SimpleFoc)                      | Определение числа пар полюсов       |
| [Velocity_control](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/bldc/SimpleFoc/velocity_control_with_current) | Управление скоростью                |
| [Torque_voltage_control](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/bldc/SimpleFoc/motor_torque_control)    | Управление моментом (по напряжению) |

---

## Stepper Driver

Примеры работы с драйвером шагового двигателя.

| Пример                                                                                                                | Описание                               |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [Control_by_SPI](https://github.com/VBCores/VBCoreG4_examples/blob/main/examples/stepper/spi_example/spi_example.ino) | Управление шаговым двигателем по SPI   |
| [Control_by_tmcLib](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/stepper/tmc_lib_example)          | Управление через библиотеку TMCStepper |

---

## Other Examples

Примеры совместного использования драйверов моторов и CAN / Cyphal.

| Пример                                                                                                                                  | Описание                          |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [CanFD_with_dc_motor_ctrl](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/other/can_fd_dc_pwm)                         | Управление DC мотором по CAN FD   |
| [Cyphal_with_dc_motor_ctrl](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/other/cyphal_dc)                            | Управление DC мотором по Cyphal   |
| [Cyphal_with_bldc_velocity_control](https://github.com/VBCores/VBCoreG4_examples/tree/main/examples/other/cyphal_velocity_control_bldc) | Управление BLDC мотором по Cyphal |
