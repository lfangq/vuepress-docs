---
title: VsCode快捷键
date: 2023-05-22 13:45:11
categories: 
  - 技术文档
tags: 
  - 开发工具
---

## 快捷键大全

#### General

| 快捷键               | 描述                    | 中文               |
| -------------------- | ----------------------- | ------------------ |
| Ctrl + Shift + P, F1 | Show Command Palette    | 显示命令面板       |
| Ctrl + P             | Quick Open, Go to File… | 快速打开，进入文件 |
| Ctrl + Shift + N     | New window/instance     | 新窗口/实例        |
| Ctrl+Shift+W         | Close window/instance   | 关闭窗口/实例      |
| Ctrl +               | User Settings           | 用户设置           |
| Ctrl + K Ctrl + S    | Keyboard Shortcuts      | 键盘快捷键         |

#### Basic editing

| 快捷键               | 描述                               | 中文           |
| -------------------- | ---------------------------------- | -------------- |
| Ctrl + X             | Cut line (empty selection)         | 剪切           |
| Ctrl + C             | Copy line (empty selection)        | 复制           |
| Alt + ↑ / ↓          | Move line up/down                  | 向上/下移动行  |
| Shift + Alt + ↓ / ↑  | Copy line up/down                  | 向上/下复制行  |
| Ctrl + Shift + K     | Delete line                        | 删除行         |
| Ctrl + Enter         | Insert line below                  | 在下面插入行   |
| Ctrl + Shift + Enter | Insert line above                  | 在上面插入行   |
| Ctrl + Shift + \     | Jump to matching bracket           | 跳到匹配的括号 |
| Ctrl + ] / [         | Indent/outdent line                | 行缩进         |
| Home /               | End Go to beginning/end of line    | 转到行首/行尾  |
| Ctrl + Home          | Go to beginning of file            | 转到文件的开头 |
| Ctrl + End           | Go to end of file                  | 转到文件的结尾 |
| Ctrl + ↑ / ↓         | Scroll line up/down                | 行上下滚动     |
| Alt + PgUp / PgDn    | Scroll page up/down                | 页面上下滚动   |
| Ctrl + Shift + [     | Fold (collapse) region             | 折叠           |
| Ctrl + Shift + ]     | Unfold (uncollapse) region         | 展开           |
| Ctrl + K Ctrl + [    | Fold (collapse) all subregions     | 折叠全部区域   |
| Ctrl + K Ctrl + ]    | Unfold (uncollapse) all subregions | 展开全部区域   |
| Ctrl + K Ctrl + 0    | Fold (collapse) all regions        | 折叠全部区域   |
| Ctrl + K Ctrl + J    | Unfold (uncollapse) all regions    | 展开全部区域   |
| Ctrl + K Ctrl + C    | Add line comment                   | 添加行注释     |
| Ctrl + K Ctrl + U    | Remove line comment                | 删除行注释     |
| Ctrl + /             | Toggle line comment                | 行注释         |
| Shift + Alt + A      | Toggle block comment               | 块注释         |
| Alt + Z              | Toggle word wrap                   | 切换自动换行   |

#### Navigation

| 快捷键             | 描述                            | 中文                |
| ------------------ | ------------------------------- | ------------------- |
| Ctrl + T           | Show all Symbols                | 按关键字搜索        |
| Ctrl + G           | Go to Line...                   | 行跳转              |
| Ctrl + P           | Go to File...                   | 打开文件            |
| Ctrl + Shift + O   | Go to Symbol...                 | 转到编辑器中的符号  |
| Ctrl + Shift + M   | Show Problems panel             | 显示问题面板        |
| F8                 | Go to next error or warning     | 转到下个错误或警告  |
| Shift + F8         | Go to previous error or warning | 转到上个错误或警告  |
| Ctrl + Shift + Tab | Navigate editor group history   | 切换工作区          |
| Alt + ← / →        | Go back / forward               | 切换工作区          |
| Ctrl + M           | Toggle Tab moves focus          | 切换 Tab 键移动焦点 |

#### Search and replace

| 快捷键            | 描述                                       | 中文                             |
| ----------------- | ------------------------------------------ | -------------------------------- |
| Ctrl + F          | Find                                       | 查找                             |
| Ctrl + H          | Replace                                    | 替换                             |
| F3 / Shift + F3   | Find next/previous                         | 查找上/下一个                    |
| Alt + Enter       | Select all occurences of Find match        | 执行笔记本单元格并在下方插入     |
| Ctrl + D          | Add selection to next Find match           | 将下一个查找匹配项添加到选择     |
| Ctrl + K Ctrl + D | Move last selection to next Find match     | 将上次选择移动到下一个查找匹配项 |
| Alt + C / R / W   | Toggle case-sensitive / regex / whole word | 区分大小写/正则匹配/全字匹配     |

#### Multi-cursor and selection

| 快捷键                         | 描述                                        | 中文                         |
| ------------------------------ | ------------------------------------------- | ---------------------------- |
| Alt + Click                    | Insert cursor                               | 将鼠标点击的行添加到选择项   |
| Ctrl + Alt + ↑ / ↓             | Insert cursor above / below                 | 在上面/下面插入光标          |
| Ctrl + U                       | Undo last cursor operation                  | 撤销最后光标操作             |
| Shift + Alt + I                | Insert cursor at end of each line selected  | 在选定的每一行的末尾插入光标 |
| Ctrl + L                       | Select current line                         | 选择当前行                   |
| Ctrl + Shift + L               | Select all occurrences of current selection | 选择当前选择的所有匹配项     |
| Ctrl + F2                      | Select all occurrences of current word      | 选择当前出现的所有单词       |
| Shift + Alt + →                | Expand selection                            | 扩大选择                     |
| Shift + Alt + ←                | Shrink selection                            | 缩小选择                     |
| Shift + Alt + (drag mouse)     | Column (box) selection                      | 列(箱)的选择                 |
| Ctrl + Shift+Alt + (arrow key) | Column (box) selection                      | 列(箱)的选择                 |
| Ctrl + Shift+Alt + PgUp / PgDn | Column (box) selection page up/down         | 列(箱)的选择                 |

#### Rich languages editing

| 快捷键             | 描述                        | 中文         |
| ------------------ | --------------------------- | ------------ |
| Ctrl + Space       | Trigger suggestion          | 触发的建议   |
| Ctrl + Shift+Space | Trigger parameter hints     | 触发参数提示 |
| Shift + Alt + F    | Format document             | 格式化文件   |
| Ctrl + K Ctrl + F  | Format selection            | 格式选择     |
| F12                | Go to Definition            | 移至定义区   |
| Alt + F12          | Peek Definition             |              |
| Ctrl + K F12       | Open Definition to the side | 打开定义到边 |
| Ctrl + .           | Quick Fix                   | 快速修复     |
| Shift + F12        | Show References             | 显示引用     |
| F2                 | Rename Symbol               | 重命名符号   |
| Ctrl + K Ctrl + X  | Trim trailing whitespace    | 修剪尾随空格 |
| Ctrl + K M         | Change file language        | 更改文件语言 |

#### Editor management

| 快捷键                     | 描述                                    | 中文                       |
| -------------------------- | --------------------------------------- | -------------------------- |
| Ctrl + F4, Ctrl + W        | Close editor                            | 关闭编辑器                 |
| Ctrl + K F                 | Close folder                            | 关闭文件夹                 |
| Ctrl + \                   | Split editor                            | 拆分编辑器                 |
| Ctrl + 1 / 2 / 3           | Focus into 1st, 2nd or 3rd editor group | 关注第一，第二或第三编辑组 |
| Ctrl + K Ctrl + ← / →      | Focus into previous/next editor group   | 关注上个/下个编辑组        |
| Ctrl + Shift + PgUp / PgDn | Move editor left/right                  | 左/右移动编辑器            |
| Ctrl + K ← / →             | Move active editor group                | 移动活动编辑器组           |

#### File management

| 快捷键             | 描述                                    | 中文                        |
| ------------------ | --------------------------------------- | --------------------------- |
| Ctrl + N           | New File                                | 创建新文件                  |
| Ctrl + O           | Open File...                            | 打开文件                    |
| Ctrl + S           | Save                                    | 保存                        |
| Ctrl + Shift + S   | Save As...                              | 另保存                      |
| Ctrl + K S         | Save All                                | 全部保存                    |
| Ctrl + F4          | Close                                   | 关闭                        |
| Ctrl + K Ctrl + W  | Close All                               | 关闭全部                    |
| Ctrl + Shift + T   | Reopen closed editor                    | 重新                        |
| Ctrl + K           | Enter Keep preview mode editor open     | 重新打开关闭编辑器          |
| Ctrl + Tab         | Open next                               | 打开下一个                  |
| Ctrl + Shift + Tab | Open previous                           | 打开上一个                  |
| Ctrl + K P         | Copy path of active file                | 复制活动文件的路径          |
| Ctrl + K R         | Reveal active file in Explorer          | 在资源管理器中显示活动文件  |
| Ctrl + K O         | Show active file in new window/instance | 在新窗口/实例中显示活动文件 |

#### Display

| 快捷键           | 描述                                       | 中文                      |
| ---------------- | ------------------------------------------ | ------------------------- |
| F11              | Toggle full screen                         | 全屏                      |
| Shift + Alt + 0  | Toggle editor layout (horizontal/vertical) | 切换编辑器布局(水平/垂直) |
| Ctrl + = / -     | Zoom in/out                                | 放大/缩小                 |
| Ctrl + B         | Toggle Sidebar visibility                  | 切换侧栏可见性            |
| Ctrl + Shift + E | Show Explorer / Toggle focus               | 显示资源管理器            |
| Ctrl + Shift + F | Show Search                                | 显示搜索栏                |
| Ctrl + Shift + G | Show Source Control                        | 显示源控制                |
| Ctrl + Shift + D | Show Debug                                 | 显示 Debug                |
| Ctrl + Shift + X | Show Extensions                            | 显示插件                  |
| Ctrl + Shift + H | Replace in files                           | 批量文件替换              |
| Ctrl + Shift + J | Toggle Search details                      | 切换搜索细节              |
| Ctrl + Shift + U | Show Output panel                          | 显示输出面板              |
| Ctrl + Shift + V | Open Markdown preview                      | 打开 Markdown 预览        |
| Ctrl + K V       | Open Markdown preview to the side          | 侧边打开 Markdown 预览    |
| Ctrl + K Z       | Zen Mode (Esc Esc to exit)                 |                           |

#### Debug

| 快捷键            | 描述              | 中文     |
| ----------------- | ----------------- | -------- |
| F9                | Toggle breakpoint | 切换断点 |
| F5                | Start/Continue    | 开始     |
| Shift + F5        | Stop              | 停止     |
| F11 / Shift + F11 | Step into/out     | 步入     |
| F10               | Step over         | 跨步     |
| Ctrl+K Ctrl+I     | Show hover        | 显示悬停 |

#### Integrated terminal

| 快捷键              | 描述                       | 中文              |
| ------------------- | -------------------------- | ----------------- |
| Ctrl + C            | Copy selection             | 复制到活动终端    |
| Ctrl + V            | Paste into active terminal | 粘贴到活动终端    |
| Ctrl + ↑ / ↓        | Scroll up/down             | 向上/向下滚动     |
| Shift + PgUp / PgDn | Scroll page up/down        | 向上/向下滚动页面 |
| Ctrl + Home / End   | Scroll to top/bottom       | 滚动到顶部/底部   |
| Ctrl + `            | Show integrated terminal   | 显示终端          |
| Ctrl + Shift + `    | Create new terminal        | 打开新终端        |

## 插件

### Path Intellisense

路径自动补全插件