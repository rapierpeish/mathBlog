---
title: 9.从Sobolev度量出发建立变分
categories: 微分几何
tags:
  - 微分几何
order: 9
createTime: 2026/01/29 12:36:00
permalink: /math/bdw47yz8/
---
本文从函数空间的角度出发，构造变分法的理论基础，逐步推导欧拉–拉格朗日方程。我们以路径最短问题为例，在具有度量结构的 Sobolev 空间上分析泛函的极值问题。

# 泛函与变分的基本概念

## 泛函的说明
泛函（functional）是映射，满足
$$
L:\mathcal{F} \to \mathbb{R}
$$
泛函将任意 $\gamma \in \mathcal{F}$ 作为输入，输出一个实数，$\mathcal{F}$是一个函数集合。

## 例子：路径弧长

设路径函数 $\gamma(t): [0,1] \to \mathbb{R}^n$，则弧长泛函为：

$$
L[\gamma] = \int_0^1 \|\gamma'(t)\| dt
$$

## 什么是变分？
“变分”即研究泛函在函数的微小扰动下的变化率，本质上是研究泛函在函数空间中的“方向导数”。
要研究方向导数，必须先定义**距离度量**。

# 路径函数空间与 Sobolev 度量

设路径函数为：

$$
\gamma: [0,1] \to \mathbb{R}^n
$$

定义路径空间为一阶 Sobolev 空间

