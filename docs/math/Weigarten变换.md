---
title: 5.Weigarten变换
categories: 微分几何
tags:
  - 微分几何
order: 5
createTime: 2026/01/07 22:15:46
permalink: /math/xrsdsnlb/
---

# Weigarten变换定义

对任意切向量 $\mathbf{v}\in T_pS$，考虑单位法向量场 $\mathbf{n}$ 在曲面邻域的方向导数，这个求导映射就是**Weigarten变换**或者**形算子**

用符号化的语言抽象描述：

$$
S_{p}:T_{p}S \rightarrow T_{p}S, S_{p}(\mathbf{v}) = -D_{v}(\mathbf{n})
$$

- $D_{\mathbf{v}}(\mathbf{n})$ 表示法向量场沿切向量 $\mathbf{v}$ 的方向导数
- $S_p$ 是线性算子
- 负号是个约定的方向

---

## Weingarten变换（形算子）与第一、二基本形式的关系
### 符号说明
假设有参数化曲面$\mathbf{r}=\mathbf{r}(u^1,u^2)$，在局部坐标 $(u^1,u^2)$ 下记偏导为  
$$
\mathbf{r}_i=\dfrac{\partial\mathbf{r}}{\partial u^i},\qquad \mathbf{r}_{ij}=\dfrac{\partial^2\mathbf{r}}{\partial u^i\partial u^j},\quad i,j=1,2.
$$
定义单位法向量:
$$
\mathbf{n}=\dfrac{\mathbf{r}_1\times\mathbf{r}_2}{|\mathbf{r}_1\times\mathbf{r}_2|}.
$$


第一基本形式$g_{ij}=\langle \mathbf{r}_i,\mathbf{r}_j\rangle$ 为局部切空间上的内积度量：

矩阵写法：
$$
g_{ij} = \begin{pmatrix}E&F \\ F&G\end{pmatrix}
$$

系数记做：$E=g_{11},;F=g_{12}=g_{21},;G=g_{22}$。


第二基本形式$b_{ij}=\langle \mathbf{r}_{ij},\mathbf{n}\rangle$ 为切向量的微小变化在法向的投影
$$
b_{ij} = \begin{pmatrix}L&M \\ M&N\end{pmatrix}
$$
系数记做：$L=b_{11},;M=b_{12}=b_{21},;N=b_{22}$。

### Weingarten方程
对 $\mathbf{n}$ 对坐标求偏导，符号记做 $\partial_i\mathbf{n}=\mathbf{n}_i$。
- $\partial_1\mathbf{n}=\mathbf{n}_1$:点 $p$ 沿$u_{1}$移动 $n$ 的变化率
- $\langle\mathbf{n},\mathbf{r}_j\rangle=0$

$\langle\mathbf{n},\mathbf{r}_j\rangle=0$ 对 $u^i$ 求导得：

$$
\begin{aligned}
\langle \frac{\partial \mathbf{n}}{\partial u^{i}},\mathbf{r}_{j}\rangle + \langle \mathbf{n},\frac{\partial \mathbf{r}_{j}}{\partial u^{i}}\rangle = 0
\\
\langle \mathbf{n}_i,\mathbf{r}_j\rangle + \langle \mathbf{n},\mathbf{r}_{ij}\rangle =0.
\end{aligned}
$$

> 此处有$i,j$ 两个指标

因为 $\langle \mathbf{n},\mathbf{r}_{ij}\rangle=b_{ij}$，所以  $\langle \mathbf{n}_i,\mathbf{r}_j\rangle = -b_{ij}$
而 $\mathbf{n}_i$ 本身是切向量（因为 $\langle\mathbf{n}_i,\mathbf{n}\rangle=0$），可以在基 ${\mathbf{r}_1,\mathbf{r}_2}$ 上展开：

$$
\mathbf{n}_{i} = \alpha^{i}\mathbf{r}_{i} = \alpha^{1}\mathbf{r}_{1} + \alpha^{2}\mathbf{r}_{2}
$$
> 注：$\alpha^i$ 这里是行向量

$$
\langle \mathbf{n}_i,\mathbf{r}_j\rangle=\langle \alpha^{i}\mathbf{r}_{i},\mathbf{r}_{j} \rangle=\alpha^{i} \underbrace{\langle \mathbf{r}_{i},\mathbf{r}_{j} \rangle}_{g_{ij}}
$$
所以：
$$
\alpha^{i} g_{ij} = b_{ij} 
$$
变形得：
$$
\alpha^{i} = b_{ij}g_{ij}^{-1}
$$
**切线方向的形算子**
定义形算子为 $S:=-D_{v}\mathbf{n}$，则：
$$
S(\mathbf{r}_k)=-\mathbf{n}_i= - b_{ij}g_{ij}^{-1}\mathbf{r}_k​.
$$
> 此处3个指标$i,j,k$

**任意切向量 $v$ 的形算子**
给定切平面上的任意向量：
$$
\mathbf{v} = v^i
$$
沿 $\mathbf{v}$ 求 $\mathbf{n}$ 的方向导数：
$$
D_{v}\mathbf{n} = v^{i}\mathbf{n}_{i} = -b_{ij}g_{ij}^{-1} v^{i}\mathbf{r}_k​.
$$
定义：
$$
S = b_{ij}g_{ij}^{-1}
$$
则：
$$
S(\mathbf{v}) = D_{\mathbf{v}}\mathbf{n} = -Sv^{i}\mathbf{r}_{k}
$$
这是形算子（Weingarten映射）的指标形式，确实简化的符号。

将$E,F,G$和$L,M,N$分别代入$S(\mathbf{r}_i)$和$S(\mathbf{v})$就能得到$Weingarten$变换的代数表达式：

$$
\mathbf{n}_{1} = \frac{FM-GL}{EG-F^{2}}\mathbf{r}_{1}+\frac{FL-EM}{EG-F^2}\mathbf{r}_{2}
$$
$$
\mathbf{n}_{2} = \frac{FN-GM}{EG-F^{2}}\mathbf{r}_{1}+\frac{FM-EN}{EG-F^2}\mathbf{r}_{2}
$$
$$
n_{v} = S(\mathbf{v})
= \frac{(L G - M F)\,v^1 + (M E - L F)\,v^2}{EG-F^2}\,\mathbf{r}_u
+ \frac{(M G - N F)\,v^1 + (N E - M F)\,v^2}{EG-F^2}\,\mathbf{r}_v.
$$
