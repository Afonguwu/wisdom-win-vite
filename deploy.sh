npm run build
git init
git add .
git commit -m ' upgrate'
git push git@github.com:Afonguwu/wisdom-win-vite.git main:main

git add dist/.
git commit -m 'deploy'
git push  git@github.com:Afonguwu/wisdom-win-vite.git main:gh-pages
cd ..
