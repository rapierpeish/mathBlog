---
title: Gauss-Codazzi方程
categories: 微分几何
tags:
  - 微分几何
order: 11
createTime: 2026/01/29 12:36:00
permalink: /math/l1i7zaoa/
---

# 0. 简述

Gauss–Codazzi 方程是微分几何中描述子流形（特别是曲面）嵌入到高维欧几里得空间时，其内蕴几何（由第一基本形式决定）与外蕴几何（由第二基本形式决定）之间关系的一组基本方程。它们由 **Gauss 方程** 和 **Codazzi–Mainardi 方程** 两部分组成。Gauss–Codazzi 方程最直接的应用是壳理论中的 Gauss–Codazzi 相容条件，用来约束几何变形是否相容。

下面以二维曲面 $S\subset\mathbb{R}^3$ 为例，推导 Gauss–Codazzi 方程。设 $\mathbf{x}(u^1,u^2)$ 是曲面的局部参数化。

# 1. 从Gauss 公式与 Weingarten 公式出发

Gauss 公式，标架运动切向分解：

$$
\mathbf{x}_{ij}=\Gamma_{ij}^{k}\mathbf{x}_{k}+h_{ij}\mathbf{n}
$$

Weingarten 公式，标架运动切向量在法向的投影：

$$
\mathbf{n}_{i}=-h_{i}^{k}\mathbf{x}_{k},\quad\ h_{i}^{k}=g^{kl}h_{il}
$$

$g^{kl}$ 表示度量张量 $g_{ij}$ 的逆元。

例1. 二维曲面例子
假设曲面参数化为 $\mathbf{x}(u,v)$，则：

$$
(g_{ij})=\begin{pmatrix}E&F\\ F&G\end{pmatrix}=\begin{pmatrix}\langle\mathbf{x}_{u},\mathbf{x}_{u}\rangle& \langle\mathbf{x}_{u},\mathbf{x}_{v}\rangle\\ \langle\mathbf{x}_{v},\mathbf{x}_{u}\rangle&\langle\mathbf{x}_{v},\mathbf{x}_ {v}\rangle\end{pmatrix}
$$

其逆为：

$$
(g^{kl})=\frac{1}{EG-F^{2}}\begin{pmatrix}G&-F\\ -F&E\end{pmatrix}
$$

例如：

$$
h_{1}^{~{}1}=g^{11}h_{11}+g^{12}h_{12}=\frac{Gh_{11}-Fh_{12}}{EG-F^{2}}
$$


# 1 推导 *Gauss* 方程

推导步骤：

- 利用

## 1.1 混合偏导数的对称性

根据 *Schwarz* 定理 ：

设函数 $f:U\subset\mathbb{R}^n\to\mathbb{R}^m$ ，在开集 $U$ 上具有连续的二阶偏导数，对任意 $i,j$ 有：

$$
\frac{\partial^{2}f}{\partial u^{i}\partial u^{j}}=\frac{\partial^{2}f}{ \partial u^{j}\partial u^{i}}
$$

即混合偏导数与求导顺序无关。

所以为了定义 Christoffel 符号、曲率等，通常要求 $\mathbf{x}\in C^3$ ，从而可导出 Gauss–Codazzi 方程。

## 1.1 通过对称性推导 Gauss 方程

考虑混合偏导数的对称性 $\mathbf{x}_{ijk}=\mathbf{x}_{ikj}$，利用 $Gauss$ 公式计算 $(\mathbf{x}_{ij})_{k}$ :

$$
(\mathbf{x}_{ij})_{k} = \Gamma_{ij,k}^{l}\mathbf{x}_{l}+\Gamma_{ij}^{l} \mathbf{x}_{lk}+h_{ij,k}\mathbf{n}+h_{ij}\mathbf{n}_{k}\tag{1.1}
$$

这里要使用乘积法则展开 $\partial_{k}(\Gamma_{ij}^{l} \mathbf{x}_{l})=(\partial_{k}\Gamma_{ij}^{l}) \mathbf{x}_{l}+\Gamma_{ij}^{l} (\partial_{k}\mathbf{x}_{l})$

根据 Gauss 公式和 Weingarten 公式计算 $\mathbf{x}_{lk},\mathbf{n}_{k}$ 

$$
\mathbf{x}_{\mathit{lk}}=\Gamma_{\mathit{lk}}^{\mathit{m}}\mathbf{x}_{\mathit{ m}}+\mathit{h}_{\mathit{lk}}\mathbf{n},\quad\mathbf{n}_{\mathit{k}}=-\mathit{h}_{ \mathit{k}}^{\mathit{m}}\mathbf{x}_{\mathit{m}}
$$

将 $\mathbf{x}_{lk},\mathbf{n}_{k}$ 带入式 (1.1) ：

$$
\mathbf{x}_{\mathit{ijk}}=\left(\Gamma_{ij,k}^{l}+\Gamma_{ij}^{\mathit{m}} \Gamma_{\mathit{mk}}^{l}-h_{ij}h_{k}^{l}\right)\mathbf{x}_{l}+\left(h_{ij,k}+ \Gamma_{ij}^{\mathit{m}}h_{\mathit{mk}}\right)\mathbf{n}
$$
其中:

- $\Gamma_{ij,k}^{l}$ 是 $\Gamma_{ij}^{l}$ 在 $k$ 方向的偏导数

同理计算得到 $\mathbf{x}_{ikj}$ :

