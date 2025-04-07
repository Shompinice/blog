---
title: 重新设计 Crystal Disk Info
date: 1684219345
updated: 1684291358
---

Crystal Disk Info 是世界上最著名的磁盘健康监测工具之一。它是免费和开源的，并且仍在积极维护。它的仓库位于 [https://github.com/hiyohiyo/CrystalDiskInfo](https://github.com/hiyohiyo/CrystalDiskInfo)。该项目旨在为 DiskInfo 提供现代外观。全新设计遵循 Fluent Design System，布局灵活，适应性强，视觉设计迷人。

<!-- more -->

## 仓库地址
[https://github.com/DiskTools/DiskInfo](https://github.com/DiskTools/DiskInfo)

## 下载地址
[![Download DiskInfo](https://get.microsoft.com/images/en-us%20dark.svg)](https://www.microsoft.com/store/productId/9PLQ8DP73ZDF)

## 概述
![CrystalDiskInfo](/uploads/20230516/ea026ad95b3bcff3410dc62cd7d819cf.png)

Crystal Disk Info 是世界上最著名的磁盘健康监测工具之一。它是免费和开源的，并且仍在积极维护。它的仓库位于 [https://github.com/hiyohiyo/CrystalDiskInfo](https://github.com/hiyohiyo/CrystalDiskInfo)

该项目旨在为 DiskInfo 提供现代外观。全新设计遵循 [Fluent Design System](https://www.microsoft.com/design/fluent/)，布局灵活，适应性强，视觉设计迷人。

## 技术栈
C++/C#/WinUI3

## 分析
让我们从头开始分析这一应用的界面组成：
1. 菜单栏集合了所有功能，我们将其放在一边
2. 顶部导航栏是盘符
3. 在左边有健康状态和温度。右边是一系列表单信息
4. 下方是一个数据列表（Data Grid）

让我们简单地将其套入 Windows UI 组件库，这里启用了 Item1，Item2 的 Tab 导航，这是因为他有一个复杂的图表功能，我决定将其纳入第一个 Item

![屏幕截图](/uploads/20230516/2d4f73dfc671260575fa935dcd1af6e5.png)

![image](/uploads/20230516/a6d5cfa48e003503d76bb52b2c81b08c.png)

让我们快速迭代这个设计

![image](/uploads/20230516/89bd38323858d0c9d7a27f3baca4bc68.png)
![image](/uploads/20230516/b62f20cddbeafb3a8d0869e10b7439ad.png)

## 快速迭代
我们的目标是首先减少导航层级。其次是，适配从小窗口至27英寸16：9屏幕的情况。组件当然是响应式的，但是问题在于如何填充大屏幕。现有设计是 菜单栏-标题栏-Tab栏。于是，考虑将图表功能作为列表放入左侧，这样可以去除Tab栏，将Tab栏下的列表合并至概览页面，概览页面作为列表项之一。

在迭代到最后一组方案时，我已经基本满意了。右侧的温度可以随意拉伸或压缩宽度，这样确保任意宽度下都可以充满第一行。

![设计迭代](/uploads/20230516/4b4785d331203a6f2089d92a8f1c59df.png)

为了布局更加优化，形成了典型的 "导航-列表-详情" 三列视图。另外，更重要的是，温度背景修改为了点阵列，这使得它与背景融合更加完美，且更有复古效果。

![三列视图](/uploads/20230516/97bb0d1e6afabdad2b5cbaa305028c93.png)

于是这个点阵背景拓展到图表页面

![图表页面](/uploads/20230516/916754b119b35d600c6b043fc551f987.png)

当窗口变窄的时候，每一级视图都充满窗口宽度。

![响应式布局](/uploads/20230516/e80ffdf67b014b104cbebbba46ff93d7.png)

此外，不同的颜色表示不同的健康状况。

![健康状况](/uploads/20230516/eb1ebfc62e983a2c2ae18c3c25362533.png)

当出现黄色和红色评分时，对应的左侧导航栏图标的颜色也会改变。

![导航栏颜色变化](/uploads/20230516/441ccce413d2a07487542806286efb6d.png)

## 图标设计
首先发散不同的想法。第一个图标来自原版图标。后面的几个图标来自 SSD 和机械盘。雨刷器表示刷新的感觉。机械盘加上雨刷器看起来有些像洗衣机。

![图标设计方案](/uploads/20230516/cb06bdab9e282c011f806aade7e25178.png)

最终我们从以上方案中选择下图中的四个继续深入。

![筛选方案](/uploads/20230516/c6c447134381d6e65c065af3a6485727.png)

快速迭代和探索发散。

![迭代过程](/uploads/20230516/f80955a0f1053c2ea7810ed54fcb1f99.png)

图标外框尺寸是 1024x1024px ，红色格子为 64px。对齐到格子可以确保32x32 px 下仍然拥有清晰的边界。

![图标网格](/uploads/20230516/9c4375d515cb22251de1122c4d7b081e.png)

经过评估，团队一致同意使用下图中的32，33的高度太小，使得在任务栏上表现不佳。

![最终方案](/uploads/20230516/103c20b8b9e25f7176512f7972aa663e.png)
