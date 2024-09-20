Crystal Disk Info 是世界上最著名的磁盘健康监测工具之一。它是免费和开源的，并且仍在积极维护。它的仓库位于https://github.com/hiyohiyo/CrystalDiskInfo 该项目旨在为 DiskInfo 提供现代外观。

## 概述

Crystal Disk Info 是世界上最著名的磁盘健康监测工具之一。它是免费和开源的，并且仍在积极维护。它的仓库位于https://github.com/hiyohiyo/CrystalDiskInfo。本该项目旨在为 DiskInfo 提供现代外观。全新设计遵循 Fluent Design System，布局灵活，适应性强，视觉设计迷人。

## 分析

让我们从头开始分析这一应用的界面组成。1.菜单栏集合了所有功能，我们将其放在一边。2.顶部导航栏是盘符。3.在左边有健康状态和温度。右边是一系列表单信息。4.下方是一个数据列表（Data Grid）。让我们简单地将其套入 Windows UI 组件库

![ea026ad95b3bcff3410dc62cd7d819cf](https://github.com/user-attachments/assets/694ab5a9-6625-493a-8c3b-575940f15be6)
![a6d5cfa48e003503d76bb52b2c81b08c](https://github.com/user-attachments/assets/0a82e88f-f5bc-4da9-aa13-bf9bd27fb9e5)

这里启用了 Item1，Item2 的 Tab 导航，这是因为他有一个复杂的图表功能，我决定将其纳入第一个 Item让我们快速迭代这个设计

## 快速迭代
我们的目标是首先减少导航层级。其次是，适配从小窗口至27英寸16：9屏幕的情况。组件当然是响应式的，但是问题在于如何填充大屏幕。现有设计是 菜单栏-标题栏-Tab栏。于是，考虑将图表功能作为列表放入左侧，这样可以去除Tab栏，将Tab栏下的列表合并至概览页面，概览页面作为列表项之一。