$$
H^1([0,1], \mathbb{R}^n) =  \{ \gamma \in L^2 \ \mid \ \gamma' \in L^2  \}
$$

Sobolev 空间是一类带有弱导数（weak derivative）概念的函数空间，它将函数及其导数的平方可积性统一起来，从而能够处理一般意义下的“光滑性”。
一阶 Sobolev 空间定义为：

$$
H^1([0,1], \mathbb{R}^n)=\{\gamma:[0,1]\to \mathbb{R}^n|\gamma \in L^2([0,1],\mathbb{R}^n),\gamma^{'}\in L^2([0,1],\mathbb{R}^n)\}
$$

此处
$\gamma\in L^2$ 表示路径本身平方可积：

$$
\int_{0}^{1} || \gamma(t) ||^{2}dt<\infty
$$

$\gamma^{'}\in L^2$ 表示路径本身平方可积：

$$
\int_{0}^{1} || \gamma^{'}(t) ||^{2}dt<\infty
$$

在该空间中定义内积：

$$
\langle \gamma_1, \gamma_2 \rangle_{H^1} = \int_0^1 \gamma_1(t) \cdot \gamma_2(t) \, dt + \int_0^1 \gamma_1'(t) \cdot \gamma_2'(t) \, dt
$$

由此诱导范数与度量：

$$
\|\gamma\|_{H^1} = \left( \int_0^1 \|\gamma(t)\|^2 \, dt + \int_0^1 \|\gamma'(t)\|^2 \, dt \right)^{1/2}
$$

$$
d(\gamma_1, \gamma_2) = \|\gamma_1 - \gamma_2\|_{H^1}
$$

该度量满足：
- 非负性；
- 分离性（在几乎处处等价类中）；
- 对称性；
- 三角不等式。
因此 $H^1$ 是一个完备的度量空间（希尔伯特空间）。

> 空间 = 集合 + 度量


## 解释：函数的微小领域（Neighborhood）

设泛函定义在路径空间 $\mathcal{F} = H^1([0,1], \mathbb{R}^n)$ 上。  
给定某个路径函数 $\gamma \in \mathcal{F}$，使用*epsilon-delta*方式描述微小领域：

函数$\tilde\gamma \in \mathcal{F}$ 属于$\gamma$的一个微小邻域， 如果对任意 $\delta > 0$，满足 $\|\tilde\gamma - \gamma\|_{H^1} < \delta$ ，那么满足条件的所有$\tilde\gamma$就成为$\gamma$的微小领域。

这个“邻域”是通过 *Sobolev* 范数构建的，衡量路径本身和导数的差异：

$$
\|\gamma - \tilde\gamma\|_{H^1}^2 = \int_0^1 \|\gamma(t) - \tilde\gamma(t)\|^2 + \|\gamma'(t) - \tilde\gamma'(t)\|^2 dt
$$

### 局部 Lipschitz 条件
设泛函$L: H^1 \to \mathbb{R}$。我们说 $L$ 在 $\gamma$ 的某邻域中满足**局部 Lipschitz 条件**，是指存在常数$C > 0$，使得对所有$\tilde\gamma$ 满足:

$$
||\tilde{\gamma}-\gamma||_{H^1} < \delta
$$

进而可以得出:

$$
\|L[\tilde{\gamma}]- L[\gamma]\| \leq C ||\tilde{\gamma}-\gamma||_{H^1}
$$


这个条件说明：**泛函的值变化是收敛的**，它是可微性的一个必要前提。

## 从 Lipschitz 到 Gateaux 可微

### 泛函可微重要性
在一般的泛函空间中，泛函未必处处可微。例如：
- 某些非光滑泛函在不可导点不可微；
- 如果泛函在扰动方向不连续，也会使变分导数不存在。

### 泛函可微性（*Gateaux* 可微）

设$L: H^1 \to \mathbb{R}$是定义在*Sobolev*空间上的泛函。如果对任意$\gamma \in H^1$有*Lipschitz*条件成立，所有对所有方向$\eta \in H^1$，极限存在：

$$
\lim_{\epsilon \to 0} \frac{L[\gamma + \epsilon \eta] - L[\gamma]}{\epsilon}
$$

我们说 $L$ 在$\gamma$点沿$\eta$方向 **Gâteaux 可微**，

## 定义变分：Sobolev 空间中的方向导数

给定泛函:

$$
L[\gamma] = \int_0^1 F(\gamma(t), \gamma^{'}(t)) \, dt
$$

引入**扰动函数** $\eta \in H^1_0([0,1], \mathbb{R}^n)$，满足端点条件 $\eta(0) = \eta(1) = 0$。

构造扰动路径

$$
\gamma_\epsilon(t)=\gamma(t)+\epsilon\eta(t)
$$

定义变分（$\eta$方向导数）$\delta L\lbrack\gamma\rbrack(\eta)$ 为

$$
\frac{d}{d\epsilon}\int_{0}^{1}L(\gamma_\epsilon,\gamma_\epsilon^{'},t)dt 
$$


导数符号$\frac{d}{d\epsilon}$推进到积分号内

$$
\delta L\lbrack\gamma\rbrack(\eta) = \int_{0}^{1} \left( \frac{\partial L}{\partial \gamma_\epsilon} \eta + \frac{\partial L}{\partial \gamma_\epsilon'} \frac{d\eta}{dt} \right) dt|_{\epsilon=0}
$$

这里使用的多元函数的1阶微分形式：

$$
\frac{dF(x(t),y(t))}{dt} = \frac{\partial F}{\partial x} \frac{dx}{dt}+\frac{\partial F}{\partial y} \frac{dy}{dt}
$$

部分积分公式
$$
\int uv^{'}dx= uv-\int u'vdx
$$

对第二项做分部积分：

$$
\delta L\lbrack\gamma\rbrack(\eta) =
\int_{0}^{1} \frac{\partial L}{\partial \gamma_{\epsilon}' } \frac{d \eta}{d \epsilon} dt=\int_{0}^{1} \frac{\partial F}{\partial\gamma_{\epsilon}}\frac{\partial \gamma_\epsilon}{\partial \epsilon}dt -\int_{0}^{1} \frac{d}{dt} (\frac{\partial F}{\partial\gamma_\epsilon'})\eta dt 
$$

其中：

$$
\frac{\partial \gamma_\epsilon}{\partial \epsilon} = \eta
$$

合并化简：

$$
\delta L\lbrack\gamma\rbrack(\eta)=\int_{0}^{1} (\frac{\partial F}{\partial \gamma_\epsilon}-\frac{d}{dt}\frac{\partial F}{\partial \gamma_\epsilon})\eta dt
$$

令 $\delta L\lbrack\gamma\rbrack(\eta)$  取极值点：

$$
\int_{0}^{1}(\frac{\partial F}{\partial \gamma_\epsilon} - \frac{d}{dt}\frac{\partial F}{\partial \gamma_\epsilon})\eta dt = 0
$$

所以：

$$
\frac{\partial F}{\partial \gamma_{\epsilon}} - \frac{d}{dt}\frac{\partial F}{\partial \gamma_{\epsilon}} = 0 \Leftrightarrow \frac{\partial F}{\partial \gamma} - \frac{d}{dt}\frac{\partial F}{\partial \gamma} = 0
$$

这个就是**欧拉-拉格朗日方程**

