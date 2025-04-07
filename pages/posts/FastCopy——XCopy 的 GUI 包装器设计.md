---
title: FastCopy——XCopy 的 GUI 包装器设计
date: 1684058682
updated: 1684330041
---

Windows 内置的 GUI 包装器 `robocopy` 和 `xcopy`。

<!-- more -->

## 仓库地址
[https://github.com/HO-COOH/FastCopy](https://github.com/HO-COOH/FastCopy)

## 下载地址

## 概述
Windows 内置的 GUI 包装器 `robocopy` 和 `xcopy`。

![输入图片说明](/uploads/20230517/c226bdccc3fb573b322fdb9d14166d7c.png)

我们一开始就设计了多合一的复制对话框，就像 Windows 传统的复制对话框一样

![Windows 8 Copy Dialog Box](https://media.askvg.com/articles/images2/Windows_8_Explorer_Copy_Dialog_Box.png)

![image.png](/uploads/20230516/43fcbec25efbedb1a580466b69e2e2cb.png)

由于开发计划的变更，我们决定专注于更急迫的开发任务上。也就是先支持单个复制实例，多个复制实例出现时，他们将拥有单独的对话框。

复制是一个轻量的操作，或者至少它应该展示出轻量的感觉，因此它不应该使用 Mica 材质，而应该使用 Acrylic 材质，以传达 "临时，轻量，快速" 的特征

![image.png](/uploads/20230516/838f5dccfd051ba0d3f090b70a97a26e.png)

尽管多年来 Windows 的复制进度条（正常状态）都使用绿色，但我们决定跟随新版的设计规范，在正常状态下，进度颜色跟随强调色。

这是 Windows 8/10 的复制冲突对话框，重新设计如下图

![Windows 复制冲突对话框](https://pic1.zhimg.com/80/v2-a90cf3f2e6c1c266a25fa9b96398bdf4_1440w.webp)
![image.png](/uploads/20230516/d6c77b1d93c29a03535fdd9a7953bd3e.png)

当你选择第三项，"比较两个文件的信息" 时，它会弹出一个新的对话框，过多的对话框不得不是一个灾难。因此我们将其直接合并在一个对话框内，用颜色区分展开关系。

![image.png](/uploads/20230516/6495546d34129ee6711cfc92badc1c3c.png)
![image.png](/uploads/20230516/f282bdb52aa402821659f49dfe1df56a.png)
