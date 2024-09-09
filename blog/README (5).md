# ![inkball-git](https://user-images.githubusercontent.com/6630660/224464325-c4d334f9-8df3-49f5-be69-899e9cf4febb.png) InkBall3D

Aim at providing InkBall game in Windows Vista and Windows XP for Windows 10/11

## Download 

<a style="margin-left:24px" href="https://www.microsoft.com/store/productId/9NBK1BJ87MCF">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://get.microsoft.com/images/en-us%20light.svg" />
        <source media="(prefers-color-scheme: light)" srcset="https://get.microsoft.com/images/en-us%20dark.svg" />
        <img style="vertical-align:middle" src="https://get.microsoft.com/images/en-us%20dark.svg" alt="Download DiskInfo" />
    </picture>
</a>

## Target

Aim at providing InkBall game in Windows Vista and Windows XP for Windows 10/11

![image](https://user-images.githubusercontent.com/6630660/224464358-b118ae88-c639-4d1e-8902-989b793fa530.png)


## Prepare Run 运行前准备
- `Unity Editor` -> `File` -> `Build Settings` -> `Universal Windows Platform` -> `SwitchPlatform`  
  ![image](https://github.com/MicaGames/InkBall/assets/68675068/4014a3a8-afec-41d2-b434-5709d854b9f7)  
- Build Unity into `uwp` folder first  
  首先构建Unity项目到`uwp`文件夹  
- Open `uwp/InkBall.sln` and Run  
  打开`uwp/InkBall.sln`项目文件 运行它  
- if this files is not normal, plese confirm that you check `Unity` -> `Build Settings` -> `Copy References`  
  如果下图文件不正常,请确定自己`Unity`构建时勾选了`Copy References`  
![image](https://github.com/MicaGames/InkBall/assets/68675068/aa25503f-66ac-4c9b-8c63-8b56eb088fd3)  
![image](https://github.com/MicaGames/InkBall/assets/68675068/25ad5278-ee4a-4f7d-9c43-a21bb3166568)  
- select `InkBall-CSharp` to your run project  
  选择`InkBall-CSharp`为你的启动项目  
![image](https://github.com/MicaGames/InkBall/assets/68675068/c284d5c5-667e-4eab-9ad7-f8e03a8c041a)  
- Blank 2 files and `nuget` packages will be filled by itself  
  缺的2个文件和`nuget`包会在运行时自动安装
## Environment
InkBallBridge: [![img](https://img.shields.io/nuget/v/InkBallBridge?color=blue)](https://github.com/kitUIN/IL2CPPToWinRTBridge/blob/master/README.md#inkballbridge)

Unity Version：

Workload：

Visual Studio Version：

Workload：

## Target Platform

Windows Universal

macOS

iOS

Android

Linux

## About Git

- UWP
    - only add into git that what files you  changed, ignore others  
      你只需要在git中添加你修改过的文件,其他全都忽略
