# MotionForge 补充材料网站

页面按研究问题、设计、评测、结果和完整材料组织：

1. **Overview**：研究问题、概览视频、任务规模与三项贡献。
2. **Benchmark**：四类场景、DOMINO / MotionForge 因果运动视频对比、CM-008 长程任务示例。
3. **Pipeline**：论文两阶段流程的四步概述，以及生成数据与训练子集的区别。
4. **Evaluation**：R1/R2/R3 交互时间轴和 ID、四种单因素 OOD、Joint OOD 因素矩阵。
5. **Results**：40 任务总体结果，以及独立注明 FC+CM 共 20 任务范围的协议实验。
6. **Explore**：按标签浏览视频，筛选子任务结果，下载数据。

ID 包含 40 个 Level 2 state-machine 任务、120 段视频；OOD 精选 16 个案例、48 段视频。任务卡可切换 Overview、Front、Wrist 视角。每组只显示选中标签，首次访问标签时创建卡片并加载封面；切走自动暂停视频。Joint 标签说明四因素联合变化。首页概览为 `MotionForge_Video.mp4`，字体统一为 Arial / Helvetica。

参考 [π₀ 项目页](https://www.pi.website/blog/pi0) 的横向视频长廊交互，独立实现，不使用其代码或素材。

## 本地打开

直接打开 `index.html`，或者在当前目录运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

访问 `http://127.0.0.1:8000`。无需安装依赖或构建。

## GitHub Pages

发布源为 `main` 分支的根目录。项目基路径在 `site-config.js` 中设置：

```js
base_url: '/MotionForge-Website/'
```

在 GitHub Pages 域名下，该配置设置页面的资源基路径；本地预览和匿名镜像继续使用相对路径。以后更改仓库名时，同步更新这个值。

## 填入视频

所有素材入口在 `content.js`，任务素材文件放在 `assets/media/`，首页概览视频使用根目录的 `MotionForge_Video.mp4`。已接入的 ID 素材来自 2026-09-17 批次，HRI 统一归为 EI，详情见 [`assets/media/id/README.md`](assets/media/id/README.md) 和 [`manifest.json`](assets/media/id/manifest.json)。封面为相应视频中提取的真实帧，保存为同目录、同名 `.webp`。

OOD 来自 2026-09-19 批次，仅将精选的 16 组复制到 [`assets/media/ood/`](assets/media/ood/README.md)，原始批次完整保留并排除在 Git 之外。案例与对应 ID 画面对照后选择，优先呈现明显的视觉变化，并为每个案例选择合适的默认镜头和真实帧封面。选用案例、原始任务和设置的对应关系见 [OOD 素材索引](assets/media/ood/manifest.json)。视频点击后加载，封面随标签首次访问时加载。

### 开头概览

`MOTIONFORGE_MEDIA.overview` 已配置为：

```js
{
  type: 'video',
  src: 'MotionForge_Video.mp4',
  poster: 'assets/media/overview.webp',
  alt: 'MotionForge overview',
  muted: false
}
```

封面取自视频真实画面，视频点击后加载并带声音播放，支持暂停、进度拖动及全屏。桌面和手机均按视频原始比例完整显示。更换视频时同步更新路径和封面。

### 视频浏览器

首页因果运动对比使用 `MOTIONFORGE_COMPARISON` 配置，DOMINO 原片下载到 `assets/media/comparison/`，MotionForge 复用已接入的 HT-001 Overview。两条视频均原速、完整播放，可以同时播放；来源和许可见 [对比素材说明](assets/media/comparison/README.md)。

`MOTIONFORGE_GALLERIES` 中每个对象对应一个标签，`videos` 中每个对象对应一张任务卡。标签支持左右方向键、Home、End；`#gallery-cm` 或 `#gallery-cm-clip-9` 深链接会激活对应标签并定位场景或任务。`src` / `poster` 设置默认视角；`views` 可选，用于提供多个镜头。例如（`taskPath` 为任务的 `level2` 目录）：

```js
{
  title: 'Grasp a moving object',
  src: `${taskPath}/overview.mp4`,
  poster: `${taskPath}/overview.webp`,
  caption: 'FC-000 · State machine · Level 2',
  views: [
    { id: 'overview', label: 'Overview', src: `${taskPath}/overview.mp4`, poster: `${taskPath}/overview.webp` },
    { id: 'front', label: 'Front', src: `${taskPath}/front.mp4`, poster: `${taskPath}/front.webp` },
    { id: 'wrist', label: 'Wrist', src: `${taskPath}/wrist.mp4`, poster: `${taskPath}/wrist.webp` }
  ]
}
```

单视角视频只需 `title`、`src`，可附 `poster` 与 `caption`。添加或删除任务对象会自动改变长廊长度和导航。视频使用 MP4 / H.264，保留原始比例；说明应准确标明任务、生成方式或策略及分布条件。

| ID | 视频类别 |
| --- | --- |
| `fc` | Factory Conveyor |
| `cm` | Circular Motion |
| `ht` | Home Tabletop |
| `ei` | Embodied Interaction |
| `object` | Object OOD |
| `background` | Background OOD |
| `lighting` | Lighting OOD |
| `speed` | Speed OOD |
| `joint` | Joint OOD，四个因素同时变化 |

OOD 卡片说明标明任务编号和可见变化，完整设置保留在素材索引。Speed 卡片的 Level 3 表示源数据的运动配置，视频按正常速度播放。展示案例为选定的成功演示，评测结果仍以独立结果表为准。

## 实验结果与子任务表格

`results.js` 保留论文表 II / III 的 7 个策略、6 种条件、42 个总体成功率数值；`assets/results.csv` 为相同数据。下方子任务表格包含 40 个任务在 6 种条件下的全部 1680 个成功率，支持按条件、场景和长短任务筛选，并提供完整 CSV 下载。任务名称与视频保持一致，页面中的 EI 对应源 CSV 的 HRI。

数据来自 `../website_alignment_20260923/merged_id_ood_40tasks_website_aligned.csv`。网站导出 `assets/task-results.csv` 保留条件、任务、时程、七个模型成功率及单位，数值与输入逐项相同。

总体口径为 40 个任务等权平均。每个条件包含四个场景各 10 个任务，或 23 个短任务与 17 个长任务；按任务数加权合并这些分组与直接求 40 任务均值相同。筛选后的表格底部只统计当前子集，不代表全部任务的总体值。

运行以下命令验证并重新生成网页数据（仅使用 Python 标准库）：

```sh
python3 scripts/build_task_results.py
```

脚本核对数据完整性，并将 42 个任务均值同时与 `assets/results.csv` 和 `results.js` 中的总体值比较；全部通过后生成数据文件和 `assets/task-results-verification.csv` 核对记录。当前 42 项差值均为 0。网页直接加载本地 JS 数据，因此双击 `index.html` 和通过 HTTP 访问均可使用筛选表格。更新总体数值时同步修改 `results.js` 与总体 CSV。

## 实时协议

`protocol.js` 挂载 `#protocol-demo` 和 `#protocol-results`。时间轴遵循论文 Fig. 3：R1 固定 120 Hz 细步异步推进，R2 粗步异步推进，R3 推理期间冻结。刻度为示意，不指定 R2 频率。默认展示完整静态图，按钮控制播放、暂停和重置；`prefers-reduced-motion` 下改为按阶段推进。

协议结果来自论文 Fig. 6(c) 和 `../chart_source/protocol_data.csv`，仅覆盖 FC、CM 的 20 个任务、3 个策略。ACT 的 R1/R2/R3 为 26.2/33.8/49.9，X-VLA 为 13.6/15.9/41.1，GR00T N1.7 为 12.7/11.6/34.4，单位均为成功率百分比。这些结果与 40 任务总体表分别展示。

## 文件

- `index.html`：研究介绍、生成流程、评测设计、结果与浏览区域。
- `site-config.js`：GitHub Pages 项目基路径。
- `styles.css`：统一字体、视频尺寸、响应式布局。
- `story.css`：章节布局、生成流程、任务概览、OOD 矩阵。
- `protocol.js` / `protocol.css`：实时协议示意与协议实验图表。
- `explorer.css`：视频标签浏览器的响应式布局。
- `content.js`：视频与图片的集中配置。
- `app.js`：视频标签、任务深链接、长廊滑动与媒体播放交互。
- `results.js`：现有结果图及数据。
- `task-results.js`：子任务表格、筛选和当前任务均值。
- `scripts/build_task_results.py`：子任务数据验证与网页数据生成。
- `assets/paper.pdf`：匿名文稿副本，已清除 PDF 文档元数据。
- `assets/results.csv`：当前结果表。
- `assets/task-results.csv`：240 行子任务成功率下载。
- `assets/task-results-data.js`：供页面直接加载的子任务数据。
- `assets/task-results-verification.csv`：42 项总体均值核对记录。

## 匿名托管

网站使用本地资源与相对路径，无外部字体、CDN 或统计脚本。将本目录作为网站根目录放入待匿名化仓库，之后按 anonymous.4open.science 的界面设置，并检查生成地址下的视频、PDF 和结果图。

上传的新视频、封面图、音轨和文件名应与匿名投稿要求保持一致。
