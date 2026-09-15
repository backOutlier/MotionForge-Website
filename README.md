# MotionForge 补充材料网站

当前版本以视频展示为主，结构为：

1. 论文标题与概览视频。
2. **四排场景视频**：Factory Conveyor、Circular Motion、Home Tabletop、Embodied Interaction。
3. **五排 OOD 视频**：Object、Background、Lighting、Speed、Joint。
4. 实验结果图与完整数据表。

共九排独立横向视频长廊，每排暂放六个占位视频，数量可调整。每排支持箭头切换、键盘操作和触摸滑动；视频下方放简短说明。字体统一为 Arial / Helvetica 无衬线字体。

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

所有素材入口在 `content.js`，所有素材文件放在 `assets/media/`。目前仅使用占位画面，没有提取论文图片，没有虚构实验视频。

### 开头概览

将 `MOTIONFORGE_MEDIA.overview` 从 `null` 改为：

```js
{
  type: 'video',
  src: 'assets/media/overview.mp4',
  poster: 'assets/media/overview.webp',
  alt: 'MotionForge overview'
}
```

也可以使用 `type: 'image'` 提供开头图片。视频按原始比例完整显示；若需要 16:9 开头布局，调整 `styles.css` 中 `.hero-stage` 的 `aspect-ratio`。

### 九排视频长廊

`MOTIONFORGE_GALLERIES` 数组里每个对象对应一排，`videos` 数组里每个对象对应一个视频。例如：

```js
{
  title: 'Intercepting a moving object',
  src: 'assets/media/fc-intercept.mp4',
  poster: 'assets/media/fc-intercept.webp',
  caption: 'Task name · Policy name · 1× playback'
}
```

修改相应占位条目即可；添加或删除 `videos` 数组中的对象会自动改变该排的长度和导航。视频建议使用 MP4 / H.264、16:9，并提供封面图。说明应准确标注任务、策略、播放倍率以及展示的分布条件。

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

OOD 视频可以使用预先制作的并排对照视频，方便在同一个画面内比较训练条件与对应 OOD 条件。占位标签 Clip 01 等仅表示待填位置，不代表已确认的实验案例。

## 后续扩充结果

当前 `results.js` 保留论文表 II / III 的 7 个策略、6 种条件、42 个总体成功率数值；`assets/results.csv` 为相同数据。`index.html` 中 `#results` 是独立结果区，后续可以在其中增加分场景、分任务、长短时程或消融结果图，不影响视频长廊。

此时无需增加空白的结果标签。收到新数据后，再增加对应图表及准确的比较维度。更新现有数值时同步修改 `results.js` 与 CSV。

## 文件

- `index.html`：标题、视频分区、结果区域。
- `site-config.js`：GitHub Pages 项目基路径。
- `styles.css`：统一字体、视频尺寸、响应式布局。
- `content.js`：视频与图片的集中配置。
- `app.js`：长廊滑动与媒体播放交互。
- `results.js`：现有结果图及数据。
- `assets/paper.pdf`：匿名文稿副本，已清除 PDF 文档元数据。
- `assets/results.csv`：当前结果表。

## 匿名托管

网站使用本地资源与相对路径，无外部字体、CDN 或统计脚本。将本目录作为网站根目录放入待匿名化仓库，之后按 anonymous.4open.science 的界面设置，并检查生成地址下的视频、PDF 和结果图。

上传的新视频、封面图、音轨和文件名应与匿名投稿要求保持一致。
