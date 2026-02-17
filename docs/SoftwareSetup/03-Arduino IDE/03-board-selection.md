---
id: board-selection
title: Выбор платы в Arduino IDE
sidebar_label: Выбор платы в Arduino IDE
sidebar_position: 3
description: Выбор платы в Arduino IDE
---

# Выбор платы в Arduino IDE



Для начала работы с микроконтроллерами STM32 надо корректно настроить Arduino IDE. Модуль VBCoreG4 основан на микроконтроллере STM32G474RExx. Выставим правильные настройки для него.

Для начала работы в разделе Инструменты (Tools) необходимо выставить следующие настройки:

1\) Укажите плату Generic GenericSTM32 series:

Tools->Board->STM32 boards groups->GenericSTM32G4 series

![Шаг 1](/img/ArduinoBoardSelection/board-selection-1.png)

Убедитесь что она же у вас отображается в списке плат, на которую вы собираетесь заливать скетч

![Шаг 2](/img/ArduinoBoardSelection/board-selection-2.png)

Если в списке плат у вас стоит что-то другое, то кликните на стрелочку внизу и выберите Select Other Board and Port. Укажите необходимые названия и нажмите OK.

![Шаг 3](/img/ArduinoBoardSelection/board-selection-3.png)

2\) В обозначении платы выберите Generic G474RETx:

Tools->Board part number->Generic G474RETx

![Шаг 4](/img/ArduinoBoardSelection/board-selection-4.png)

3\) В методе загрузки выставьте STM32CubeProgrammer (SWD):

Tools->Upload method->STM32CubeProgrammer (SWD)

![Шаг 5](/img/ArduinoBoardSelection/board-selection-5.png)

Мы предполагаем, что у вас корректно установился STM32CubeProg упомянутый ранее и теперь программаторы ST-Link у вас определяются системой.
