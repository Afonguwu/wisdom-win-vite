#deploy to main
npm run build
git init
git add .
git commit -m ' img-url update'
git push git@github.com:Afonguwu/wisdom-win-vite.git main:main
#deploy to gh-pages
cd dist
git init
git add -A
git commit -m 'deploy'
git push  -f git@github.com:Afonguwu/wisdom-win-vite.git master:gh-pages
cd ..
