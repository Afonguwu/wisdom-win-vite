## 線框圖

大略參考，後續樣式依視覺效果調整

[Figma](https://www.figma.com/design/jNo9nM3la2jdmfpnADMliW/%E4%BA%8B%E5%8B%99%E6%89%80?node-id=0-1&t=8voMP1s6TcQhoMS2-1)

## 畫面

![首頁圖片](/public/README/index.png '首頁')

---

![服務項目](/public/README/serve.png '服務項目')

---

![律師團隊](/public/README/team.png '律師團隊')

---

![聯絡我們](/public/README/contact.png '聯絡我們')

---

![合署資訊](/public/README/joint.png '合署資訊')

---

![律師個人資訊](/public/README/profile.png '律師個人資訊')

## 安裝

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

## 環境變數說明

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

## 資料夾說明

- src
  - views - 畫面放置處
  - assets - 靜態放置處
    - scss
    - js
    - data
- public - 部屬圖片放置處

## 專案技術

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

## 聯絡作者

你可以透過以下方式與我聯絡

[Gmail](225310917@gail.com)
