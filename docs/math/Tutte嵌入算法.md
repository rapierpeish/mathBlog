---
title: Tutte嵌入算法
categories: 几何算法
tags:
  - 几何算法
createTime: 2026/01/29 12:36:00
permalink: /math/vfjedyio/
---


# 代数理论

Tuttle 算法是个保拓扑的嵌入映射。

从代数角度来看，离散网格上有这些度量空间：
- 曲面内积度量（第一基本形式，连续的）
- 连通性度量（离散的，由顶点邻接关系定义的拓扑结构）

微分几何中的嵌入映射强调**光滑性和度量保留**。

而 Tutte 算法所关注的则是**图的拓扑结构**：嵌入过程中保留邻接关系，避免边交叉，但曲面原有的内积度量会丢失。

> 高斯已经严格证明过：曲面高斯曲率只与曲面内积度量(第一基本形式)有关(高斯绝妙定理)

## 嵌入映射

在拓扑学中，一个嵌入映射（embedding）是一个连续的、单射的映射：

$$
f:X \rightarrow Y
$$

它把 $X$ 映射到 $Y$ 中的某个子空间，并且在像空间上是一个拓扑同胚。

- 在**微分几何**中，嵌入常常要求光滑，并且关注度量的保留。
- 在**图论/离散几何**中，嵌入仅要求保持拓扑结构，即保持邻接关系，不允许边交叉。

因此，曲面原有的内积度量会丢失，但图的拓扑结构被严格保留。

## Tutte算法的代数机制

Tutte embedding 的代数机制是：
1. 给定两个同胚的空间
2. 每个内部顶点 $v$ 的位置由邻居顶点 $u$ 的凸组合给出：

$$
f(v) = \frac{1}{deg(v)}\sum_{u\in U_{1}}f(u)
$$

$U_{1}$ 是顶点 $v$ 的一阶领域

这实际上就是**离散拉普拉斯算子**的零拉普拉斯条件：

$$
\Delta f(v) = f(v) - \frac{1}{deg(v)}\sum_{u\in U_{1}}f(u) = 0
$$

这个线性条件满足了上文提到的条件：
- 放弃内积度量
- 线性条件是个凸组合，所以边 $[v,u_{i}]$ 不会相交（这里考虑无定向情况）。

Tutte映射就是在满足以上两个机制下，将三维网格映射为二维网格，最常见的用途就是计算uv坐标。当然，Tutte映射通常用来计算映射初始值，需要根据不同需求，再加入其它类型的极值优化，可以大致分为4类：
- **拓扑嵌入类**（保邻接关系，不考虑度量）
	- 代表：Tutte embedding、Planar straight-line embedding
	- 代数机制：解线性方程组（凸组合）。
	- 群视角：邻接图的 **自同构群** 作用下，嵌入是群不变量。
- **能量最小化类**（保拓扑，优化几何）
    - 代表：Spring embedding, Spectral embedding
    - 代数机制：二次型最小化（特征值问题）。
    - 群视角：等价于在 **正交群 $O(n)$ ** 或 **对称群 $S_n$ ** 约束下求能量最小点。
- **保角映射类**（保角度，部分保度量）
    - 代表：Harmonic map embedding, Conformal embedding
    - 代数机制：解拉普拉斯方程（调和函数）。
    - 群视角：**莫比乌斯群** 或 **共形群** 的不变性。
- **等距嵌入类**（保度量）
    - 代表：Isometric embedding, Nash embedding theorem
    - 代数机制：解非线性 PDE。
    - 群视角：保持 **全等群 (isometry group)** 的嵌入。


# 算法表述

## 约定符号

定义 $u_i$ 为参数域 $R^2$ 上的点
定义 $\Omega$ 为参数域上$u_i$ 的集合
定义 $\Omega_{in}$ 为内部点；
定义 $\Omega_{out}$ 为边界点集合，这是一个有向环(这不是代数环，只是一个有向封闭路径)。


## 算法步骤

### 对内部点

对 $\forall u_i \in \Omega_{in}$ 满足：

$$
u_i - \frac{1}{d(i)}\sum_{j \in N_i} u_j = 0
$$

其中
- $N_i$ 为顶点 $u_{i}$ 的1领域
- $d(i)$ 为顶点 $u_{i}$ 的度

### 对边界点

对边界点，我们需要特殊处理，我们假定网格在做Tutte映射后，全部均匀分布在一个圆盘上。

## 建立矩阵表述

对$\forall u_i \in \Omega$满足下列方程：

$$
a_{i}^j u_i = b_i
$$  

其中

$$
a_{i}^j = \begin{cases} 1, \text{if i=j} \\ -1/{d(i)}, \text{if }j \in \Omega_{in} \text{ and } i \neq j \\ 0,others \end{cases}
$$

$$
b_i = \begin{cases} 0,i\in \Omega_{in} \\ u_i,i \in \Omega_{out} \end{cases}
$$

解使用Eigen解线性方程组得到参数域坐标 $u_i$

**输入面具**
![](/docs/public/Pasted image 20250830162641.png)

**输出平面**
![](/docs/public/Pasted image 20250830162758.png)

# C++实现

C++核心代码：

