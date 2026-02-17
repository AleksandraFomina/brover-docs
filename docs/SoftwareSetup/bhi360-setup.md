---
id: bhi360setup
slug: bhi360-setup
title: "Настройка IMU BHI360"
sidebar_label: "Настройка IMU BHI360"
sidebar_position: "7"
description: "Подготовка инерциального датчика BHI360 к работе"
---

# 

## Подготовка инерциального датчика BHI360 к работе

Репозиторий ПО для IMU BHI360: [https://github.com/VBCores/BHI360_USB_HID/tree/master](https://github.com/VBCores/BHI360_USB_HID/tree/master)

1. Подключите BHI 360 к компьютеру и откройте STM32CubeProgrammer. Подключитесь к модулю и перейдите в раздел `Erase & Programming`:
![](/img/bhi360setup/bhi-1.png)

2. Нажмите `Full chip erase`:
![](/img/bhi360setup/bhi-2.png)

3. Выберите прошивку [BHI360_USB_HID.hex](../../static/files/hex/BHI360_USB_HID.hex) и нажмите `Start Programming`:
![](/img/bhi360setup/bhi-3.png)

4. **Не отключайтесь от модуля**, сверните STM32CubeProgrammer. Откройте CoolTerm и задайте параметры связи в меню `Options`. Затем подключитесь к модулю:

| Serial Port | Terminal |
| :---: | :---: |
| ![](/img/bhi360setup/bhi-4.png) | ![](/img/bhi360setup/bhi-5.png) |


5. Для перехода в режим калибровки зажмите на модуле кнопку **USR** и нажмите одновременно кнопку **RST**. В терминале начнется загрузка прошивки:
![](/img/bhi360setup/bhi-6.png)

6. Оставьте IMU лежать на столе.

7. Дождитесь появления следующего сообщения: **`[META EVENT] Accuracy for sensor id 13 changed to 3`** . Это будет означать, что гироскоп откалиброван. 
![](/img/bhi360setup/bhi-7.png)

9. Далее возьмите IMU в руки и вращайте поочередно по трем осям XYZ на 180 градусов в одну сторону и обратно, по 45 градусов с паузами по несколько секунд. После окончания калибровки вы должны увидеть строчку: **`[META EVENT] Accuracy for sensor id 4 changed to 3`**. Это будет означать, что акселерометр откалиброван.
![](/img/bhi360setup/bhi-8.png)

11. Последнее сообщение должно быть: **`FLASH programmed successfully!`** Это означает, что IMU откалиброван.

12. Вернитесь в STM32CubeProgrammer и отключитесь от модуля.