$$
\mathbf{x}_{\mathit{ikj}}=\left(\Gamma_{\mathit{ik},j}^{\mathit{l}}+\Gamma_{ \mathit{ik}}^{\mathit{m}}\Gamma_{\mathit{mj}}^{\mathit{l}}-h_{\mathit{ik}}h_{ j}^{\mathit{l}}\right)\mathbf{x}_{\mathit{l}}+\left(h_{\mathit{ik},j}+\Gamma_{ \mathit{ik}}^{\mathit{m}}h_{\mathit{mj}}\right)\mathbf{n}
$$

由于 $\mathbf{x}_{\mathit{ijk}} = \mathbf{x}_{\mathit{ikl}}$ :

$$
\Gamma^{l}_{ij,k}-\Gamma^{l}_{ik,j}+\Gamma^{m}_{ij}\Gamma^{l}_{mk}-\Gamma^{m}_ {ik}\Gamma^{l}_{mj}=h_{ij}h^{l}_{k}-h_{ik}h^{l}_{j}
$$

左边正是 [[Riemann曲率张量]] 的定义：

$$
R^{l}_{ijk}=\Gamma^{l}_{ij,k}-\Gamma^{l}_{ik,j}+\Gamma^{m}_{ij}\Gamma^{l}_{mk} -\Gamma^{m}_{ik}\Gamma^{l}_{mj}
$$

得到 Gauss 方程：

$$
R_{ijk}^{m}= h_{ij}h^{l}_{k}-h_{ik}h^{l}_{j}
$$

在二维情形，Gauss 曲率 K 满足：

$$
K = \frac{\det h_{ij}}{\det g_{ij}}
$$
这正是 [[高斯绝妙定理]] ：高斯曲率仅依赖于第一基本形式。

# 2 推导 Codazzi–Mainardi 方程

列出 $\mathbf{x}_{ijk},\mathbf{x}_{ikj}$​ ：

$$
\begin{align} 
\mathbf{x}_{\mathit{ijk}}&=\left(\Gamma_{ij,k}^{l}+\Gamma_{ij}^{\mathit{m}} \Gamma_{\mathit{mk}}^{l}-h_{ij}h_{k}^{l}\right)\mathbf{x}_{l}+\left(h_{ij,k}+ \Gamma_{ij}^{\mathit{m}}h_{\mathit{mk}}\right)\mathbf{n}\\
\mathbf{x}_{\mathit{ikj}}&=\left(\Gamma_{\mathit{ik},j}^{\mathit{l}}+\Gamma_{ \mathit{ik}}^{\mathit{m}}\Gamma_{\mathit{mj}}^{\mathit{l}}-h_{\mathit{ik}}h_{ j}^{\mathit{l}}\right)\mathbf{x}_{\mathit{l}}+\left(h_{\mathit{ik},j}+\Gamma_{ \mathit{ik}}^{\mathit{m}}h_{\mathit{mj}}\right)\mathbf{n}
\end{align}
$$

因为 $\mathbf{x}_{ijk}=\mathbf{x}_{ikj}$ ，切向相等部分为Gauss方程，法向相等部分为 Codazzi 方程：​

$$
h_{ij,k}+\Gamma_{ij}^mh_{mk}=h_{ik,j}+\Gamma_{ik}^mh_{mj}\tag{2.1}
$$

这就是使用普通偏导和 Christoffel 符号表示的 Codazzi 方程 （非协变形式）。接下来将改写为协变形式，揭示其几何本质。

对于 (0,2) 张量 $h_{ij}$ 协变导数定义为：

$$
\nabla_{k}h_{ij}=h_{ij,k}-\Gamma_{ki}^{m}h_{mj}-\Gamma_{kj}^{m}h_{im}\tag{2.2}
$$

因为 $h_{ij}$ 是个 (0,2) 型张量(两个协变指标)，所以协变导致按照 "-" 号展开。

-  $h_{ij,k}$ 是 $h_{ij}$ 沿 $k$ 方向的导数
- $\Gamma_{ki}^{m}h_{mj}$ 和 $\Gamma_{kj}^{m}h_{im}$ 是垂直 $k$ 方向的切向量的旋转量



同理先后交换 $j,k$ 指标，$i,j$ 指标得到：

$$
\begin{align}
\nabla_{j}h_{ik}&=h_{ik,j}-\Gamma_{ji}^mh_{mk}-\Gamma_{jk}^mh_{im} \\
\nabla_{i}h_{jk}&=h_{jk,i}-\Gamma_{ij}^mh_{mk}-\Gamma_{ik}^mh_{jm}
\end{align}
$$
因为 $h_{ij}=h_{ji},\Gamma_{ij}^m=\Gamma_{ij}^m$，所以：

$$
\nabla_{j}h_{ik} - \nabla_{i}h_{jk}=h_{ik,j}-h_{jk,i}+\Gamma_{ik}^mh_{jm}-\Gamma_{jk}^mh_{im}
$$

对 (2.1) 交换jk指标：

$$
h_{ik,j}+\Gamma_{ik}^mh_{mj}=h_{ij,k}+\Gamma_{ij}^mh_{mk}\tag{2.3}
$$
交换ij指标：

$$
h_{jk,i}+\Gamma_{jk}^mh_{mi}=h_{ji,k}+\Gamma_{ji}^mh_{mk}\tag{2.4}
$$

(2.3)-(2.4)：

$$
h_{ik,j} - h_{jk,i} + \Gamma_{ik}^mh_{mj}-\Gamma_{jk}^mh_{mi}=0\Rightarrow
h_{ik,j} - h_{jk,i} = \Gamma_{jk}^mh_{mi}-\Gamma_{ik}^mh_{mj}
$$

所以：

$$
\nabla_{j}h_{ik} = \nabla_{i}h_{jk}
$$
