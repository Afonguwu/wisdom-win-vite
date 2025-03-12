## 目錄
- [專案發想](#專案發想)
- [使用技術](#使用技術)
- [網站頁面](#網站頁面)
- [線框圖](#線框圖)
- [指令列表](#指令列表)
- [環境變數](#環境變數)
- [資料夾結構](#資料夾結構)
- [專案套件](#專案套件)
- [第三方服務](#第三方服務)
- [CI/CD 說明](#CICD-說明)
- [專案挑戰 & 解決方案](#專案挑戰--解決方案)

## 專案發想

從身邊的事物中獲得靈感，自小受到長輩的關愛，我希望在自己能力所及的範圍內回報他們。

由於長輩的公司自成立以來一直沒有網站或其他對外宣傳管道，因此我希望通過製作一個網站，為公司的曝光率和形象提升做出貢獻。

## 使用技術
- Figma 繪製線框圖
- Vue.js、Scss、Bootstrap 5 開發前端網頁
- Vue Router 管理路由
- AOS、Swiper、C3.js 增加網頁視覺效果
- GitHub Actions 部屬 GitHub Pages

## 網站頁面
[pages](https://afonguwu.github.io/wisdom-win-vite/#/)
- 首頁：服務總攬、團隊總攬、品牌簡介、辦公室招租簡介
- 服務項目：服務詳細說明
- 律師團隊：律師圖卡展示
- 律師個人頁面：律師個人詳細資訊
- 聯絡我們：品牌聯絡資訊
- 合署資訊：辦公室招租資訊

## 線框圖

大略參考，後續樣式依視覺效果調整

[Figma](https://www.figma.com/design/jNo9nM3la2jdmfpnADMliW/%E4%BA%8B%E5%8B%99%E6%89%80?node-id=0-1&t=8voMP1s6TcQhoMS2-1)

## 指令列表
### 安裝

Node.js版本建議：`v18.17.0`以上

### 取得專案

```bash
git@github.com:Afonguwu/wisdom-win-vite.git
```

### 移動到專案內

```bash
cd wisdom-win-vite
```

### 安裝套件

```bash
npm install
```

### 環境變數設定

1. 在專案根目錄下建立一個 .env 檔案

```bash
touch .env
```

2. 在 `.env` 檔案中新增以下內容，並根據需求替換 `your_value_here`：

```bash
VITE_GOOGLE_API_KEY=your_value_here
```

## 環境變數

```env
VITE_GOOGLE_API_KEY= # Google Map API Key
...
```

### 運行專案

```bash
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:5173/wisdom-win-vite/
```

## 資料夾結構

- src
  - views - 畫面放置處
  - assets - 靜態放置處
    - scss
    - js
  - data - JSON資料放置處
  - router - 路由表放置處
- public - 部屬圖片放置處

## 專案套件

- aos v2.3.4
- bootstrap v5.3.3
- c3 v0.7.20
- d3 v7.9.0
- swiper v11.1.4
- vue v3.4.21
- vue-easy-lightbox v1.19.0
- vue-router v4.3.0
- vite v5.2.8
- git-cz v4.9.0

## 第三方服務

- Google Map

## CI/CD 說明

此專案有使用 Github Actions，主要配置文件位於`.github/workflows/deploy.yml`

> 事先設置

- 為了允許部署到 GitHub Pages，需要設置`GITHUB_TOKEN`的權限：
- 允許一個並發的部署，避免多個部署過程同時進行

### 推送到main分支

推送可執行sh，有使用git-cz需要選擇commit 類別及輸入訊息，其餘項目可按enter

```bash
sh dev.sh
```

若要推送到其他分支可參照`dev.sh`修改指令

### 部屬到gh-page

> 下列為觸發工作方式:

- 推送到 main 分支時觸發
- 手動在 GitHub Actions 頁面觸發

> 觸發執行工作：

- Checkout 代碼
- 設置 Node.js 環境
- 安裝相依套件
- 編譯
- 配置 Pages
- 上傳編譯成果
- 部署到 GitHub Pages

> 常見問題與排錯

- 編譯失敗：檢查`npm run build`步驟的輸出日志，確保所有相依套件已正確安裝，並且 `VITE_GOOGLE_API_KEY` 已正確設置
- 部署失敗：確保`GITHUB_TOKEN`具有`pages: write`權限，並且所有步驟均成功執行

## 專案挑戰 & 解決方案
- 調整 c3 圖表初始化方式，成功解決 Vue 中的渲染錯誤。
- 設計動畫顯示客戶數與案件數增長，增強視覺效果。
- 實作滾動事件監聽，根據頁面滾動距離調整 header 背景透明度，提升視覺效果並增強用戶體驗。
