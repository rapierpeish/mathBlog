import os
import shutil
import re

# 配置路径
OBSIDIAN_DIR = r"E:\obsidian\repo\math\数学"          # Obsidian 根目录
OBSIDIAN_IMG_DIR = os.path.join(OBSIDIAN_DIR, "images")  # 图片目录
BLOG_POSTS_DIR = os.path.join(os.getcwd(), "docs", "math")  # Hexo _posts
BLOG_IMAGES_DIR = os.path.join(os.getcwd(), "docs", "public")  # Hexo images
BLOG_ROOT = "/docs"  # Hexo root

# 确保 Hexo 目标目录存在
os.makedirs(BLOG_POSTS_DIR, exist_ok=True)
os.makedirs(BLOG_IMAGES_DIR, exist_ok=True)

# 加载copyFiles.txt,

copy_files = []
with open("copyFiles.txt", 'r', encoding='utf-8') as f:
    # 逐行读取文件
    for line_num, line in enumerate(f, 1):
        # 去除行首行尾的空白字符（空格、换行、制表符等）
        cleaned_line = line.strip()
        # 将处理后的路径添加到列表中
        copy_files.append(cleaned_line)
# 指定要拷贝的 Obsidian Markdown 文件列表（相对 OBSIDIAN_DIR）
# copy_files = [
#     "3.微分几何\曲线\空间曲线讲义.md",
#     "3.微分几何\正则曲面讲义.md",
#     "3.微分几何\曲面\第一基本形式.md",
#     "3.微分几何\曲面\第二基本形式.md",
#     "3.微分几何\Weigarten变换.md",
#     "3.微分几何\曲面\曲面曲率.md",
#     "3.微分几何\共形变换.md",
#     "3.微分几何\弧长的变分问题.md",
#     "3.微分几何\从Sobolev度量出发建立变分.md",
#     "3.微分几何\联络.md",
#     "3.微分几何\曲面\曲面的自然标架运动.md",
#     "算法\Tutte嵌入算法.md",
#     "算法\山脊线提取算法.md",
#     "6.拓扑\同调群.md",
#     "6.拓扑\单纯形.md",
#     "6.拓扑\基本群.md",
#     "1.代数学\环论\整环.md",
#     "1.代数学\环论\多项式环.md",
#     "3.微分几何\微分形式.md",
#     "力学\\1.一维流形上的弹性静力问题.md",
#     "力学\\2.1 二维流形的弹性静力问题.md",
#     "力学\\2.2 膜单元静力计算.md",
#     "力学\\2.3.1 DKT 薄板单元算例.md",
#     "力学\\3.1 弹性薄壳的几何方程.md",
#     "力学\\1.1力学基础.md",
# ]

# 匹配 Obsidian 图片引用 ![[xxx.png]]
pattern = re.compile(r'!\[\[([^\]]+?)(\|[0-9]+)?\]\]')
 
for rel_path  in copy_files:
    src_md = os.path.join(OBSIDIAN_DIR, rel_path)
    if not os.path.exists(src_md):
        print(f"⚠️ 文件不存在: {src_md}")
        continue

    file_name = os.path.basename(rel_path)    

    dst_md = os.path.join(BLOG_POSTS_DIR, file_name)

    # 读取 Markdown 内容
    with open(src_md, "r", encoding="utf-8") as f:
        content = f.read()

    # 查找 Obsidian 图片引用
    matches = pattern.findall(content)
    for img_name_pairs in matches:
        img_name = img_name_pairs[0]
        src_img = os.path.join(OBSIDIAN_IMG_DIR, img_name)
        if os.path.exists(src_img):
            dst_img = os.path.join(BLOG_IMAGES_DIR, img_name)
            shutil.copy2(src_img, dst_img)
            print(f"✅ 拷贝图片: {src_img} → {dst_img}")
        else:
            print(f"⚠️ 图片不存在: {src_img}")

        # 替换 Markdown 内图片引用为 Hexo 格式
        content = content.replace(f"![[{img_name}]]",
                                  f"![]({BLOG_ROOT}/public/{img_name})")

    # 写入 Hexo _posts
    with open(dst_md, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"📄 拷贝文章: {src_md} → {dst_md}")

print("🎉 指定文章同步完成！")
