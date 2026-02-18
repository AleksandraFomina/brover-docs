---
id: image
title: Образ Raspberry Pi 5
sidebar_label: Образ Raspberry Pi 5
sidebar_position: 1
description: Образ Raspberry Pi 5
---

Компьютеры Raspberry, идущие в комплекте с роботами, поставляются с предустановленными ОС Ubuntu Server 24.04.3 LTS, ROS Jazzy и всеми необходимыми системными пакетами. В файле /etс/os-realease указана версия образа: `IMAGE_VERSION="broverOS_v2.x.x"` 

На образе установлены:
- Системные пакеты:
    -- libhidapi-de
    -- libboost-all-dev
- ROS пакеты:
    -- ros-jazzy-tf-transformations
    -- ros-jazzy-usb-cam
    -- ros-jazzy-rosbridge-server
    -- ros-jazzy-joy
- Утилиты для работы с протоколом [CAN](https://docs.vbcores.ru/docs/SoftwareSetup/rpi-setting), [Cyphal](https://docs.vbcores.ru/docs/Cyphal/cyphal-can):
    -- can-utils
    -- yakut