```cpp 
void TutteEmbedding(const Polyhedron polyhedron, std::vector<Kernel::Point_3>& points, std::vector<int>& faces) {
	// 存储边界环上的顶点
    std::unordered_set<int> outPointIndex;
    std::vector<int> orderedBountryIndex;
    // key:index;value:position
    std::map<int, Kernel::Point_2> bountryPoints;

    Mesh_calc mesh(polyhedron);


    // 查找第一个边界半边
    Halfedge_iterator border_halfedge;
    bool found_border = false;
    for (Halfedge_iterator h = polyhedron.halfedges_begin(); h != polyhedron.halfedges_end(); ++h) {
        if (h->is_border()) {
            border_halfedge = h;
            found_border = true;
 
            break;
        }
    }


    if (!found_border) {
        std::cout << "The polyhedron has no border." << std::endl;
        return;
    }

    // 沿着边界环遍历
    Halfedge_iterator h = border_halfedge;
    do {
        // 获取当前边界半边的起点
        Vertex_const_handle vh = h->vertex();
        // 如何获取点的index??
        int index = mesh.GetIndex(vh);
        // 加入outPointIndex
        outPointIndex.insert(index);
        orderedBountryIndex.push_back(index);
        // 移动到下一个边界半边
        h = h->next();
    } while (h != border_halfedge); // 回到起点时结束

    // 将边界分布在单位圆上,计算坐标
    float interval = 2 * Geometry::PHI / (float)orderedBountryIndex.size();

    for (size_t i = 0; i < orderedBountryIndex.size(); i++)
    {
        Kernel::Point_2 p2(cos(i * interval), sin(i * interval));
        bountryPoints.insert(std::pair<int,Kernel::Point_2>(orderedBountryIndex[i],p2));
    }

    std::cout << "bountry point count:" << bountryPoints.size() << std::endl;

    const int N = polyhedron.size_of_vertices();
    // 建立拉普拉斯矩阵
    Eigen::SparseMatrix<double> A(N, N);
    std::vector<Eigen::Triplet<double>> triplets;
    Eigen::VectorXd bx(N), by(N);

    for (size_t i = 0; i < N; i++)
    { 
        std::unordered_set<int> neigh;
        mesh.GetNeighHashSet(i, neigh);
        for (size_t j = 0; j < N; j++)
        {
            bool isBorder = outPointIndex.find(i) != outPointIndex.end();
            if (isBorder) {
                triplets.push_back(Eigen::Triplet<double>(i, i, 1.0)); // 边界点：对角线为 1
            }
            else {
                triplets.push_back(Eigen::Triplet<double>(i, i, 1.0)); // 内部顶点：对角线为 1
                if (neigh.size() > 0) {
                    for (int j : neigh) {
                        triplets.push_back(Eigen::Triplet<double>(i, j, -1.0 / neigh.size())); // 内部顶
                    }
                }
            }
        }
    }
    A.setFromTriplets(triplets.begin(), triplets.end());

    //验算矩阵
    for (std::pair<int, Kernel::Point_2> pair : bountryPoints) {
        int key = pair.first;
        for (size_t i = 0; i < N; i++)
        {
            if (i != key && A.coeff(key, i) != 0) {
                std::cerr << "Error matrix, key:" << key << "," << "i:" << i << "coeff(key, i):" << A.coeff(key, i) << std::endl;
            }
        }
    }

    std::cout << "build laplace matrixA" << std::endl;
    A.makeCompressed();
    // 建立目标向量
    for (size_t i = 0; i < N; i++)
    {
        auto it = outPointIndex.find(i);
        if (it == outPointIndex.end()) {
            bx[i] = 0;
            by[i] = 0;
        }
        else {
            bx[i] = bountryPoints[i].x();
            by[i] = bountryPoints[i].y();
        }
    }

    // 使用 BiCGSTAB 求解
    Eigen::BiCGSTAB<Eigen::SparseMatrix<double>> solver;
    solver.compute(A);
    Eigen::VectorXd ux = solver.solve(bx);
    Eigen::VectorXd uy = solver.solve(by);

    // 构造新的点集
    for (size_t i = 0; i < N; i++)
    {
        points.push_back(Kernel::Point_3(ux[i], uy[i], 0));
    }
    faces = mesh.GetFaces();
}
```

# 同调群（孔洞）对嵌入效果的影响

目标：
- 总结Tutte 嵌入的经典结论
- 讨论网格具有非平凡 $H_{1}$ 同调群的算法理论修正
- 工程实践处理路线

## Tutte 嵌入的经典结论（圆盘情形）

- 输入：拓扑圆盘（单连通）三角网格 $M=(V,E,F)$
- 约束：将边界 $\partial M$ 以 **保持循环次序** 的方式固定到一个 **凸多边形** $P\subset\mathbb{R}^2$
- 内点：每个内点 $i\in V_{\text{int}}$​ 满足 **重心条件**：

$$
\sum_{j \in N(i)} \omega_{ij}(u_{i}-u_{j})=0 
$$

- 结论：得到的平面嵌入 $u:V\to\mathbb{R}^2$ **无自交**，且边保持不反转（面三角形定向一致）
- 核心依赖：单连通 + 凸边界 + 正权（保证最大值原理/离散最大值原理成立）

## $H_1(M)$ 非平凡

$H_1(M)$ 非平凡意味着存在 **非边界的 1-环**。以上文中的面具为例，就是在面具上戳了一个洞。